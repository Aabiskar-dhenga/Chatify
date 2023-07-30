import React, { useState } from "react";
import { Message } from "../../utilities/data";
import Chat from "../Chats/Chat";
import styles from "./msgGround.module.css";

const MsgGround = ({ messageArray }) => {
  const loggedInUser = {
    name: "dhenga",
    id: "#42691",
    profileImg:
      "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  return (
    <div className={styles.msgGround}>
      {messageArray.map((msg) => {
        return <Chat loggedInUser={loggedInUser} msg={msg} />;
      })}
    </div>
  );
};

export default MsgGround;
