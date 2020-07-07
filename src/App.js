import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Axios from 'axios';
import './App.css';


// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieResults from './components/MovieResults';
import About from './components/About'

function App() {
  const [movie, setMovie] = useState([]);

  function search(searchItem) {
    let replaceTitle = searchItem.split(' ').join('+');

    const url = "https://omdbapi.com/?apikey=5000d172&s="+replaceTitle;
    
    Axios.get(url)
      .then(res => {
        setMovie(res.data.Search);
      })
  }

  return (
    <div>
      <Navbar movie={movie} search={search}/>

      <MovieResults movie={movie} />
    </div>

  )
}

export default App;
