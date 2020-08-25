import React from "react";
import { Link } from "react-router-dom";

export const LogoutButton = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="logout-text">
        <i className="fas fa-sign-in-alt logout"></i>
        <h2>logout</h2>
      </div>
    </Link>
  );
};
