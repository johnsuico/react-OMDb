import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Axios from 'axios';
import './App.css';


// Components
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';

function App() {
  const [movie, setMovie] = useState([]);
  const [movieURL, setMovieURL] = useState();

  function search(title) {
    let replaceTitle = title.split(' ').join('+');
    const url = "https://omdbapi.com/?apikey=5000d172&s="+replaceTitle;
    
    Axios.get(url)
      .then(res => {
        setMovie(res.data.Search);
      })
  }

  return (
    <div>

      <header>
        <Navbar search={search} />
      </header>

      <div className="container showcase">
        {movie.map((movie) => (
          <MovieCard title={movie.Title} year={movie.Year} poster={movie.Poster} />
        ))}
      </div>

      {/* {movie.map((movie) => (
        <li key={movie.imdbID}>{movie.Title}</li>
      ))} */}

    </div>
  )
}

export default App;
