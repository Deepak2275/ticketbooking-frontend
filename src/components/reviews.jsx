import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Reviews(props) {
  const id = props.id;
  const [review, setReview] = useState(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 1, 
    },
    tablet: {
      breakpoint: { max: 1200, min: 860 },
      items: 2,
      slidesToSlide: 1, 
    },
    mobile: {
      breakpoint: { max: 860, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=bee8ce9f0d5a33ee50837d31a61a64eb`
    )
      .then((res) => res.json())
      .then((data) => setReview(data.results))

      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="plot" id="plott">
        <h4>
          <strong
            style={{
              borderRadius: "10px",
              backgroundColor: "#D8D9DA",
              padding: "0 5px",
            }}
          >
            {review?.length === 0 ? "No reviews" : "Reviews"}
          </strong>
        </h4>
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          centerMode={false}
          infinite={true}
          autoPlaySpeed={1000}
          customTransition="transform 0.5s ease-in-out"
          keyBoardControl={true}
          transitionDuration={1000}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          className="carousell"
        >
          {review !== null &&
            review.map((data) => (
              <div className="reviewdata1" key={data.id}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    outline: "1px solid black",
                    padding: " 10px ",
                  }}
                >
                  {" "}
                  <p>
                    Name:&nbsp;
                    <b>{data.author}</b>
                  </p>
                  <p>
                    Rating: <b>{data.author_details.rating}/10</b>
                  </p>
                </div>

                <p style={{ margin: "10px" }}>{data.content}....</p>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Reviews;