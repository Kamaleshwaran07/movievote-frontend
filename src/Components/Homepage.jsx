import { useEffect, useState } from "react";
import Boys from '../assets/theboys.png'
import Hod from '../assets/HOD (1) 1.png'
// import Kill from '../src/assets/Kill.png'
import Maharaja from '../assets/Maharaja 1.png'
import DOW from '../assets/DeadpoolandWolverine.png'



const Homepage = ({navbarShow}) =>{
    const [currentIndex, setCurrentIndex] = useState(0)
    const data = [{img:Boys,title:"The Boys", watchSource:"Amazon Prime"},{img:Hod, title:"House of the Dragon", watchSource:"JioCinema"},{img:DOW, title:"Deadpool and Wolverine", watchSource:"In Theatres. Later in Disney Hotstar"},{img:Maharaja, title:"Maharaja", watchSource:"Netflix"}]
    // console.log(data)
    const carouselInfiniteScroll = () =>{
        if(currentIndex === data.length-1){
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }
    // console.log(currentIndex);
    
    useEffect(()=>{
        const interval = setInterval(()=>{carouselInfiniteScroll()},3000)
        return ()=>clearInterval(interval)
    })
    return(
        <div className={navbarShow ? "blur-sm contrast-100" : "bg-base-100"}>
            
            <div>
     
        <div>
            <div className="flex flex-nowrap overflow-hidden items-center h-[80%]">
                {data.map((item, index)=>{
                    return(
                        

                        <div className="flex items-center justify-center  min-w-[100%] duration-1000 ease-in-out" style={{transform: `translate(-${currentIndex * 100}%)`}} key={index}>
                            <img src={item.img} alt="" className="h-[93.3vh] w-[100%]" />
                            <div className="absolute left-0 bottom-0 min-w-[100%] h-24 backdrop-brightness-50 text-base-100 ">
                               <h1>
                                {item.title}
                                </h1>
                                <h5>Watch it on {item.watchSource}</h5> 
                            </div>
                        </div>
                           
                    )
                })}
            </div>
        </div>
       
    </div>
        </div>
    )
}
export default Homepage