import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import heroImage from "../assets/theater-8921521_1920.jpg"
import success from "../assets/check.png";
import error from "../assets/cross.png";
import eyesOpen from "../assets/view.png";
import eyesclosed from "../assets/watch.png";

const Signup = ({ baseurl, navbarShow }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(6, "Too Short!")
      .max(30, "Too Long for a Name😜!!!")
      .required("Name is required to call you"),
    email: yup
      .string()
      .matches(
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        "Please provide a valid email"
      )
      .email("Invalid Email")
      .required("Email is required to contact you"),
    password: yup
      .string()
      .min(
        8, <p className="">
          Your password must contain 8 or more characters with at least one of
          each: 1 Uppercase, 1 Lowercase, 1 Number and 1 Special character
        </p>
      )
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
        "Your password must contain at least one Uppercase, one Lowercase, one Number, and one Special character."
      )
      .required("Password is required to keep your account secure"),
    confirmpassword: yup.string().required("Retype your password"),
  });

  const formik = useFormik({
    initialValues: data,
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${baseurl}/api/register`, values);
        toast.success(response.data.message, { icon: "🤯" });

        formik.resetForm();
        console.log(response.data);
        setTimeout(() => {
          toast.dismiss(response.data.message);
        }, 3000);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    },
  });
  const handleConfirmPassword = () => {
    if (formik.values.password !== formik.values.confirmPassword) {
     toast.error("Password doesn't match")
     setTimeout(() => {
     toast.dismiss("Password doesn't match")
     }, 4000);
    }
  };
  return (
    <div className={navbarShow ? "blur-sm contrast-100" : "bg-base-100"}>
      <Toaster />
      <img src={heroImage} alt="seats" className="h-36 w-4/5 mx-auto mt-3 rounded" />
      <div className="flex flex-col items-center justify-center">

      <h1 className="text-xl mb-4">Signup</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 justify-center w-[23rem]">
        <label
          className="input input-bordered flex items-center   gap-2"
          name="name"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
            >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          Name <span className="text-red-700">*</span>
          <input
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="grow"
            placeholder="Enter your fullname"
            name="name"
            />
        </label>
        {formik.errors.name && (<div className="text-red-700">* {formik.errors.name}</div>)}

        <label
          className="input input-bordered flex items-center   gap-2"
          name="name"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
            >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          Email <span className="text-red-700">*</span>
          <input
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="grow"
            placeholder="johndoe@site.com"
            name="email"
            />
        </label>
        {formik.errors.email && (<div className="text-red-700">* {formik.errors.email}</div>)}

        <label
          className="input input-bordered flex items-center   gap-2"
          name="password"
          >
          <button type="button" onClick={() => setShow(!show)} className="w-4">
            <img
              src={show ? eyesclosed : eyesOpen}
              alt="openEyes"
              className="w-8 rounded-full"
              />

            {/* <img src={eyesclosed} alt="closed" className="w-8 rounded-full" /> */}
          </button>
          Password <span className="text-red-700">*</span>
          <input
            type={show ? "password" : "text"}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="grow"
            placeholder="Your Password"
            />
        </label>
        {formik.errors.password && (<div className="text-red-700 text-sm  bg-base-100 top-80 p-2 w-[23rem] font-semibold">{formik.errors.password}</div>)}
        <label
          className="input input-bordered flex items-center text-sm gap-2"
          name="confirmPassword"
          >
          <button type="button" onClick={() => setShow(!show)} className="w-4">
            <img
              src={show ? eyesclosed : eyesOpen}
              alt="openEyes"
              className="w-8 rounded-full"
              />
          </button>
          Confirm Password<span className="text-red-700">*</span>
          <input
            type={show ? "password" : "text"}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            name="confirmPassword"
            className="grow"
            placeholder="Retype your Password"
          />
        </label>

       

        <button className="border-2 rounded-lg w-24 ml-36 btn btn-secondary" type="submit" onClick={handleConfirmPassword}>
          Register
        </button>
      </form>
            </div>
    </div>
  );
};
export default Signup;
