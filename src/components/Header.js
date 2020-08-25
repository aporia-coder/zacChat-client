import React from "react";
import { Link } from "react-router-dom";
import { LogoutButton } from "./LogoutButton";

export const Header = ({ topic }) => {
  return (
    <header>
      <LogoutButton />
      <h1>{topic ? topic + " chat" : "Login"}</h1>
      <img
        src={require("../assets/zac.jpg")}
        alt="Profile"
        className="profilepicture"
      />
    </header>
  );
};
