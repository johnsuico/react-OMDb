import React from 'react';
import '../App.css';

import MovieCard from './MovieCard';

function MovieResults({ movie }) {
  return (
    <div className="container showcase">
      {/* {movie.map((movie) => (
        <MovieCard title={movie.Title} year={movie.Year} poster={movie.Poster} key={movie.imdbID}/>
      ))} */}
      <h1>{movie}</h1>
    </div>
  )
}

export default MovieResults;