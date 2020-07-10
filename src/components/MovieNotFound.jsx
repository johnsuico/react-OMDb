import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function MovieNotFound() {
  return (
    <div className="movieNotFound">
      <FaExclamationCircle className="notFound-icon"/>
      <h2> We couldn't find the page you were looking for. Sorry about that! </h2>
      <Link to="/" className="linkHome">Go back home</Link>
    </div>
  )
}

export default MovieNotFound;