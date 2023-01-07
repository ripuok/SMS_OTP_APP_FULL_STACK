import axios from "axios";
import React, { useEffect, useState } from "react";
import BASE_URL from "../../services/helper"; //`${BASE_URL}/user/`
import "./message.scss";

const MessageSent = () => {
  let [history, setHistory] = useState([]); 

  useEffect(() => { // This will refresh at loading of page

    // Getting History OTP data from mySQL db
    async function getdata() {
      try {        
        let response = await axios.get(`${BASE_URL}/user/`);
        setHistory(() => {
          return [...response.data]; 
        });
      } catch (e) {
        console.log(e);
      }
    }
    getdata();
  }, []);

  return (
    <div className="main">
      <h3>List of Message Sent</h3>
      <div className="history">
        {history.reverse().map((message) => { //Latest Data to be at top
          let date = new Date(message.time.toString());//date formate from DB was in UTC
          date = new Date(
            date.getTime() + 5.5 * 60 * 60 * 1000 //UTC to IST time conversion
          ).toLocaleTimeString();
          console.log(date);
          return (
            <ul key={message.id}>
              Name: {message.name} <br />
              Number: {message.phone}
              <br />
              Time: {date}
              <br />
              OTP: {message.otp}
              <br />
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default MessageSent;
