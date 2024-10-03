/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export default function Nav() {
  const location = useLocation();
  const name = location.state.name;
  const mail = location.state.mail;
  const city = location.state.city;
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  const [cityy, setCityy] = useState(false);
  const toggleShow1 = () => setCityy(!cityy);

 
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <div className="navbar-nav">
            <Link
              className="navbar-brand mt-2 mt-lg-0"
              state={{ name: name, city: city, mail: mail }}
              to={`/home`}
            >
              FlixBooking
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  state={{ name: name, city: city, mail: mail }}
                  to={`/previousbookings`}
                >
                  Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  state={{ name: name, mail: mail, city: city }}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <div className="data-container">
              <i className="fa-solid fa-location-dot "></i> {city}
              <a
                data-tooltip-id="my-tooltip3"
                data-tooltip-content="Change city"
                data-tooltip-place="bottom"
              >
                {" "}
                <Link state={{ name: name, mail: mail }} to="/home">
                  <i
                    className="fa-solid fa-retweet"
                    id="drop"
                    onDoubleClickCapture={toggleShow1}
                  ></i>
                </Link>
              </a>{" "}
              <Tooltip id="my-tooltip3" />
            </div>
            <div>
              <a
                data-tooltip-id="my-tooltip2"
                data-tooltip-content="User Details"
                data-tooltip-place="bottom"
              >
                <button className="circle" onClick={toggleShow}>
                  <img
                    src="	https://media.geeksforgeeks.org/img-practice/user_web-1598433228.svg"
                    height="30"
                    loading="lazy"
                  />
                </button>
              </a>
              <Tooltip id="my-tooltip2" />
              <MDBModal
                tabIndex="-1"
                show={centredModal}
                setShow={setCentredModal}
              >
                <MDBModalDialog centered size="lg">
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>User Details</MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <div className="gfg">
                        <div className="gfg-content">
                          <img
                            src="	https://media.geeksforgeeks.org/img-practice/user_web-1598433228.svg"
                            height="200"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                          />
                        </div>
                        <div className="gfg-content" id="gfg-content">
                          <div className="gfg-details">
                            <p>
                              <strong>Name of the User&nbsp;:&nbsp;</strong>
                            </p>
                            <p>{name}</p>
                          </div>
                          <div className="gfg-details">
                            <p>
                              <strong>
                                Email of the User&nbsp;&nbsp;:&nbsp;
                              </strong>
                            </p>
                            <p> {mail}</p>
                          </div>
                          
                          <div className="gfg-details">
                            <a href="/">
                              <button>
                                <strong>Log Out</strong>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <button className="close" onClick={toggleShow}>
                        Close
                      </button>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}