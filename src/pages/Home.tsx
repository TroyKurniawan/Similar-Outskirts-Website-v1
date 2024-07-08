import Menu from "../components/Menu";
import Header from "../components/Header";
import textlogo from "../images/so-text-logo.png";
import Footer from "../components/Footer";

function Home() {
  return (
    <div
      className="w-screen h-screen
                    grid place-items-center content-between
                    text-white"
    >
      {/* <Header /> */}
      <Header />

      <img
        id="logo"
        src={textlogo}
        className="h-72 animate-fadeInSlide mb-12 transition-all"
        alt="similar outskirts text logo"
      />

      <Footer />
    </div>
  );
}

export default Home;
