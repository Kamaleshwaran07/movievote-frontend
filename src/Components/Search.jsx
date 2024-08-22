import axios from "axios";
import React, { useState } from "react";
import Card from "./Card";

const Search = ({baseurl}) =>{
    const [params, setParams] = useState("")
    const [data, setData] = useState([])
    const options = {
          method: 'GET',
          url: 'https://movies-api14.p.rapidapi.com/search',
          params: {
            query: `${params}`
          },
          headers: {
            'x-rapidapi-key': 'b610f4c366msh83133b961a565eap1567c0jsnce99427ed7c3',
            'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
          }
        };
        
        
          const fetchData = async ()=>{
            try {
              const response = await axios.request(options);
              console.log(response.data);
              setData(response.data.contents)
              
            } catch (error) {
              console.error(error);
            }
          }
          
          
    return(
        <div>
            <input type="text" placeholder="Search" value={params} onChange={(e)=>setParams(e.target.value)} />
            <button type="button" className="btn" onClick={()=>fetchData()}>Search</button>
            <div>
            {data.map((item, index)=>{
                    return(
                        <div className="card card-side bg-base-100 shadow-xl" key={index}>
                            
                            <Card item={item} baseurl={baseurl} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Search;