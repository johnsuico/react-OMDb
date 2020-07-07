import React, { useState } from 'react';

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
    </div>
  )
}

export default MovieCard;