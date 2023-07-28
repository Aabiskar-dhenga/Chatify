import React from "react";
import "./Chatbox.css";
import { RiSearchLine } from "react-icons/Ri";
import { BsTelephoneFill } from "react-icons/Bs";
import { CiMenuKebab } from "react-icons/Ci";
import Chat from "../Chats/Chat";
import { GrAttachment } from "react-icons/Gr";
import MsgGround from "../MsgGround/MsgGround";

const Chatbox = () => {
  return (
    <div className="chatboxContainer">
      <div className="chatHeader">
        <h3>Office Chat</h3>
        <div className="chatheaderBottom">
          <div className="chatstatusMember">
            <p>45 members , 24 online</p>
          </div>
          <div className="chatheaderIcon">
            <RiSearchLine />
            <BsTelephoneFill />
            <CiMenuKebab />
          </div>
        </div>
      </div>

      <MsgGround />

      <div className="messaegeInputBox">
        <GrAttachment className="attachmentIcon" />
        <input className="inputBox" placeholder="Your MESSAGES" type="text" />
      </div>
    </div>
  );
};

export default Chatbox;
