import React from "react";
import { toast } from "react-toastify";

const ContactEmailItem = ({ name = "name test", email = "test@email.com" }) => {
  const handleCopy = () => {
    // console.log(email);
    navigator.clipboard
      .writeText(email)
      .then((res) => {
        toast.info("Correo copiado en el portapapeles!");
      })
      .catch((err) => {
        toast.error("Error al copiar el correo :c");
      });
  };

  return (
    <div className="contact__email_item">
      <div className="contact__email_item_name">
        <span className="material-symbols-outlined">account_circle</span>
        <p> {name} </p>
      </div>
      <div className="contact__email_item_email">
        {email}
        <button onClick={handleCopy}>
          <span className="material-symbols-outlined">content_copy</span>
        </button>
      </div>
    </div>
  );
};

export default ContactEmailItem;
