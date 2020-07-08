import React, { useState } from 'react';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';


// Components
import MovieResults from './components/MovieResults';
import Home from './components/Home';

function App() {
  const [movie, setMovie] = useState([]);
  const [isHome, setIsHome] = useState(true);
  const [searched, setSearched] = useState(false);

  let [stringQuery, setStringQuery] = useState('');
  let [query, setQuery] = useState(''); // Store queries from search bar

  function search() {
    let title = query.split(' ').join('+');
    setStringQuery(title);

    const url = "https://omdbapi.com/?apikey=5000d172&s="+title;
    console.log(url);
    
    Axios.get(url)
      .then(res => {
        setMovie(res.data.Search);
      })
    
    setIsHome(false);
    setSearched(true);
  }

  function onChange(e) {
    setQuery(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    search(query);
  }

  return (
    <Router>
      <header>
        <nav>
          <div className="nav-items container">
            <div className="logo-container">
              <Link to="/" className="logo" onClick={()=>{setIsHome(true); setSearched(false)}}>LookUp</Link>
            </div>
            {!isHome && 
              <div className="search-container">
                <form onSubmit={onSubmit}>
                  <input type="text" placeholder="Start Searching" className="searchBar container" onChange={onChange} value={query} required/>
                  <input style={{display: "none"}} type="submit"/>
                </form>
              </div>
            }
          </div>
        </nav>
      </header>

      {searched && <Redirect to={"/movies/"+stringQuery} />}

      <Switch>
        <Route exact path="/">
          <Home setQuery={setQuery} query={query} search={search}/>
        </Route>
        <Route exact path={"/movies/" + stringQuery}>
          <MovieResults stringQuery={stringQuery} movie={movie}/>
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
