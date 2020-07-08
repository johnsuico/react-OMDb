import React from 'react';

function Home(props) {

  function onChange(e) {
    props.setQuery(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    // props.search(props.query);
    props.onSubmit(props.query);
  }

  return(
    <div className="hero-bg">
      <div className="hero-content container">

        <div className="hero-info">
          <h2 className="hero-caption">Movie information at your fingertips</h2>
          <p className="hero-subCaption">Powered by <a href="https://omdbapi.com/" target="_blank">OMDb</a></p>
        </div>

        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Start Searching" className="searchBar container hero-searchBar" onChange={onChange} onSubmit={onSubmit} value={props.query}/>
          <input style={{display: "none"}} type="submit"/>
        </form>

      </div>
    </div>
  )
}

export default Home;