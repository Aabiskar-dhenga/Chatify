import React from "react";
import "./Messagebox.css";
import { AiFillPushpin } from "react-icons/Ai";

const Messagebox = () => {
  return (
    <div className="messageboxContainer">
      <img
        className="profileImg"
        src="https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg"
        alt="profileImg"
      />
      <div>
        <div className="messageTitle">
          <h3>Office Chat</h3>
          <p>4 m</p>
        </div>
        <div className="chatMessage">
          <p>oy vai sancahi xas ta ? </p>
          <AiFillPushpin />
        </div>
      </div>
    </div>
  );
};

export default Messagebox;
