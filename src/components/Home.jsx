import React from 'react';

function Home() {
  return(
    <div className="hero-bg">
      <div className="hero-content container">

        <div className="hero-info">
          <h2 className="hero-caption">Movie information at your fingertips</h2>
          <p className="hero-subCaption">Powered by <a href="https://omdbapi.com/" target="_blank">OMDb</a></p>
        </div>

        <input type="text" placeholder="Start Searching" className="searchBar container hero-searchBar"/>

      </div>
    </div>
  )
}

export default Home;