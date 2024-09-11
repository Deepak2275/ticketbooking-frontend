/* eslint-disable react/jsx-no-target-blank */
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
import { Tooltip } from "react-tooltip";

import Nav from "./Nav";

export default function About() {
  const [centredModal, setCentredModal] = useState(false);
  const [centredModal1, setCentredModal1] = useState(false);
  const [centredModal2, setCentredModal2] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  const toggleShow1 = () => setCentredModal1(!centredModal1);
  const toggleShow2 = () => setCentredModal2(!centredModal2);

  return (
    <>
      <Nav />
      <div className="about">
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="About the website"
          data-tooltip-place="top"
          
        >
          <button onClick={toggleShow}>
            <i class="fa-solid fa-circle-info"></i>
          </button>
        </a>
        <Tooltip id="my-tooltip" />

        <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
          <MDBModalDialog centered size="lg">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>About the project</MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody>
                <p>
                  This fksdbksbksfvnkbvkbis the <strong>front-end</strong> website created for
                  booking movie tickets. Payment page is a
                  <strong> static page</strong>.You dont need any money. It does
                  not store old data. If you cannot find an option to move to
                  the next page, please ensure that you have selected all the
                  necessary data on the current page. Once you have selected the
                  required information, you will be provided with an option to
                  proceed.
                </p>
              </MDBModalBody>
              <MDBModalFooter>
                <button className="close" onClick={toggleShow}>
                  Close
                </button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
        <a
          data-tooltip-id="my-tooltip1"
          data-tooltip-content="Technology Stack used"
          data-tooltip-place="top"
        >
          <button onClick={toggleShow1}>
            <button>
              <i class="fa-solid fa-microchip"></i>
            </button>
          </button>
        </a>
        <Tooltip id="my-tooltip1" />
        <MDBModal tabIndex="-1" show={centredModal1} setShow={setCentredModal1}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Technologies used in the project</MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody>
                <p>
                  Front-end technologies such as
                  <strong>HTML, CSS, JavaScript</strong> and
                  <strong> React</strong> to create the user interface.
                  <strong> APIs</strong> are used to retrieve information such
                  as movie and casting details.
                </p>
                <p>
                  Back-end technologies such as
                  <strong>Node.js, Express.js</strong> 
                  
                </p>
                <p>
                Database used:
                  <strong>MongoDB</strong>  
                </p>
              </MDBModalBody>
              <MDBModalFooter>
                <button className="close" onClick={toggleShow1}>
                  Close
                </button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>

        <a
          data-tooltip-id="my-tooltip2"
          data-tooltip-content="Creator of the project"
          data-tooltip-place="top"
        >
          <button onClick={toggleShow2}>
            <i class="fa-solid fa-address-card"></i>
          </button>
        </a>
        <Tooltip id="my-tooltip2" />
        <MDBModal tabIndex="-1" show={centredModal2} setShow={setCentredModal2}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Creator of the project</MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody>
                <div className="about-div">
                  <p>Created By : </p>
                  <p>Deepak Sankar Pentakota</p>
                </div>
                <div className="about-div">
                  <p>Linkedin:</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/deepak2275/"
                  >
                    <i class="fa-solid fa-link"></i>
                  </a>
                </div>
                <div className="about-div">
                  <p>GitHub :</p>
                  <a target="_blank" href="https://github.com/Deepak2275">
                    <i class="fa-solid fa-link"></i>
                  </a>
                </div>
              </MDBModalBody>
              <MDBModalFooter>
                <button className="close" onClick={toggleShow2}>
                  Close
                </button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>
    </>
  );
}
