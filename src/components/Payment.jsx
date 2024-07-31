/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CToast,
  CToastHeader,
  CToastBody,
  CToaster,
  CToastClose,
} from "@coreui/react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

function Payment() {
  const location = useLocation();

  const cost = location.state.totalcost;
  const count = location.state.counts;
  const theater = location.state.theatre;
  const time = location.state.time;
  const date = location.state.date;
  const name = location.state.name;
  const title = location.state.title;
  const photo = location.state.photo;
  const mail = location.state.mail;
  const city = location.state.city;


  const [activeb, setactiveb] = useState(null);
  const [app, setApp] = useState(null);
  const [centredModal, setCentredModal] = useState(false);
  const [number, setNumber] = useState();
  const [tar, settarget] = useState(false);
  const [centredModal1, setCentredModal1] = useState(false);
  const [toast, addToast] = useState(0);
  const toaster = useRef();
  var num = cost / count;
  var num1 = cost + 10;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleselect(data) {
    setactiveb(data);
  }
     const removeToast =()=> {
       addToast(0);
     };
  const details = {
    name,
    mail,
    photo,
    title,
    time,
    date,
    city,
    count,
    cost,
    theater
  };
  const handlepayment = async () => {
    addToast(exampleToast);
    setCentredModal(!centredModal)
    
    try {
      const response = await fetch(
        `https://ticketbooking-backend-irmw.onrender.com/api/auth/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        }
      );
      
      addToast(0);
      setCentredModal1(!centredModal1);

    } catch (err) {
      console.log(err);
    }
  };
  const exampleToast = (
    <CToast>
      <CToastHeader autohide={false}>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="black"></rect>
        </svg>
        <div className="fw-bold me-auto">Wait {name}</div>
        <small></small>
      </CToastHeader>
      <CToastBody>
        <div class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        &nbsp;Payment is processing....
      </CToastBody>
    </CToast>
  );
  return (
    <div id="payment">
      <div className="payment">
        <div className="pay-photo">
          <img
            className="pay-image"
            src={`https://image.tmdb.org/t/p/w500/` + photo}
            height="120"
            width="120"
            alt=""
          />
        </div>
        <div className="pay-content">
          <p>
            <strong>{title}</strong>
          </p>
          <p>
            {date}- {time}
          </p>
        </div>
      </div>

      <div className="payment-cost">
        <div className="pay-cost"></div>
        <div className="pay-cost">
          <p>Cost of each ticket</p>
          <p>
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {num}.00
          </p>
        </div>
        <div className="pay-cost">
          <p>No. of tickets</p>
          <p>{count}</p>
        </div>
        <div className="pay-cost">
          <p>Sub Total</p>

          <p>
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {cost}.00
          </p>
        </div>
        <div className="pay-cost">
          <p>Commission Fee</p>
          <p>
            <i className="fa-solid fa-indian-rupee-sign"></i>
            10.00
          </p>
        </div>
        <hr />
        <div className="pay-cost">
          <p>Total Amount :</p>
          <p>
            <i className="fa-solid fa-indian-rupee-sign"></i> {num1}.00
          </p>
        </div>
        <hr />
        <div className="pay-cost">
          <button
            className="paycost-button"
            name="button1"
            value="google-pay"
            id={activeb === "button1" ? "payid" : "pay"}
            onClick={() => {
              handleselect("button1");
              setApp("Google-pay");
            }}
          >
            <i
              className="fa-brands fa-google-pay fa-2x"
              style={{ color: " #EA4335" }}
            ></i>
          </button>
          <button
            className="paycost-button"
            name="button1"
            value="amazon-pay"
            id={activeb === "button2" ? "payid" : "pay"}
            onClick={() => {
              handleselect("button2");
              setApp("Amazon-pay");
            }}
          >
            <i
              className="fa-brands fa-amazon-pay fa-2x"
              style={{ color: " #333E47" }}
            ></i>
          </button>
          <button
            className="paycost-button"
            name="button1"
            value="visa"
            id={activeb === "button3" ? "payid" : "pay"}
            onClick={() => {
              handleselect("button3");
              setApp("Visa");
            }}
          >
            <i
              className="fa-brands fa-cc-visa fa-2x"
              style={{ color: "#15195A" }}
            ></i>
          </button>
          <button
            className="paycost-button"
            name="button1"
            value="visa"
            id={activeb === "button4" ? "payid" : "pay"}
            onClick={() => {
              handleselect("button4");
              setApp("Apple-pay");
            }}
          >
            <i
              className="fa-brands fa-cc-apple-pay fa-2x"
              style={{ color: " black" }}
            ></i>
          </button>
        </div>
        {activeb && (
          <div className="payconfirm">
            <button
              className="payconfirm-button"
              onClick={() => {
                setTimeout(() => setCentredModal(!centredModal), 100);
              }}
            >
              Pay &nbsp;
              <i className="fa-solid fa-indian-rupee-sign"></i>
              &nbsp;
              {num1}.00
            </button>
          </div>
        )}
        <CToaster ref={toaster} push={toast} placement="top-end" />
        <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
          <MDBModalDialog top size="md">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle></MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody>
                <div className="gfg">
                  <div className="gfg-content" id="gfg-content">
                    <div className="pay-details">
                      <input
                        type="number"
                        placeholder="Enter mobile number"
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}
                      />
                    </div>
                    <div className="pay-details">
                      <input
                        type="checkbox"
                        style={{ height: "18px", width: "18px" }}
                        onClick={() => settarget(!tar)}
                      />
                      <label> &nbsp;I am not a Robot</label>
                    </div>
                  </div>
                </div>
              </MDBModalBody>
              <MDBModalFooter>
                {tar && number?.length === 10 && (
                  <div className="payconfirm">
                    <button
                      className="payconfirm-button"
                      onClick={handlepayment}
                    >
                      Add payment
                    </button>
                  </div>
                )}
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>

        <MDBModal
          backdrop={false}
          tabIndex="-1"
          show={centredModal1}
          setShow={setCentredModal1}
        >
          <MDBModalDialog top size="md">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle></MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody>
                <div className="gfg">
                  <div className="gfg-content" id="gfg-content">
                    <div className="pay-details">
                      <i class="fa-solid fa-circle-check fa-3x"></i>
                    </div>
                    <div className="pay-details">
                      <b>Your payment is successful .....</b>
                      <div className="payconfirm">
                        <Link
                          state={{ name: name, city: city, mail: mail }}
                          to={`/${city}/movie`}
                        ></Link>
                        {
                          <Link
                            state={{
                              totalcost: cost,
                              counts: count,
                              theatre: theater,
                              time: time,
                              date: date,
                              name: name,
                              title: title,
                              photo: photo,
                              payoption: app,
                              mail: mail,
                              city: city,
                              number: number,
                            }}
                            to="success"
                          >
                            <button className="btn btn-primary  ">
                              Check Ticket
                            </button>
                          </Link>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </MDBModalBody>
              <MDBModalFooter></MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>
    </div>
  );
}

export default Payment;