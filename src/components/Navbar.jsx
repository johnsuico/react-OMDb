import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  let [search, setSearch] = useState();

  function onChange(e) {
    setSearch = e.target.value;
  }

  return (
    <Router>
      <nav>
        <div className="nav-items container">
          <div className="logo">
            <Link to="/" className="logo">Movie LookUp</Link>
          </div>
          <div className="search">
            <input type="text" placeholder="Enter in Movie Title" className="searchBar" onChange={onChange} value={search}/>
          </div>
        </div>
      </nav>
    </Router>
  )
}

export default Navbar;