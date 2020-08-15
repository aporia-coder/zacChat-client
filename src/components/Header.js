import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ topic }) => {
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logout-text">
          <i className="fas fa-sign-in-alt logout"></i>
          <h2>logout</h2>
        </div>
      </Link>
      <h1>{topic} chat</h1>
      <img
        src={require("../assets/zac.jpg")}
        alt="Profile"
        className="profilepicture"
      />
    </header>
  );
};
