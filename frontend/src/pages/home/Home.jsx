import React from "react";
import Contact from "../../components/contact/Contact";
import contact_details from "../../services/contact_list";
import "./home.scss";

const Home = () => {

  //Simple home page component showing total 5 user full name from static json file
  return (
    <div className="home">
      <h3>Welcome to User Verification Site</h3>
      <br />      
      <div className="contacts">
        {contact_details.map((contact) => {
          return (
            <div key={contact.id}>
              <Contact
                name={contact.name}
                id={contact.id}
                phone={contact.phone}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
