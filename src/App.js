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
import Navbar from './components/Navbar';
import MovieResults from './components/MovieResults';
import Home from './components/Home';

function App() {
  // const [movie, setMovie] = useState([]);
  // const [isSearch, setIsSearch] = useState(false);

  // function search(searchItem) {
  //   let replaceTitle = searchItem.split(' ').join('+');

  //   const url = "https://omdbapi.com/?apikey=5000d172&s="+replaceTitle;
    
  //   Axios.get(url)
  //     .then(res => {
  //       setMovie(res.data.Search);
  //       setIsSearch(true);
  //     })
  // }

  const {atHome, setAtHome} = useState(true);

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
            {atHome && 
              <div className="search-container">
                <input type="text" placeholder="Start Searching" className="searchBar container"/>
              </div>
            }
          </div>
        </nav>
      </header>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
