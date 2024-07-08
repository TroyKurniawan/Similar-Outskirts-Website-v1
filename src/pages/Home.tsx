import Menu from "../components/Menu";
import Header from "../components/Header";
import textlogo from "../images/so-text-logo.png";
import Footer from "../components/Footer";

function Home() {
  return (
    <div
      className="w-screen h-screen
                    grid place-items-center content-center
                    bg-show bg-cover bg-center
                    text-white"
    >
      <Header />

      <img
        src={textlogo}
        className="h-96 animate-fadeInSlide"
        alt="similar outskirts text logo"
      />

      <Footer />
    </div>
  );
}

export default Home;
