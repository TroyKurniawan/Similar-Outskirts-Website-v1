import React from "react";
import Menu from "./Menu";
import textlogo from "./images/so-text-logo.png";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-800 grid justify-center content-center text-white">
      <Menu />
      <img src={textlogo} className="w-96" />
    </div>
  );
}

export default App;
