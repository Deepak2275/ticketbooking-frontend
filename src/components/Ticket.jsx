/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";
import Trailer from "./Trailer";
import Reviews from "./reviews";
function Ticket() {
  const img_300 = "https://image.tmdb.org/t/p/w300";

  const location = useLocation();
  const name = location.state.name;
  const mvedata = location.state.data;
  const title = location.state.title;
  const mail = location.state.mail;
  const city = location.state.city;
  const year = location.state.year;

  var days = [
    {
      id: 0,
      name: "button-1",
      date: moment().add(1, "days").format("ddd, D MMM"),
      date1: moment().add(1, "days").format("ddd, D MMM,YYYY"),
    },
    {
      id: 1,
      name: "button-2",
      date: moment().add(2, "days").format("ddd, D MMM"),
      date1: moment().add(2, "days").format("ddd, D MMM,YYYY"),
    },
    {
      id: 2,
      name: "button-3",
      date: moment().add(3, "days").format("ddd, D MMM"),
      date1: moment().add(3, "days").format("ddd, D MMM,YYYY"),
    },
  ];

  var theatres = [
    { name: "PVR" },
    { name: "PVP" },
    { name: "INOX" },
    { name: "IMAX" },
  ];

  var costs = [
    { cost: "200", value: "200 -Reclinear" },
    { cost: "150", value: "150 -Balcony" },
    { cost: "100", value: "100 -Normal" },
  ];

  const [movie, setmovieData] = useState([]);
  const [cost, setCost] = useState(null);
  const [credits, setCredits] = useState(null);
  const [activebutton, setactive] = useState(null);
  const [activeb, setactiveb] = useState(null);

  function handlecost(data) {
    setCost(data);
  }
  function dateclick(data) {
    setactive(data);
  }
  function theatreclick(data) {
    setactiveb(data);
  }

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=961ea94b`
    )
      .then((res) => res.json())
      .then((data) => setmovieData(data))

      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${mvedata.id}/credits?api_key=bee8ce9f0d5a33ee50837d31a61a64eb`
    )
      .then((res) => res.json())
      .then((data) => setCredits(data.cast))

      .catch((err) => {
         console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var credit = null;

  if (credits !== null) {
    credit = credits.slice(0, 6);
  }

  var num = 0;

  if (movie.imdbVotes !== undefined) {
    for (var i = 0; i < movie.imdbVotes.length; i++) {
      if (movie.imdbVotes[i] !== ",") {
        num += movie.imdbVotes[i];
      }
    }
  }

  var imdb = "N/A";
  var num3 = parseInt(mvedata.vote_average);
  imdb = movie.imdbRating === "N/A" ? num3 : movie.imdbRating;
  var num1 = parseInt(num);
  num1 = num1 / 1000;
  num1 = Math.ceil(num1);
  var num2 = parseInt(mvedata.vote_count);

  num2 = num2 / 1000;
  num2 = Math.ceil(num2);
  var t = parseInt(movie.Runtime);
  var h = Math.floor(t / 60);
  var min = Math.floor(t % 60);

  var votes = movie.imdbRating === "N/A" ? num2 : num1;

  var plot =
    movie.Plot?.length >= mvedata.overview?.length
      ? movie.Plot
      : mvedata.overview;

  return (
    <>
      <div className="movie">
        <div className="moviep">
          <div className="poster">
            <figure>
              <img
                className="movie-image"
                src={`https://image.tmdb.org/t/p/w500/` + mvedata.poster_path}
              />
            </figure>
          </div>
          <div className="matter">
            <h1 className="matter-title">{title} </h1>

            <div className="rating">
              <span className="imdb">
                <h2 className="abcd">
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#f84464" }}
                  ></i>
                  {imdb}/10
                </h2>
              </span>
              <span>
                <strong>{votes}k</strong> votes
              </span>
            </div>

            <div className="elements">
              <ul>
                <li>
                  {h}hr {min}min
                </li>
                <li
                  style={{
                    borderRadius: "10%",
                    backgroundColor: "#D8D9DA",
                    padding: "0 5px",
                  }}
                >
                  {movie.Genre}
                </li>
              </ul>
            </div>
            <div className="language">
              <ul>
                <li>{movie.Language}</li>
                <li
                  style={{
                    borderRadius: "40%",
                    backgroundColor: "#D8D9DA",
                    padding: "0 5px",
                    marginBottom: "0px",
                  }}
                >
                  U/A
                </li>
              </ul>
            </div>

            <div className="date">
              <label>
                <strong>SelectDate </strong>
              </label>
              {days.map((data) => (
                <button
                  type="button"
                  name={data.date}
                  id={
                    activebutton === data.date1 ? "datebuttonid" : "datebutton"
                  }
                  onClick={() => dateclick(data.date1)}
                >
                  {data.date}
                </button>
              ))}
            </div>
            <div className="theatre">
              <label>
                <strong>Select Theatre </strong>
              </label>
              {theatres.map((data) => (
                <button
                  type="button"
                  name={data.cost}
                  id={activeb === data.name ? "datebuttonid" : "datebutton"}
                  onClick={() => theatreclick(data.name)}
                >
                  {data.name}
                </button>
              ))}
            </div>
            {activebutton && activeb && (
              <div className="theatre1">
                <label>
                  <strong>Select Cost </strong>
                </label>
                {costs.map((data) => (
                  <button
                    type="button"
                    name={data.cost}
                    value={data.value}
                    id={cost === data.cost ? "datebuttonid" : "datebutton"}
                    onClick={() => handlecost(data.cost)}
                  >
                    {data.value}
                  </button>
                ))}
              </div>
            )}
            {cost && activebutton && activeb && (
              <Link
                className="book-ticket"
                state={{
                  data: activeb,
                  cost: cost,
                  date: activebutton,
                  name: name,
                  photo: mvedata.poster_path,
                  title: title,
                  mail: mail,
                  city: city,
                  mvedata: movie,
                }}
                to="booking"
              >
                <button type="button" className="ticket-button">
                  Book tickets
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      <div className="plot" id="plot">
        <h4>
          <strong
            style={{
              borderRadius: "10px",
              backgroundColor: "#D8D9DA",
              padding: "0 5px",
            }}
          >
            About the Movie
          </strong>
        </h4>

        <div className="plotdata">
          <p>{plot}</p>
        </div>
      </div>
      <div className="plot" id="plott">
        <h4>
          <strong
            style={{
              borderRadius: "10px",
              backgroundColor: "#D8D9DA",
              padding: "0 5px",
            }}
          >
            Starring
          </strong>{" "}
        </h4>
        <div className="cast">
          {credit &&
            credit.map((c) => (
              <div className="castimages">
                <div className="castimage">
                  <div>
                    <a target="_blank">
                      <img
                        className="cast-img"
                        src={
                          c.profile_path
                            ? `${img_300}/${c.profile_path}`
                            : `https://cdn.vectorstock.com/i/1000x1000/22/05/male-profile-picture-vector-1862205.webp`
                        }
                        height="150"
                        width="150"
                      />
                    </a>
                  </div>
                  <div className="castbuttons">
                    <div className="a1234">
                      <a
                        href={`https://en.wikipedia.org/wiki/${c?.name}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="castbutton">
                          <i class="fa-brands fa-wikipedia-w"></i>
                        </button>
                      </a>
                    </div>

                    <div className="a1234">
                      <a
                        href={`https://www.google.com/search?q=${c?.name}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="castbutton">
                          <i class="fa-brands fa-google"></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <p
                    style={{
                      marginTop: "10px",
                      width: "150px",
                      overflow: "hidden",
                    }}
                  >
                    {c?.name}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="plot">
        <h4>
          <strong
            style={{
              borderRadius: "10px",
              backgroundColor: "#D8D9DA",
              padding: "0 5px",
            }}
          >
            Directed by
          </strong>
        </h4>
        <div className="castimage">
          <img
            className="cast-img"
            src={`https://cdn.vectorstock.com/i/1000x1000/22/05/male-profile-picture-vector-1862205.webp`}
            height="150"
            width="150"
          />

          <div className="castbuttons">
            <div className="a1234">
              <a
                href={`https://en.wikipedia.org/wiki/${movie.Director}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="castbutton">
                  <i class="fa-brands fa-wikipedia-w"></i>
                </button>
              </a>
            </div>

            <div className="a1234">
              <a
                href={`https://www.google.com/search?q=${movie.Director}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="castbutton">
                  <i class="fa-brands fa-google"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <p style={{ marginTop: "10px" }}>{movie.Director}</p>
      </div>

      <Reviews id={mvedata.id} />
      <Trailer id={mvedata.id} />
    </>
  );
}

export default Ticket;