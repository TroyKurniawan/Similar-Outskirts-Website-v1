import textlogo from "../images/so-text-logo.png";
import SEO from "../components/utilities/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Similar Outskirts"
        url="similaroutskirts.vercel.app"
        description="Music Producer / DJ 🎧"
        img="https://raw.githubusercontent.com/TroyKurniawan/Similar-Outskirts-Website-v1/refs/heads/main/public/thumbnail.jpg"
      />

      <div className="w-screen h-screen grid place-items-center">
        {/* Background */}
        <div
          className="h-screen w-screen bg-show1 fixed -z-50
                   bg-cover bg-no-repeat bg-[70%] md:bg-center"
        />
        {/* Logo */}
        <img
          id="logo"
          src={textlogo}
          className="h-28 sm:h-36 md:h-52 lg:h-64
                    animate-fadeInSlide transition-all
                    mb-8 hover:scale-105"
          alt="similar outskirts text logo"
        />
      </div>
    </>
  );
}

export default Home;
