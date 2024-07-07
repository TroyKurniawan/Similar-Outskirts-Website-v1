import React, { useState } from "react";
import { ReactComponent as MenuBtn } from "./icons/google-menu.svg";
import { ReactComponent as CloseBtn } from "./icons/google-close.svg";

const Menu = () => {
  const [open, setOpen] = useState(false);

  //   Function to open/close menu
  function menuOpen() {
    // If open, close
    if (open)
      document.getElementById("menu")?.classList.add("-translate-x-[28rem]");
    // If closed, open
    else
      document.getElementById("menu")?.classList.remove("-translate-x-[28rem]");
    setOpen(!open);
  }

  //   ====================

  return (
    <div className="h-screen absolute text-white">
      {/* Menu Button SVG */}
      {!open && (
        <MenuBtn
          onClick={() => {
            menuOpen();
          }}
          className="hover:cursor-pointer size-16 m-5 absolute z-10"
        />
      )}
      {/* Close Button SVG */}
      {open && (
        <CloseBtn
          onClick={() => {
            menuOpen();
          }}
          className="hover:cursor-pointer size-16 m-5 absolute z-10"
        />
      )}

      {/* Menu */}
      <div
        id="menu"
        className="h-screen w-[28rem] bg-black grid justify-center content-center animate-fadeOut backdrop-blur bg-opacity-50 -translate-x-[28rem] transition"
      >
        <div className="w-72 text-4xl leading-loose font-bold">
          <p className="hover:text-blue-500 hover:translate-x-4 hover:cursor-pointer transition-all">
            Home
          </p>
          <p className="hover:text-blue-500 hover:translate-x-4 hover:cursor-pointer transition-all">
            About
          </p>
          <p className="hover:text-blue-500 hover:translate-x-4 hover:cursor-pointer transition-all">
            Music
          </p>
          <p className="hover:text-blue-500 hover:translate-x-4 hover:cursor-pointer transition-all">
            Live Sets
          </p>
          <p className="hover:text-blue-500 hover:translate-x-4 hover:cursor-pointer transition-all">
            Art
          </p>
          <p className="hover:text-blue-500 hover:translate-x-4 hover:cursor-pointer transition-all">
            Music Usage
          </p>
          <p className="hover:text-blue-500 hover:translate-x-4 hover:cursor-pointer transition-all">
            Work Portfolio
          </p>
          <p className="hover:text-blue-500 hover:translate-x-4 hover:cursor-pointer transition-all">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
