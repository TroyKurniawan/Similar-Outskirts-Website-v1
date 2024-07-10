import Menu from "../components/Menu";
import Header from "../components/Header";
import persona from "../images/so-persona.png";
import Footer from "../components/Footer";

function About() {
  return (
    <div
      className="w-screen
                  grid place-items-center
                  text-white"
    >
      <div className="my-12 p-8 w-96 md:w-[48rem] lg:w-[58rem] grid lg:flex justify-center content-center place-items-center text-white animate-fadeInSlide">
        {/* Paragraph */}
        <p className=" text-justify">
          <h1
            className="text-4xl font-black w-fit pb-2 text-blue-500
                        border-b-4 border-blue-500
                        md:text-6xl lg:text-7xl lg:border-b-8"
          >
            About
          </h1>
          <div className="text-sm md:text-lg">
            <div className="my-5">
              Troy Kurniawan (pka. Similar Outskirts) is an Indonesian-American
              bass music artist from the Bay Area, California. His passion for
              blending bass-heavy and melodic styles have gathered support from
              NGHTMRE, SLANDER, Tokyo Machine, Ace Aura, Kotori, Lizzy Jane,
              Hyper Potions, Synthion, and more.
            </div>
            <div className="my-5">
              Growing up, Kurniawan was surrounded by a variety of music from
              pop to metal. He began playing piano at age 10, performing pieces
              at recitals while also learning how to play his favorite songs in
              his spare time. He also took up drums at age 12, teaching himself
              solely through online videos. By furthering his musical ventures
              in high school through pep bands, jazz bands, and music theory
              lessons, he naturally grew interested in music production in 2012.
            </div>
            <div className="my-5">
              Kurniawan has made steady growth in the dance music community.
              With a decade of experience under his belt, he has produced a
              number of projects including EPs such as Titans, Headspace and
              Generations. Moreover, he has released official remixes for
              artists like Chime, Skybreak, bo en, Tenkitsune, Disero, skygate,
              and foxi. His works have also been released with record labels
              including Disciple, Rushdown, Proximity, and Heaven Sent.
            </div>
            <div className="my-5">
              In recent years, a majority of Kurniawan's influences have come
              from a new genre movement in the community called Colour Bass.
              This style aims to cohesively combine the aggressive elements of
              bass music and the catchiness/tonality of melodic music.
              Inspiration is also drawn a lot from video games soundtracks and
              Japanese Pop/Rock, namely by Junichi Masuda, Go Ichinose &
              Morikazu Aoki (Pokemon), Yasunori Nishiki (Octopath Traveler),
              Christopher Larkin (Hollow Knight), Sangatsu No Phantasia
              (Kiznaiver), Yorushika (A Whisker Away), and Eve (Jujutsu Kaisen,
              Dororo).
            </div>
          </div>
        </p>

        {/* Persona Image */}
        <img
          src={persona}
          className="w-64 ml-12 animate-fadeInSlide"
          alt="similar outskirts persona"
        />
      </div>
    </div>
  );
}

export default About;
