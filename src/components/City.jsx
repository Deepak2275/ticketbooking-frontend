import React from "react";
import cities from "../cities";
import { Link, useLocation } from "react-router-dom";

export default function Ticket() {
  const location = useLocation();

  const name = location.state.name;
  const mail = location.state.mail;
  const [city, setCity] = React.useState("");
  function click(event) {
    setCity(event.target.value);
  }

  return (
    <>
      <div className="city">
        <div className="city-form">
          <h2>Select a city:</h2>
        </div>
        <div className="city-form" id="city-list">
          {cities.map((data) => (
            <label className="rad-label" value={data.name} onClick={click}>
              <input
                type="radio"
                className="rad-input"
                name="rad"
                value={data.name}
              />
              <div className="rad-design"></div>
              <div className="rad-text">{data.name}</div>
            </label>
          ))}
        </div>
        <div className="city-form">
          {city && (
            <Link
              state={{ name: name, mail: mail, city: city }}
              to={`/${city}/movie`}
            >
              <button type="button" className="ticket-button">
                Confirm city
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}