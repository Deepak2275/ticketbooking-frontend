import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Movie(props) {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-os="fade-up">
      <figure className="image-block">
        <img
          src={`https://image.tmdb.org/t/p/w300/` + props.poster}
          width="250"
          height="300"
          loading="lazy"
          alt=""
        />
        <figcaption>
          <button style={{ marginBottom: "20px", cursor: "text" }}>
            <strong>{props.title}</strong>
            <Link
              state={{
                name: props.name,
                data: props.tmdata,
                title: props.title,
                year: props.year,
                mail: props.mail,
                city: props.city,
              }}
              to={`${props.tmdata.id}`}
            >
              <i
                className="fa-solid fa-circle-arrow-right  fa-xl"
                style={{ paddingLeft: "10px", color: "white" }}
              ></i>
            </Link>
          </button>
          <p>Release Date : {props.release}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default Movie;