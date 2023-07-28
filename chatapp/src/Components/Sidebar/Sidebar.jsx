import React from "react";
import "./Sidebar.css";
import { RiSearchLine } from "react-icons/Ri";
import Messagebox from "../Messagebox/Messagebox";

const Sidebar = () => {
  return (
    <div className="sidebarAppcontainer">
      <div className="searchBox">
        <RiSearchLine className="searchIcon" />
        <input className="searchBar" placeholder="Search " type="text" />
      </div>
      <div className="conversation_list">
        <Messagebox />
        <Messagebox />
        <Messagebox />
        <Messagebox />
        <Messagebox />
        <Messagebox />
        <Messagebox />
        <Messagebox />
        <Messagebox />
      </div>
    </div>
  );
};

export default Sidebar;
