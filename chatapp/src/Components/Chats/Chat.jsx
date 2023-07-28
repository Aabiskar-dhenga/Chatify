import React from "react";
import "./Chat.css";
// import { AiFillEye } from "react-icons/Ai";

const Chat = ({ msg, loggedInUser }) => {
  return (
    <div
      className={`chatContainer ${
        loggedInUser.id === msg.sender.id ? "my_chat" : ""
      } `}
    >
      <img
        className="chatProfileImg"
        src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg"
        alt=""
      />
      <div className="messages">
        <p>{msg.text}</p>
        <div className="viewerNumber">
          {/* <div>
            <img
              className="viewerProfileImg"
              src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg"
              alt=""
            />
          </div> */}

          <div className="viewer_time_status">
            {/* <AiFillEye /> */}
            <p> {msg.createdAt} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
