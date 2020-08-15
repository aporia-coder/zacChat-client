import React, { useEffect } from "react";
import { store } from "../redux/store";
import { initialState as chats } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Header } from "../components/Header";
import { Message } from "../components/Messages";
import socket from "../api";

export const Chatroom = () => {
  const dispatch = useDispatch();
  const topics = useSelector((state) => Object.keys(state));
  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [text, setText] = useState("");

  const sendMessage = (socket, value) => {
    socket.emit("chat-message", value);
    console.log(value);
  };

  return (
    <div className="container">
      <Header topic={activeTopic} />
      <div className="dashboard">
        <div className="topiclist">
          <div className="topics">
            <i className="far fa-comments"></i>
            <h2>topics</h2>
            <ul>
              {topics.map((topic, index) => (
                <li
                  key={index}
                  className="topics"
                  onClick={(e) => setActiveTopic(topic)}
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <i className="fas fa-user-friends usericon"></i>
            <h2>
              active
              <br /> users
            </h2>
          </div>
        </div>
        <div className="screen">
          {chats[activeTopic].map((chat, index) => (
            <Message from={chat.from} msg={chat.msg} key={index} />
          ))}
        </div>
      </div>
      <div className="chatbar">
        <input
          className="chat-input"
          type="text"
          placeholder="Your Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="send-button" onClick={sendMessage(socket, text)}>
          <i className="fas fa-paper-plane send"></i>
        </button>
      </div>
    </div>
  );
};
