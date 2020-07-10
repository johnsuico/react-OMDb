import React from 'react';
import { Link } from "react-router-dom";

function MovieCard(props) {

  return (
    <div className="movie-card">

        {props.poster==="N/A" ?
          <img src="/posterNotFound.png" alt="Poster not found"/>
          :
          <img src={props.poster} alt={props.title + "Poster"}/>
        }
        <div className="movie-info-container">
          <div className="movie-info">
            <h2 className="movie-title">{props.title + ' '}</h2>
            <h2 className="movie-year">{props.year}</h2>
          </div>
        </div>
        <Link to={`/m/i/${props.id}`} className="movieInfo-btn">
          More Info
        </Link>
    </div>
  )
}

export default MovieCard;