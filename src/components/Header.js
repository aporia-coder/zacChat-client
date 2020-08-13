import React from "react";

export const Header = () => {
  return (
    <header>
      <i class="fas fa-sign-in-alt logout"></i>
      <h1>zac chat</h1>
      <img
        src={require("../assets/zac.jpg")}
        alt="Profile Picture"
        className="profilepicture"
      />
    </header>
  );
};
