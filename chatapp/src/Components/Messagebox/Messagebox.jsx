import React from "react";
import "./Messagebox.css";
import { AiFillPushpin } from "react-icons/Ai";

const Messagebox = ({ op }) => {
  console.log(op);
  return (
    <div className="messageboxContainer">
      <img className="profileImg" src={op.img} alt="profileImg" />
      <div>
        <div className="messageTitle">
          <h3>{op.name}</h3>
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
