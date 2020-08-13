import React from "react";
import { useState } from "react";
import { Header } from "../components/Header";

export const Chatroom = () => {
  const [text, setText] = useState("");
  return (
    <div className="container">
      <Header />
      <div className="dashboard">
        <div className="topiclist">
          <div className="topics">
            <h2>topics</h2>
            <p>general chat</p>
            <p>politics</p>
            <p>music</p>
            <p>philosophy</p>
            <p>technology</p>
          </div>
          <div>
            <h2>active users</h2>
          </div>
        </div>
        <div className="screen"></div>
      </div>
      <div className="chatbar">
        <input
          className="chat-input"
          type="text"
          placeholder="Your Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <i class="fas fa-paper-plane send"></i>
      </div>
    </div>
  );
};
