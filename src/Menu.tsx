import React, { useState } from "react";
import { ReactComponent as MenuBtn } from "./icons/google-menu.svg";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen absolute">
      <MenuBtn
        onClick={() => {
          setOpen(!open);
        }}
        className="hover:cursor-pointer size-16 m-5 absolute z-10"
      />

      {open && (
        <div className="h-screen w-96 bg-slate-900 grid justify-center content-center animate-fadeIn">
          <div className="text-4xl leading-loose">
            <p>Home</p>
            <p>About</p>
            <p>Music</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
