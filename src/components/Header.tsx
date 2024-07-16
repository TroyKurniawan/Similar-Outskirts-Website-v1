import Menu from "./menu/Menu";
import logo from "../images/so-logo.png";
import ButtonHeader from "./utilities/ButtonHeader";

type HeaderProps = {
  pageBehind: () => void;
};

function Header({ pageBehind }: HeaderProps) {
  document.addEventListener("scroll", bgColor);

  // If the user is not at the top of the page, add a black background to the header
  function bgColor() {
    if (window.scrollY !== 0)
      document.getElementById("header")?.classList.add("bg-black");
    else document.getElementById("header")?.classList.remove("bg-black");
  }

  return (
    <>
      <div
        className="w-screen h-16 px-4 top-0 fixed z-50
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
          <ButtonHeader title="Live Shows" link="/live-shows" />
          <ButtonHeader title="Music Usage" link="/music-usage" />
          <ButtonHeader title="Contact" link="/contact" />
        </div>

        <div className="inline lg:hidden">
          <Menu pageBehind={pageBehind} />
        </div>
      </div>
    </>
  );
}

export default Header;
