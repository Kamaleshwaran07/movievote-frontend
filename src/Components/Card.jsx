import axios from "axios";
import React, { useState } from "react";

const Card = ({ item, baseurl }) => {
  const [movie1, setMovie1] = useState(true);
  const [movie2, setMovie2] = useState(false);

  const [data, setData] = useState({
    title: "",
    image: "",
    year: "",
    rating: "",
  });
  const addMovie1 = async () => {
    setData({
      title: item.title,
      image: item.backdrop_path,
      rating: item.vote_count,
      year: item.vote_count,
    });
    handleAddMovie1();
  };
  const addMovie2 = async () => {
    
    setData({
      title: item.title,
      image: item.backdrop_path,
      rating: item.vote_count,
      year: item.vote_count,
    });
    handleAddMovie2();
  };
  const handleAddMovie1 = async () => {
    console.log(data);

    const payloads = data;
    try {
      const response = await axios.post(`${baseurl}/api/addmovie1`, payloads, {
        withCredentials: true,
      });
      setMovie1(false)
      console.log(response.data);
    } catch (error) {}
  };
  const handleAddMovie2 = async () => {
    console.log(data);

    const payloads = data;
    try {
      const response = await axios.post(`${baseurl}/api/addmovie1`, payloads, {
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {}
  };

  return (
    <div className="card">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={item.backdrop_path} alt="Movie" className="w-[10em]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.release_date}</p>
          <p>{item.vote_count}</p>
          <p>{item.overview}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
              setMovie1 ? addMovie1 : addMovie2
              }}
              type="button"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
