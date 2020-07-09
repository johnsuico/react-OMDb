import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function MovieInfo(props) {
  let { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const url = "https://omdbapi.com/?apikey=5000d172&i="+id;

    Axios.get(url)
      .then(res => {
        setMovieInfo(res.data);
      })
    
    props.setIsHome(false);
    
  }, [props, id])

  return(
    <div className="container movieInfo-container">
      <h1>{movieInfo.Title}</h1>
    </div>
  )
}

export default MovieInfo;