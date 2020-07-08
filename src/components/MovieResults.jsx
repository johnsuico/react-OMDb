import React from 'react';
import '../App.css';

import MovieCard from './MovieCard';

function MovieResults({movie}) {

  return (
    <div className="container showcase">
      {/* {props.movie.map((movie) => (
        <MovieCard title={props.movie.Title} year={props.movie.Year} poster={props.movie.Poster} key={props.movie.imdbID}/>
      ))} */}
      {movie.map((movie) => {
        return <MovieCard title={movie.Title} year={movie.Year} poster={movie.Poster} key={movie.imdbID}/>
      })}
    </div>
  )
}

export default MovieResults;