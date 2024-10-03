/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

import Movie from "./Movie";

function Home() {
  const location = useLocation();
  const name = location.state.name;
  const mail = location.state.mail;
  const city = location.state.city;
  const [count, setCount] = useState(0);
  const [movie, setMovie] = useState([]);
  const [datatip, settip] = useState(null);

  useEffect(() => {
    fetch(
      ` https://api.themoviedb.org/3/discover/movie?api_key=bee8ce9f0d5a33ee50837d31a61a64eb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&release_date.gte=2023-06-01T00:00:00.000Z&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data.results))

      .catch((err) => {
        
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var sortedmovies = [...movie].sort((p1, p2) =>
    p1.title > p2.title ? 1 : p1.title < p2.title ? -1 : 0
  );

  var releasedmovie = [...movie].sort((p1, p2) =>
    p1.release_date < p2.release_date
      ? 1
      : p1.release_date > p2.release_date
      ? -1
      : 0
  );

  function handleClick() {
    setCount((count + 1) % 3);
  }
  function tool() {
    if (count === 0) {
      settip("Sort by Latest Releases");
    } else if (count === 1) {
      settip("Sort by Title");
    } else {
      settip("Sort by Popularity");
    }
  }
  function untool() {
    settip("");
  }

  return (
    <>
      <div className="latestmovies">
        <div>
          <h4>
            <strong>Latest Movies</strong>
          </h4>
        </div>
        <div>
          <a
            data-tooltip-id="my-tooltip2"
            data-tooltip-content={datatip}
            data-tooltip-place="top"
          >
            <button
              onMouseEnter={tool}
              onMouseLeave={untool}
              onClick={handleClick}
            >
              <i class="fa-solid fa-sort"></i>
            </button>
          </a>
          <Tooltip id="my-tooltip2" />
        </div>
      </div>
      {count === 0 && (
        <div className="moviesss-container">
          {movie.map((data) => (
            <Movie
              name={name}
              mail={mail}
              city={city}
              id={data.id}
              key={data.id}
              tmdata={data}
              year={data.release_date}
              release={data.release_date}
              title={data.title}
              poster={data.poster_path}
            />
          ))}
        </div>
      )}

      {count === 1 && releasedmovie && (
        <div className="moviesss-container">
          {releasedmovie.map((data) => (
            <Movie
              name={name}
              mail={mail}
              city={city}
              id={data.id}
              key={data.id}
              tmdata={data}
              year={data.release_date}
              release={data.release_date}
              title={data.title}
              poster={data.poster_path}
            />
          ))}
        </div>
      )}
      {sortedmovies && count === 2 && (
        <div className="moviesss-container">
          {sortedmovies.map((data) => (
            <Movie
              name={name}
              mail={mail}
              city={city}
              year={data.release_date}
              id={data.id}
              key={data.id}
              tmdata={data}
              release={data.release_date}
              title={data.title}
              poster={data.poster_path}
            />
          ))}
        </div>
      )}
    </>
  );
}
export default Home;