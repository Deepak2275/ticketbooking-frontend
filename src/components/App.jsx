import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Ticket from "./Ticket";
import Home from "./Home";
import City from "./City";
import Booking from "./Booking";
import Success from "./Sucess";
import Feedback from "./Feedback";
import Nav from "./Nav";
import Payment from "./Payment";
import PreviousBookings from "./PreviousBookings";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Contact />}></Route>
        <Route path="/home" element={<City />}></Route>
        <Route path="/previousbookings" element={<PreviousBookings />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/:cityname" element={<Nav />}>
          <Route path="movie" element={<Home />}></Route>
          <Route path="movie/:userId" element={<Ticket />}></Route>
          <Route path="movie/:movie/booking" element={<Booking />}></Route>
          <Route
            path="movie/:movie/booking/payment"
            element={<Payment />}
          ></Route>
          <Route
            path="movie/:movie/booking/payment/success"
            element={<Success />}
          >
            <Route path="feedback" element={<Feedback />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;