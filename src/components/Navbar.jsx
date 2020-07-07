import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../App.css';

function Navbar(props) {
  let [search, setSearch] = useState('');

  function onChange(e) {
    setSearch(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    props.search(search);
    // console.log(search);
  }

  return (
    <Router>
      <nav>
        <div className="nav-items container">
          <div className="logo">
            <Link to="/" className="logo">Movie LookUp</Link>
          </div>
          <div className="search">
            <form onSubmit={onSubmit}>
              <input type="text" placeholder="Enter in Movie Title" className="searchBar" onChange={onChange} value={search} required/>
              <input style={{display: "none"}}type="submit"/>
            </form>
          </div>
        </div>
      </nav>
    </Router>
  )
}

export default Navbar;