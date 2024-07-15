import persona from "../images/so-persona.png";

function About() {
  return (
    <>
      <div
        className="w-screen md:h-screen
                  grid place-items-center
                  text-white"
      >
        <div
          className="w-96 md:w-[48rem] lg:w-[64rem] px-4 py-16
                        grid lg:flex place-items-center 
                        animate-fadeInSlide"
        >
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
                Troy Kurniawan (pka. Similar Outskirts) is an
                Indonesian-American bass music artist from the Bay Area,
                California. His passion for blending bass-heavy and melodic
                styles have gathered support from NGHTMRE, SLANDER, Tokyo
                Machine, Ace Aura, Kotori, Lizzy Jane, Hyper Potions, Synthion,
                and more.
              </div>
              <div className="my-5">
                Kurniawan was exposed to many facets of music during his
                childhood, from learning piano and drums to joining school music
                groups. As such, he naturally grew interested in music
                production in 2012. With a decade of experience under his belt,
                he has produced a number of projects including EPs such as
                Titans, Headspace and Generations. Moreover, he has released
                official remixes for artists like Chime, Skybreak, bo en,
                Tenkitsune, Disero, skygate, and foxi. His works have also been
                released with record labels including Disciple, Rushdown,
                Proximity, and Heaven Sent.
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
                (Kiznaiver), Yorushika (A Whisker Away), and Eve (Jujutsu
                Kaisen, Dororo).
              </div>
            </div>
          </p>

          {/* Persona Image */}
          <img
            src={persona}
            className="w-64 ml-12 animate-fadeInSlide hidden lg:inline"
            alt="similar outskirts persona"
          />
        </div>
      </div>
    </>
  );
}

export default About;
