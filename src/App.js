import React, { useState } from 'react';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';


// Components
import MovieResults from './components/MovieResults';
import Home from './components/Home';

function App() {
  const [movie, setMovie] = useState([]);
  const [isHome, setIsHome] = useState(true);

  let [stringQuery, setStringQuery] = useState('');
  let [query, setQuery] = useState(''); // Store queries from search bar

  function search() {
    let title = query.split(' ').join('+');
    setStringQuery(title);

    const url = "https://omdbapi.com/?apikey=5000d172&s="+title;
    console.log(url);
    
    // Axios.get(url)
    //   .then(res => {
    //     setMovie(res.data.Search);
    //     // setIsSearch(true);
    //   })
  }

  function onChange(e) {
    setQuery(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    search(query);
  }

  return (
    // <div>
    //   <Navbar movie={movie} search={search} setIsSearch={setIsSearch}/>
    //   {isSearch ? <MovieResults movie={movie}/> : <Home />}
    // </div>

    <Router>
      <header>
        <nav>
          <div className="nav-items container">
            <div className="logo-container">
              <Link to="/" className="logo">LookUp</Link>
            </div>
            {isHome && 
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

      <Switch>
        <Route exact path="/">
          <Home setQuery={setQuery} query={query} search={search}/>
        </Route>
        <Route exact path="/movies/:id">
          <MovieResults />
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
