import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Chatpage.css";
import Chatbox from "../../Components/Chatbox/Chatbox";

const Chatpage = () => {
  return (
    <div className="chatPageContainer">
      <Sidebar />
      <Chatbox />
    </div>
  );
};

export default Chatpage;
