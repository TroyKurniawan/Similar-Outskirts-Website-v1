import React, { useState } from "react";
import MenuLinks from "./MenuLinks";
import { ReactComponent as MenuBtn } from "../icons/google-menu.svg";
import { ReactComponent as CloseBtn } from "../icons/google-close.svg";

const Menu = () => {
  const [open, setOpen] = useState(false);

  //   Function to open/close menu
  function menuOpen() {
    // If open, close
    if (open) {
      document.getElementById("menu")?.classList.add("-translate-x-[28rem]");
    }
    // If closed, open
    else {
      document.getElementById("menu")?.classList.remove("-translate-x-[28rem]");
    }
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
          className="hover:cursor-pointer size-16 m-5 absolute z-50"
        />
      )}
      {/* Close Button SVG */}
      {open && (
        <CloseBtn
          onClick={() => {
            menuOpen();
          }}
          className="hover:cursor-pointer size-16 m-5 absolute z-50"
        />
      )}

      {/* Menu */}
      <div
        id="menu"
        className="h-screen w-[28rem] bg-black grid justify-center content-center backdrop-blur bg-opacity-50 -translate-x-[28rem] transition z-40"
      >
        <div className="w-72 text-4xl font-bold">
          <MenuLinks title="Home" link="/home" />
          <MenuLinks title="About" link="/about" />
          <MenuLinks title="Music" link="/music" />
          <MenuLinks title="Contact" link="/contact" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
