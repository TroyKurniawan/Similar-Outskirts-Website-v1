import React, { useState } from "react";

function FAQsection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Question */}
      <div
        className="w-96 sm:w-[36rem] md:w-[42rem] lg:w-[60rem]
                    h-20
                    bg-slate-800 hover:bg-slate-700 cursor-pointer transition-all
                    px-8 mt-4
                    flex justify-between place-items-center"
        onClick={() => setOpen(!open)}
      >
        <h2 className="font-bold text-2xl">Q: Blah Blah Blah...</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50px"
          viewBox="0 -960 960 960"
          width="50px"
          fill="white"
          className={open ? "rotate-180 transition-all" : "transition-all"}
        >
          <path d="M480-360 280-560h400L480-360Z" />
        </svg>
      </div>

      {/* Answer */}
      {open && (
        <div
          className="w-96 sm:w-[36rem] md:w-[42rem] lg:w-[60rem]
                    bg-slate-900
                    px-16 py-4 grid"
        >
          A: Yup Yup Yup...
        </div>
      )}
    </>
  );
}

export default FAQsection;
