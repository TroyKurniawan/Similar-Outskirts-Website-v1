import React, { useState } from "react";
import MenuLinks from "./MenuLinks";
import { ReactComponent as MenuBtn } from "../../icons/google-menu.svg";
import { ReactComponent as CloseBtn } from "../../icons/google-close.svg";

const Menu = () => {
  const [open, setOpen] = useState(false);

  //   Function to open/close menu
  function menuOpen() {
    // If open, close
    if (open) {
      document.getElementById("menu")?.classList.add("translate-x-[100vw]");
    }
    // If closed, open
    else {
      document.getElementById("menu")?.classList.remove("translate-x-[100vw]");
    }
    setOpen(!open);
  }

  //   ====================

  return (
    <div className="">
      <div className="z-50">
        {/* Menu Button SVG */}
        {!open && (
          <MenuBtn
            className="hover:cursor-pointer size-10 m-3"
            onClick={menuOpen}
          />
        )}
        {/* Close Button SVG */}
        {open && (
          <CloseBtn
            className="hover:cursor-pointer size-10 m-3"
            onClick={menuOpen}
          />
        )}
      </div>

      {/* Menu */}
      <div
        id="menu"
        className="h-screen w-56 transition-all -z-10 absolute top-0 right-0
                    translate-x-[100vw]
                    grid justify-center content-center
                    bg-black"
      >
        <div className="w-36 text-4xl font-bold text-right">
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
