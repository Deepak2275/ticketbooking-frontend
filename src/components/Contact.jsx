import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  var name = username.length > 4 ? true : false;
  var mail = email.substring(email.length - 10);
  var sub = mail === "@gmail.com" ? true : false;

  return (
    <div className="mainpage">
      <div className="col-md-4 col-md-offset-4" id="login">
        <section id="inner-wrapper" className="login">
          <h1>Flix Booking</h1>
          <article>
            <form>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-user"> </i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name(minimum 5 char)"
                    name="fname"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-envelope"> </i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>

              {name && sub && (
                <Link state={{ name: username, mail: email }} to="/home">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </Link>
              )}
            </form>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;