import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chatpage from "./Pages/Chatpage/Chatpage";

function App() {
  return (
    <>
      <div className="appContainer">
        <Chatpage />
      </div>
    </>
  );
}

export default App;
