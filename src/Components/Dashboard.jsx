import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Vote from "./Vote";
import Loading from "./Loading.jsx";
import { jwtDecode } from "jwt-decode";

const Dashboard = ({ userData, baseurl, isLoading }) => {
  const [name, setName] = useState("");
  const [userId, setId] = useState("");
  const [result, setResult] = useState("");
  const [winner, setWinner] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
   fetchData()
  const cookie = document.cookie;

   const token = jwtDecode(cookie);
  
      setName(token.name);
      setId(token.id);
  }, []);
  const fetchData = async ()=>{
    
    try {
        const responses =  await Promise.all(
          
          userData.movie.map(async(movieId)=>{
            console.log(movieId);
            
            let response = await axios.get(`${baseurl}/api/getresult/${movieId}`)
            // console.log(response)
            return response.data.movieDetails
          }
        ))
            
            setData(responses)
            
            
          console.log(responses)
            toast.success("Fetched Movie Results")
        }
            catch (error) {
              console.error(error)}
            }
            // console.log(data.winner);
  return (
    <div className="">
    {isLoading ?
    <>

      <Loading />
    </>
      :
      <Vote data={data} userData={userData} isLoading={isLoading} />
    }
     
    </div>
  );
};
export default Dashboard;

