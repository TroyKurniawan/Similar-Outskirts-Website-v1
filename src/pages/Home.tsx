import Menu from "../components/Menu";
import Header from "../components/Header";
import textlogo from "../images/so-text-logo.png";
import Footer from "../components/Footer";

function Home() {
  return (
    <div
      className="w-screen h-screen
                    grid place-items-center content-between
                    bg-show bg-cover bg-center
                    text-white"
    >
      <Header />
      <div className="h-16" />

      <div className="grid place-items-center">
        <img
          src={textlogo}
          className="h-72 animate-fadeInSlide mb-12"
          alt="similar outskirts text logo"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
