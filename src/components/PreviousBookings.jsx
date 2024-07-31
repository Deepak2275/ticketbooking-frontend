/* eslint-disable no-unused-vars */
import react, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav"
function PreviousBookings() {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const name = location.state.name;
  const mail = location.state.mail;

  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://ticketbooking-backend-irmw.onrender.com/api/auth")
      .then((response) => {
        const data = response.data.data;

        if (Array.isArray(data)) {
          setUsers(data);

          const filtered = data.filter(
            (user) => user.name === name && user.mail === mail
          );
          setFilteredUsers(filtered);
        } else {
          console.error("Data fetched is not an array:", data);
        }
      })
      .catch((err) => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  return (
    <>
      <Nav />
      <div className="prevbook">
        <h3>Previous Bookings</h3>
      </div>
      <div>
        <div className="prevtable">
          {filteredUsers &&
            filteredUsers.map((data) => (
              <div key={data.id} className="prevbookdata">
                <div>
                  <img
                    className="prevbookdataimg"
                    src={`https://image.tmdb.org/t/p/w300/` + data.photo}
                    alt=""
                  ></img>
                </div>
                <td>
                  <table className="prevbookdetails">
                    <div>
                      <h3
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bolder",
                        }}
                      >
                        <strong>{data.title}</strong>
                      </h3>
                    </div>
                    <div>
                      <td>
                        {data.date} | {data.time}
                      </td>
                    </div>
                    <div>
                      <td>
                        {data.theater} | {data.city}
                      </td>
                    </div>
                    <div>
                      <td>Tickets = {data.count}</td>
                    </div>
                    <div>
                      <td>Cost = {data.cost}</td>
                    </div>
                  </table>
                </td>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
export default PreviousBookings;
