import Menu from "../components/menu/Menu";
import Header from "../components/Header";
import textlogo from "../images/so-text-logo.png";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <img
        id="logo"
        src={textlogo}
        className="h-32 md:h-72
                    animate-fadeInSlide transition-all
                    mb-16"
        alt="similar outskirts text logo"
      />
    </div>
  );
}

export default Home;
