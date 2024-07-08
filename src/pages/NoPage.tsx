import Menu from "../components/Menu";
import Header from "../components/Header";
import logo from "../images/so-logo.png";
import ButtonMain from "../components/ButtonPrimary";

function NoPage() {
  return (
    <div
      className="w-screen h-screen bg-slate-800
                    grid justify-center content-center
                    bg-show bg-cover bg-center
                    text-white"
    >
      {/* <Menu /> */}
      <Header />

      <div className="grid place-items-center">
        <h1 className="text-7xl font-black">Error: Page Not Found</h1>

        <ButtonMain title="Return Home" link="/home" />

        <img src={logo} className="h-24" alt="similar outskirts logo" />
      </div>
    </div>
  );
}

export default NoPage;
