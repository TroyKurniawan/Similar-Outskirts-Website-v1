import sc_icon from "../icons/social-sc.png";
import yt_icon from "../icons/social-yt.png";
import sp_icon from "../icons/social-sp.png";
import am_icon from "../icons/social-am.png";
import tw_icon from "../icons/social-tw.png";
import ig_icon from "../icons/social-ig.png";
import tt_icon from "../icons/social-tt.png";
import SocialMediaButton from "./utilities/SocialMediaButton";
import { currentYear } from "../App";

let sc_link = "https://soundcloud.com/similar-outskirts";
let yt_link = "https://www.youtube.com/SimilarOutskirts/";
let sp_link =
  "https://open.spotify.com/artist/1EheS355QusAVqx9Pux9No?si=oS6DBwRDQZa2GmwRkY3TTw";
let am_link = "https://music.apple.com/ca/artist/similar-outskirts/1073747592";
let tw_link = "https://x.com/Sim_Out_";
let ig_link = "https://instagram.com/similaroutskirts";
let tt_link = "https://www.tiktok.com/@similaroutskirts";

const Footer = () => {
  return (
    <div
      className="w-screen h-32 md:h-16 bottom-0 absolute
                bg-black
                grid content-center"
    >
      <div className="grid md:flex justify-center space-y-4 md:space-y-0">
        <div className="flex justify-center">
          <SocialMediaButton link={sc_link} icon={sc_icon} />
          <SocialMediaButton link={yt_link} icon={yt_icon} />
          <SocialMediaButton link={sp_link} icon={sp_icon} />
          <SocialMediaButton link={am_link} icon={am_icon} />
        </div>
        <div className="flex justify-center">
          <SocialMediaButton link={tw_link} icon={tw_icon} />
          <SocialMediaButton link={ig_link} icon={ig_icon} />
          <SocialMediaButton link={tt_link} icon={tt_icon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
