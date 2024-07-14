import Menu from "./menu/Menu";
import logo from "../images/so-logo.png";
import ButtonHeader from "./utilities/ButtonHeader";

const Header2 = () => {
  document.addEventListener("scroll", bgColor);

  // Find width of current window
  // let windowLarge: boolean = false;
  // window.addEventListener(
  //   "resize",
  //   function (event) {
  //     if (window.innerWidth >= 1024) windowLarge = true;
  //     else windowLarge = false;
  //   },
  //   true
  // );

  // If the user is not at the top of the page, add a black background to the header
  function bgColor() {
    if (window.scrollY !== 0)
      document.getElementById("header")?.classList.add("bg-black");
    else document.getElementById("header")?.classList.remove("bg-black");
  }

  return (
    <>
      <div
        className="w-screen h-16 px-4 top-0 fixed
                flex place-items-center place-content-between
                transition-all"
        id="header"
      >
        {/* Logo */}
        <a href="/home">
          <img
            src={logo}
            alt="similar outskirts logo"
            className="min-w-10 w-10"
          />
        </a>

        {/* Buttons */}
        <div className="h-16 hidden lg:flex">
          <ButtonHeader title="Home" link="/home" />
          <ButtonHeader title="About" link="/about" />
          <ButtonHeader title="Music" link="/music" />
          <ButtonHeader title="Live Sets" link="/live-sets" />
          <ButtonHeader title="Art" link="/art" />
          <ButtonHeader title="Music Usage" link="/music-usage" />
          <ButtonHeader title="Contact" link="/contact" />
        </div>

        <div className="inline lg:hidden">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Header2;
