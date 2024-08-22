import { useState, useEffect } from "react"
import Loading from "./Loading"
const Vote = ({data, userData, isLoading}) =>{
    // setTimeout(() => {
        
    // }, 1000);
    return (
        <div className="">
            Vote
            {userData.name}
     

     
      {/* <div>
      <Vote data = {data}  />
      </div> */}
{data ? <>

      {data.map((movieDetail, index) => (
        <div key={index}>
          <p>{movieDetail.movie1.title}</p>
          <p>{movieDetail.movie2.title}</p>
        </div>
      ))}
</>
      :"No data"
}
          
           
          
        </div>
    )

}

export default Vote