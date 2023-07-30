import React, { useState } from "react";
import "./Chatbox.css";
import { RiSearchLine } from "react-icons/Ri";
import { BsTelephoneFill } from "react-icons/Bs";
import { CiMenuKebab } from "react-icons/Ci";
import Chat from "../Chats/Chat";
import { GrAttachment } from "react-icons/Gr";
import MsgGround from "../MsgGround/MsgGround";
import { Message } from "../../utilities/data";

const Chatbox = () => {
  const [inputMsg, setInputMsg] = useState("");
  const [messageArray, setmessageArray] = useState(Message);
  const handleInput = (event) => {
    setInputMsg(event.target.value);
  };

  const handleKeyDown = (event) => {
    let newMessage = {
      id: "#JYUDFG",
      text: inputMsg,
      type: "text",
      imageUrl: "",
      createdAt: "5:33PM",
      sender: {
        name: "dhenga",
        id: "#42691",
        profileImg:
          "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    };
    console.log(event.key);
    if (event.key == "Enter") {
      setmessageArray([...messageArray, newMessage]);
      setInputMsg("");
    }
  };

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

      <MsgGround messageArray={messageArray} />

      <div className="messaegeInputBox">
        <GrAttachment className="attachmentIcon" />
        <input
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          value={inputMsg}
          className="inputBox"
          placeholder="Your MESSAGES"
          type="text"
        />
      </div>
    </div>
  );
};

export default Chatbox;
