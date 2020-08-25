import React, { useState, useEffect } from "react";
import { initialState } from "../redux/reducers/dataReducer";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../components/Header";
import { Messages } from "../components/Messages";
import socket from "../api";

export const Chatroom = () => {
  const topics = useSelector((state) => Object.keys(state.data));

  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userName);
  const chats = useSelector((state) => state.data[activeTopic]);
  console.log(user);

  const sendMessageAction = (message) => {
    socket.emit("chat-message", message);
    setText("");
  };

  useEffect(() => {
    socket.on("chat-message", (msg) => {
      dispatch({
        type: "RECEIVE_MESSAGE",
        payload: msg,
      });
      return () => {
        socket.off("chat-message");
      };
    });
  }, []);

  return (
    <>
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
            {user}
          </div>
        </div>
        <div className="screen">
          {chats.map((chat, index) => (
            <Messages from={chat.from} msg={chat.msg} key={index} />
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
        <button
          className="send-button"
          onClick={() =>
            sendMessageAction({ from: user, msg: text, topic: activeTopic })
          }
        >
          <i className="fas fa-paper-plane send"></i>
        </button>
      </div>
    </>
  );
};
