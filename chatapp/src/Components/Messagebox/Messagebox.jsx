import React from "react";
import "./Messagebox.css";
import { AiFillPushpin } from "react-icons/Ai";

const Messagebox = ({ name }) => {
  console.log(name);
  return (
    <div className="messageboxContainer">
      <img className="profileImg" src={name.img} alt="profileImg" />
      <div>
        <div className="messageTitle">
          <h3>{name.nam}</h3>
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
