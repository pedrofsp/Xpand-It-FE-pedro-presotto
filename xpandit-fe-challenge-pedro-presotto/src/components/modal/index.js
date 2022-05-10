import React, { useState, useEffect } from 'react';
import './style.scss';

export default function Modal(props) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://movie-challenge-api-xpand.azurewebsites.net/api/movies/${props.Id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      });
  }, []);

  return (
    <div className="all-modal">
      <div
        className="modal-background"
        onClick={() => {
          props.HandleState(false);
        }}
      ></div>
      {Object.keys(movie).length === 0 && (
        <div className="loading-card">Loading...</div>
      )}
      <div className="modal-card">
        <div className="flex-title">
          <h3>{movie.title}</h3>
          <div
            className="close-button"
            onClick={() => {
              props.HandleState(false);
            }}
          >
            <p className="gray">×</p>
            <span className="gray">CLOSE</span>
          </div>
        </div>
        <div className="line"></div>
        <div className="topic">
          <span className="gray">Year</span>
          <p>{movie.year}</p>
        </div>
        <div className="topic">
          <span className="gray">Genre</span>
          <p>{movie.genre}</p>
        </div>
        <div className="topic">
          <span className="gray">Description</span>
          <p>{movie.description}</p>
        </div>
        <div className="flex-dir-act">
          <div className="topic">
            <span className="gray">Director</span>
            <a href="#">{movie.director}</a>
          </div>
          <div className="topic margin-left">
            <span className="gray">Actors</span>
            <a href="#">{movie.actors}</a>
          </div>
        </div>
        <div className="topic">
          <span className="gray">Runtime</span>
          <p>{movie.runtime} min</p>
        </div>
        <div className="topic">
          <span className="gray">Rating</span>
          <p>{movie.rating}</p>
        </div>
        <div className="topic">
          <span className="gray">Votes</span>
          <p>{movie.votes}</p>
        </div>
        <div className="topic">
          <span className="gray">Revenues</span>
          <p>{movie.revenue}</p>
        </div>
        <div className="topic">
          <span className="gray">Metascore</span>
          <p>{movie.metascore}</p>
        </div>
      </div>
    </div>
  );
}
