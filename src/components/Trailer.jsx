import React, { useState, useEffect } from "react";
import YoutubeEmbedVideo from "youtube-embed-video";
export default function Trailer(props) {
  const id = props.id;

  const [trailer, setTrailer] = useState(null);
 
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=bee8ce9f0d5a33ee50837d31a61a64eb`
    )
      .then((res) => res.json())
      .then((data) => setTrailer(data.results))

      .catch((err) => {
        console.log(err);
        
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="plot">
      <h4>
        <strong
          style={{
            borderRadius: "10px",
            backgroundColor: "#D8D9DA",
            padding: "0 5px",
          }}
        >
          Trailers
        </strong>
      </h4>
      <div className="youtube">
        <div id="youtube">
          {trailer !== null &&
            trailer.map((data) => (
              <div className="video-name" key={data.key}>
                <div>
                  <strong>{data.name}</strong>
                </div>
                <div>
                  <YoutubeEmbedVideo
                    className="videoplayer"
                    videoId={data.key}
                    key={data.key}
                    title=""
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}