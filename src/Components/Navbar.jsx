import { useState } from "react"
import burgerMenu from "../assets/burger-bar.png"
import burgerOpen from "../assets/burgerClose.png"
import { Link } from "react-router-dom"


const Navbar = ({setChangeTheme, changeTheme, show, setShow}) =>{
   
return(
<div className="flex items-center h-12 static">
    <a href="/" className="text-lg ms-4 font-semibold">Movievote</a>
    <div className="ms-auto">

    <input
  type="checkbox"
  value={changeTheme ? "dark" : "mytheme"}
  onClick={()=>setChangeTheme(!changeTheme)}
  className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)] ms-auto me-2" />
    <button type="button" className=" me-5" onClick={()=>setShow(!show)}>

   { show ? (
     <img src={burgerOpen} className="w-5 z-10 rotate-90 transition-transform" alt="burgerMenu" />
    ):
    <img src={burgerMenu} className="w-6 z-10 transition-transform -rotate-0" alt="burgerMenu" />
}</button>
   
    <ul className={show ? "visible z-10 bg-black/70 text-base-100 drop-shadow right-0 top-9 w-full bg-base-100 h-[20rem] absolute p-2" : "hidden"}>
    <li className="flex font-semibold" onClick={()=>setShow(!show)}>
      <Link to={"/login"}>Login</Link>
     
   
    </li> <li className="flex font-semibold" onClick={()=>setShow(!show)}>
      <Link to={"/signup"}>Signup</Link>
     
   
    </li> <li className="flex font-semibold" onClick={()=>setShow(!show)}>
      <Link to={"/contactus"}>Contact Us</Link>
     
   
    </li>
    </ul>
    </div>

</div>
)
}

export default Navbar