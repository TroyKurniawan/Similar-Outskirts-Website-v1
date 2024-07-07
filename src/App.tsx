import React from "react";
import Menu from "./Menu";
import About from "./About";
import textlogo from "./images/so-text-logo.png";

function App() {
  return (
    <div
      className="w-screen h-screen bg-slate-800 grid justify-center content-center
                    bg-show bg-cover bg-center"
    >
      <Menu />

      <img src={textlogo} className="h-96" />

      {/* <About /> */}
    </div>
  );
}

export default App;
