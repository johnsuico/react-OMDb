import React from 'react';
import { Link } from "react-router-dom";

function MovieCard(props) {

  return (
    <div className="movie-card">
        <img src={props.poster} alt={props.title + "Poster"}/> 
        <h2 className="movie-info">
          <span className="movie-title">
            {props.title + ' '}
          </span>
          <span className="movie-year">
            ({props.year})
          </span>
        </h2>
        <Link to={`/m/i/${props.id}`}>
          More Info
        </Link>
    </div>
  )
}

export default MovieCard;