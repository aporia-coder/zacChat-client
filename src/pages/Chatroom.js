import React, { useState, useEffect, useRef } from "react";
import { initialState } from "../redux/reducers/dataReducer";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../components/Header";
import { Messages } from "../components/Messages";
import socket from "../api";

export const Chatroom = () => {
  const topics = useSelector((state) => Object.keys(state.data));

  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [text, setText] = useState("");
  const divRef = useRef(null);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const user = useSelector((state) => state.user.users[users.length - 1]);
  const chats = useSelector((state) => state.data[activeTopic]);
  // ACTIONS

  const sendMessageAction = (message) => {
    socket.emit("chat-message", message);
    setText("");
  };

  const userDisconnects = (message) => {
    socket.broadcast.emit("chat-message", message);
  };

  const isTypingAction = (user) => {
    socket.broadcast.emit("typing", `${user} is typing...`);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      if (!text) return;
      dispatch(
        sendMessageAction({ from: user, msg: text, topic: activeTopic }),
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });

    socket.on("chat-message", (msg) => {
      dispatch({
        type: "RECEIVE_MESSAGE",
        payload: msg,
      });
    });

    socket.on("add-user", (user) => {
      dispatch({
        type: "RECEIVE_MESSAGE",
        payload: {
          from: "ZacBot",
          msg: `${user} has joined the Chat`,
          topic: activeTopic,
        },
      });
    });

    socket.on("disconnect", (user) => {
      dispatch({
        type: "RECEIVE_MESSAGE",
        payload: {
          from: "ZacBot",
          msg: `${user} has left the Chat`,
          topic: activeTopic,
        },
      });
    });

    return () => socket.disconnect();
  }, []);

  return (
    <>
      <Header topic={activeTopic} />
      <div className="dashboard">
        <div className="topiclist">
          <div className="topics-container">
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
            {users.map((u, i) => (
              <div key={i} className="users">
                <i className="fas fa-circle dot"></i>
                <span>{u}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="screen">
          {chats.map((chat, index) => (
            <Messages from={chat.from} msg={chat.msg} key={index} />
          ))}
          <div ref={divRef} />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="chatbar">
          <input
            className="chat-input"
            type="text"
            placeholder="Your Message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="send-button" type="submit">
            <i className="fas fa-paper-plane send"></i>
          </button>
        </div>
      </form>
    </>
  );
};
