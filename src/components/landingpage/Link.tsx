import { useState } from "react";
import ButtonPrimary from "../utilities/ButtonPrimary";
import sp_icon from "../../icons/social-sp.png";
import am_icon from "../../icons/social-am.png";
import sc_icon from "../../icons/social-sc.png";
import yt_icon from "../../icons/social-yt.png";
import bc_icon from "../../icons/social-bc.png";

type LinkProps = {
  site: string;
  url: string;
};

function Link({ site, url }: LinkProps) {
  // Use the appropriate icon
  let icon: string = "";
  if (site === "Spotify") icon = sp_icon;
  else if (site === "Apple Music") icon = am_icon;
  else if (site === "SoundCloud") icon = sc_icon;
  else if (site === "YouTube") icon = yt_icon;
  else if (site === "Bandcamp") icon = bc_icon;

  return (
    <>
      <a
        href={url}
        target="_blank"
        className="h-16 w-full
                hover:bg-slate-800 bg-slate-900 bg-opacity-0
                  flex place-items-center
                  cursor-pointer
                  hover:border-l-8 border-blue-500 transition-all"
      >
        {/* Main Box */}
        <div className="w-full flex justify-center">
          <div className="w-full px-6 flex place-items-center justify-between">
            <h1 className="font-bold text-xl">{site}</h1>
            <img src={icon} className="w-6" />
          </div>
        </div>
      </a>
    </>
  );
}

export default Link;
