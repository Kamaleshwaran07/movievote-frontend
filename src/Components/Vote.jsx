import { useState, useEffect } from "react"
const Vote = ({data, userData}) =>{
    // setTimeout(() => {
        
    // }, 1000);
    return (
        <div className="vote">
            Vote
            {userData.name}
     

     
      {/* <div>
      <Vote data = {data}  />
      </div> */}

      {data.map((movieDetail, index) => (
        <div key={index}>
          <p>{movieDetail.movie1.title}</p>
          <p>{movieDetail.movie2.title}</p>
        </div>
      ))}
          
           
          
        </div>
    )

}

export default Vote