import React from 'react';

function MovieCard(props) {
  return (
    <div className="movie-card">
        <h2>{props.title}</h2>
        <p>{props.year}</p>
        <img src={props.poster} alt={props.title + "Poster"}/>
    </div>
  )
}

export default MovieCard;