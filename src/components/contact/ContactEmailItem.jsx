import React from "react";

const ContactEmailItem = ({ name = "name test", email = "test@email.com" }) => {
  return (
    <div className="contact__email_item">
      <div>
        <span className="material-symbols-outlined">account_circle</span>
        <p> {name} </p>
      </div>
      <div>{email}</div>
    </div>
  );
};

export default ContactEmailItem;
