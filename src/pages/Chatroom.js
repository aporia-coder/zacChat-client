import React from "react";
import { Header } from "../components/Header";

export const Chatroom = () => {
  return (
    <div className="container">
      <Header />
      <div className="dashboard">
        <div className="topiclist"></div>
        <div className="chatbox"></div>
      </div>
      <div className="chatbar">
        <input type="text" placeholder="Enter Message" />
        <i class="fas fa-paper-plane send"></i>
      </div>
    </div>
  );
};
