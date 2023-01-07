import React from "react";
import { useNavigate } from "react-router-dom";
import "./contact.scss";

const Contact = (props) => {
  const navigate = useNavigate();
  //For user selection
  function redirectTo() {
    navigate(`/infopage/${props.id}`, { key: props.id, state: props });
  }

  //display to home page
  return (
    <div className="main">
      <button className="button" onClick={redirectTo} key={props.id}>
        <div className="contact">{props.name}</div>
      </button>
    </div>
  );
};

export default Contact;
