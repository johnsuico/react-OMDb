import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function MovieNotFound() {
  return (
    <div className="movieNotFound">
      <FaExclamationCircle className="notFound-icon"/>
      <h2> We couldn't find the movie you looked up. Try again?</h2>
      <Link to="/" className="linkHome">Go back home</Link>
    </div>
  )
}

export default MovieNotFound;