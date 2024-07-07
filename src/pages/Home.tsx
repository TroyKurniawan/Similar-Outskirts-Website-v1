import Menu from "../components/Menu";
import textlogo from "../images/so-text-logo.png";

function Home() {
  return (
    <div
      className="w-screen h-screen
                    grid justify-center content-center
                    bg-show bg-cover bg-center
                    text-white"
    >
      <Menu />
      <img src={textlogo} className="h-96" alt="similar outskirts text logo" />
    </div>
  );
}

export default Home;
