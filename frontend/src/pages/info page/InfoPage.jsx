import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BASE_URL from "../../services/helper"; //`${BASE_URL}/user/`
import "./infopage.scss";

const InfoPage = () => {
  // const navigate = useNavigate();

  //Data after Navigate is taken with help of useLocation hook
  const location = useLocation();
  let otp = Math.floor(Math.random() * 900000) + 100000;

  let [validate, setValidate] = useState(false);
  let [validate2, setValidate2] = useState([false, null]);

  async function handleOTP() {
    let data = {
      phone: location.state.phone,
      name: location.state.name,
      otp: otp,
    };

    console.log(data);
    let response;
    try {
      //Sending OTP to backend to send to Twilio api and save data to DB
      response = await axios.post(`${BASE_URL}/user/`, data);
    } catch (e) {
      console.log(e);
    }
    //Getting response from backend
    console.log("response", response.data);
    setValidate2([true, response.data]);
  }
 // This will have 3 validation check first to INFO page and second Message Confirmation and last response of OTP either successfull or unsuccessful.
  return (
    <div classname="main1">
      {validate ? (
        <div>
          <h3>Send Message</h3>

          <div>
            {validate2[0] ? ( // After OTP is send 
              <div>
                <p>
                  Message{" "}
                  {validate2[1] === true
                    ? "is Sent Successfully."
                    : "sent was Unsuccessfull."}
                </p>
              </div>
            ) : (
              <div>
                <p>
                  Following Text will be sent to <br />
                  Phone Number: {location.state.phone}
                </p>
                <br />
                <p>{'"Hi. Your OTP is: ' + otp + '"'}</p>
                <br />
                <button type="button" onClick={handleOTP}>
                  Send
                </button>
                <br />
                <br />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h3>Info Page</h3>

          <div>
            <p>
              Name: {location.state.name}
              <br />
              Phone Number: {location.state.phone}
            </p>
          </div>
          <div className="sendMessage">
            <button type="button" onClick={() => setValidate(true)}>
              Go to Message Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
