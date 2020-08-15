import React from "react";

export const Message = ({ from, msg }) => {
  return (
    <div className="message">
      <img
        src={require("../assets/zac.jpg")}
        alt={from}
        className="profilepicture"
      />
      <div className="chat-message">
        <h5>{from}</h5>
        <p>{msg}</p>
        <div className="arrow"></div>
      </div>
    </div>
  );
};
