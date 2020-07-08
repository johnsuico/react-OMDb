import React from 'react';
import '../App.css';

import MovieCard from './MovieCard';

function MovieResults({movie, stringQuery}) {

  let title = stringQuery.split('+').join(' ');

  return (
    <div className="container showcase">
      <div className="title-div container">
        <h2 className="result-title">Showing Results for: "{title}"</h2>
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