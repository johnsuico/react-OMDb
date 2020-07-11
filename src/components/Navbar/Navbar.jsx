import React, {useState} from 'react';
import './navbar.css';

function Navbar(props) {
  let [search, setSearch] = useState('');

  function onChange(e) {
    setSearch(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    props.search(search);
  }

  function setSearchBool() {
    props.setIsSearch(false);
  }

  return (
    <nav>
      <div className="nav-items container">
        <div className="logo">
          <a className="logo" href="/" onClick={setSearchBool}>LookUp</a>
        </div>
        <div className="search">
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter in Movie Title" className="searchBar" onChange={onChange} value={search} required/>
            <input style={{display: "none"}} type="submit"/>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;