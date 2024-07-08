import logo from "../images/so-logo.png";
import ButtonHeader from "./ButtonHeader";

const Header2 = () => {
  document.addEventListener("scroll", bgColor);

  function bgColor() {
    if (window.scrollY !== 0)
      document.getElementById("header")?.classList.add("bg-black");
    else document.getElementById("header")?.classList.remove("bg-black");
  }

  return (
    <>
      <div
        className="w-screen h-16 p-8 top-0 left-0 fixed
                flex place-items-center place-content-between
                transition-all"
        id="header"
      >
        {/* Logo */}
        <a href="/home">
          <img src={logo} className="w-10" />
        </a>

        {/* Buttons */}
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

      {/* Extra div for spacing */}
      <div className="h-16" />
    </>
  );
};

export default Header2;
