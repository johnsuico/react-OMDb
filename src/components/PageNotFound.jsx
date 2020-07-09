import React from 'react';
import {FaQuestion} from 'react-icons/fa';

import Home from './Home';

function PageNotFound() {
  return(
    <div className="container">
      <div className="notFound">
        <h2>
          Uh oh... We couldn't find the page you were looking for
        </h2>
      </div>
    </div>
  )
}

export default PageNotFound;