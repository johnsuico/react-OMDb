import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../App.css';

import MovieCard from './MovieCard';

function MovieResults({ movie }) {
  return (
    <div className="container showcase">
      {movie.map((movie) => (
        <MovieCard title={movie.Title} year={movie.Year} poster={movie.Poster} key={movie.imdbID}/>
      ))}
    </div>
  )
}

export default MovieResults;