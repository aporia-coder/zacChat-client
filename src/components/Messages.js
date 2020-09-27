import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const Messages = ({ from, msg }) => {
  const date = new Date();
  dayjs.extend(relativeTime);
  return (
    <div className="message">
      <img
        src={require("../assets/zac.jpg")}
        alt={from}
        className="profilepicture"
      />
      <div className="chat-message">
        <h5>{from}</h5>
        <span> {`${dayjs(date).fromNow()}`}</span>
        <p>{msg}</p>
        <div className="arrow"></div>
      </div>
    </div>
  );
};
