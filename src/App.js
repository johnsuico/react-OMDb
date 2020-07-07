import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [movie, setMovie] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    Axios.get("http://omdbapi.com/?apikey=5000d172&s=Lord")
      .then(res => {
        setMovie(res.data.Search);
        // console.log(res.data.Title);
      })
  }, []);

  function handleClick() {
    setClick(!click);
  }

  return (
    <div>
      {/* <h1>Title: {movie.Search.Title}</h1>
      <img src={movie.Search.Poster} alt={movie.Title + ' Poster'}/>
      <button onClick={handleClick}> Click Me! </button>
      {click && <h1>You Clicked Me!</h1>} */}

      {movie.map((movie) => (
        <h1>{movie.Title}</h1>
      ))}
    </div>
  )
}

export default App;
