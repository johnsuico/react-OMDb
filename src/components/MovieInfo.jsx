import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function MovieInfo(props) {
  let { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const url = "https://omdbapi.com/?apikey=5000d172&i="+id;

    Axios.get(url)
      .then(res => {
        setMovieInfo(res.data);
      })
    
    props.setIsHome(false);
    
  }, [props, id])

  return(
    <div className="container movieInfo-container">
      {movieInfo.Poster==="N/A" ?
        <img src="/posterNotFound.png" alt="Poster not found" className="movieInfoPoster"/>
        :
        <img src={movieInfo.Poster} alt={props.title + "Poster"} className="movieInfoPoster"/>
      }
      <div className="moreMovieInfo">
        <h2 className="movieInfo-container movieInfo-title">{movieInfo.Title} ({movieInfo.Year})</h2>
        <div className="movieInfo-plot-container">
          <p className="movieInfo-header">Plot Summary</p>
          <p className="movieInfo-para">{movieInfo.Plot}</p>
        </div>
        <div className="addInfo-container movieInfo-container">
          <div className="release-container">
            <p className="movieInfo-header">Release Date</p>
            <p className="movieInfo-para">{movieInfo.Released}</p>
          </div>
          <div className="director-container">
            <p className="movieInfo-header">Director</p>
            <p className="movieInfo-para">{movieInfo.Director}</p>
          </div>
        </div>
        <div className="movieInfo-container movieInfo-flex">
          <p className="movieInfo-header">Genres</p>
          <p className="movieInfo-para">{movieInfo.Genre}</p>
        </div>
        <div className="movieInfo-container movieInfo-flex">
          <p className="movieInfo-header">Actors</p>
          <p className="movieInfo-para">{movieInfo.Actors}</p>
        </div>
        <div className="movieInfo-container movieInfo-flex">
          <p className="movieInfo-header">Awards</p>
          <p className="movieInfo-para">{movieInfo.Awards}</p>
        </div>
        <h2 className="movieInfo-container movieRatings-title">Movie Ratings</h2>
        <div className="movieInfo-container movieInfo-flex">
          <div className="rating">
            <div className="imdb">
              <p className="movieInfo-header">IMDb Rating</p>
              <p className="movieInfo-para movieRating">{movieInfo.imdbRating}/10</p>
            </div>
            <div className="metascore">
              <p className="movieInfo-header">Metascore</p>
              <p className="movieInfo-para movieRating">{movieInfo.Metascore}/100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo;