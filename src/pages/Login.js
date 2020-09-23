import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Header } from "../components/Header";
import socket from "../api";

import blank from "../assets/blank.png";

export const Login = () => {
  const [user, setUser] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const loginAction = (user) => {
    socket.emit("add-user", user);
    console.log("user emitted");
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch(loginAction(user));
      history.push("/chatroom");
    } catch (err) {
      console.log(err);
    }
  };

  socket.on("add-user", (user) => {
    dispatch({ type: "ADD_USER", payload: user });
  });

  useEffect(() => {
    socket.on("add-user", (user) => {
      dispatch({ type: "ADD_USER", payload: user });
    });
    return () => {
      socket.off("add-user");
    };
  }, []);

  return (
    <>
      <Header />
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="form">
          <img src={blank} alt="Profile" className="profilePic" />
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
