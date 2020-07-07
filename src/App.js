import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';


// Components
import Navbar from './components/Navbar';
import MovieResults from './components/MovieResults';
import Home from './components/Home';

function App() {
  const [movie, setMovie] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  function search(searchItem) {
    let replaceTitle = searchItem.split(' ').join('+');

    const url = "https://omdbapi.com/?apikey=5000d172&s="+replaceTitle;
    
    Axios.get(url)
      .then(res => {
        setMovie(res.data.Search);
        setIsSearch(true);
      })
  }

  return (
    <div>
      <Navbar movie={movie} search={search} setIsSearch={setIsSearch}/>

      {isSearch ? <MovieResults movie={movie}/> : <Home />}
    </div>

  )
}

export default App;
