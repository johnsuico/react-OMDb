import React, { useEffect } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function PageNotFound(props) {

  useEffect(() => {
    props.setIsHome(false);
  },[props])

  return(
    <div className="container">
      <div className="notFound">
        <FaExclamationCircle className="notFound-icon"/>
        <h2> We couldn't find the movie you looked up. Try again?</h2>
        <Link to="/" className="linkHome">Go back home</Link>
      </div>
    </div>
  )
}

export default PageNotFound;