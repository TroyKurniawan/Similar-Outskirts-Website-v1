import textlogo from "../images/so-text-logo.png";

function Home() {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <img
        id="logo"
        src={textlogo}
        className="h-32 sm:h-40 md:h-56 lg:h-72
                    animate-fadeInSlide transition-all
                    mb-8"
        alt="similar outskirts text logo"
      />
    </div>
  );
}

export default Home;
