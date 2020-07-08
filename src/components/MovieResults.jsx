import React, { useEffect, useState } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';

import MovieCard from './MovieCard';
import Axios from 'axios';

function MovieResults(props) {
  const [movie, setMovie]= useState([]);
  
  let {title} = useParams();
  let regTitle = title.split('+').join(' ');

  useEffect(() => {
    const url = "https://omdbapi.com/?apikey=5000d172&s="+title;
    
    Axios.get(url)
      .then(res => {
        setMovie(res.data.Search);
      })

    props.setIsHome(false);

  }, [])

  return(
    <div className="container showcase">
      <div className="title-div container">
        <h2 className="result-title">Showing Results for: "{regTitle}"</h2>
      </div>
      <div className="card-container container">
        {movie.map((movie) => {
          return <MovieCard title={movie.Title} year={movie.Year} poster={movie.Poster} key={movie.imdbID}/>
        })}
      </div>
    </div>
  )
}

export default MovieResults;