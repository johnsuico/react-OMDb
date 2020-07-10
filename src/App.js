import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import './App.css';


// Components
import MovieResults from './components/MovieResults';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import MovieInfo from './components/MovieInfo';

function App() {
  const [isHome, setIsHome] = useState(true);
  const [searched, setSearched] = useState(false);

  let [stringQuery, setStringQuery] = useState('');
  let [query, setQuery] = useState(''); // Store queries from search bar

  function onChange(e) {
    setQuery(e.target.value);
  }

  function onSubmit(e) {
    let title = query.split(' ').join('+');
    setStringQuery(title);
    setIsHome(false);
    setSearched(true);
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

      {searched && <Redirect to={"/m/"+stringQuery} />}

      <Switch>
        <Route exact path="/">
          <Home setQuery={setQuery} query={query} onSubmit={onSubmit}/>
        </Route>
        <Route exact path={"/m/:title"}>
          <MovieResults query={query} setIsHome={setIsHome}/>
        </Route>
        <Route exact path={"/m/i/:id"}>
          <MovieInfo setIsHome={setIsHome}/>
        </Route>
        <Route>
          <PageNotFound setIsHome={setIsHome}/>
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
