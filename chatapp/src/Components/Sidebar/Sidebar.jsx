import React from "react";
import "./Sidebar.css";
import { RiSearchLine } from "react-icons/Ri";
import Messagebox from "../Messagebox/Messagebox";
import { People } from "../../utilities/Peopledata";

const Sidebar = () => {
  return (
    <div className="sidebarAppcontainer">
      <div className="searchBox">
        <RiSearchLine className="searchIcon" />
        <input className="searchBar" placeholder="Search " type="text" />
      </div>
      <div className="conversation_list">
        {
People.map((name)=>{

return <Messagebox  name ={name}/>

})

          
        }
       
      </div>
    </div>
  );
};

export default Sidebar;
