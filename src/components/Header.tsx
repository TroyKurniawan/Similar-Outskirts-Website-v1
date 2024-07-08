import logo from "../images/so-logo.png";
import ButtonHeader from "./ButtonHeader";

const Header = () => {
  return (
    <div
      className="w-screen fixed top-0 left-0
                bg-black
                flex place-items-center place-content-between px-4 h-16"
    >
      {/* Logo */}
      <a href="/home">
        <img src={logo} className="w-10" />
      </a>

      <div className="flex h-16">
        <ButtonHeader title="Home" link="/home" />
        <ButtonHeader title="About" link="/about" />
        <ButtonHeader title="Music" link="/music" />
        <ButtonHeader title="Live Sets" link="/live-sets" />
        <ButtonHeader title="Art" link="/art" />
        <ButtonHeader title="Music Usage" link="/music-usage" />
        <ButtonHeader title="Work Portfolio" link="/work-portfolio" />
      </div>
    </div>
  );
};

export default Header;
