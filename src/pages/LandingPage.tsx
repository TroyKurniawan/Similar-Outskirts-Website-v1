import { MusicData } from "../musicdata/musicdata";
import Link from "../components/landingpage/Link";

type LandingPageProps = {
  id: number;
};

function LandingPage({ id }: LandingPageProps) {
  let song = MusicData[id];

  return (
    <>
      <head>
        <title>{song.title}</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={song.title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={song.art} />
        <meta property="og:url" content={song.link} />
        <meta property="og:description" content="Out Now! 🎶" />

        {/* X/Twitter Meta Tags */}
        <meta property="twitter:card" content="Out Now! 🎶" />
      </head>

      {/* Background */}
      <img
        src={song.art}
        className="fixed w-screen blur-xl opacity-40 -z-10"
        alt={song.title}
      />

      <div className="w-screen mt-8 grid justify-center place-content-center">
        {/* Main Box */}
        <div
          className="w-80 grid justify-center py-4 my-16
                        border-4 border-slate-800 bg-slate-900 backdrop-blur bg-opacity-80 space-y-4
                        animate-fadeInSlide"
        >
          {/* Art */}
          <img className="size-72" src={song.art} alt={song.title} />

          {/* Title */}
          <div className="w-full h-16 grid place-items-center">
            <h1 className="font-black text-2xl">{song.title}</h1>
            <h2 className="font-bold text-gray-500">{song.subtitle}</h2>
          </div>

          <span className="w-full h-[3px] bg-slate-800" />

          {/* Links */}
          <div>
            {song.spotify && <Link site="Spotify" url={song.spotify} />}
            {song.apple_music && (
              <Link site="Apple Music" url={song.apple_music} />
            )}
            {song.soundcloud && (
              <Link site="SoundCloud" url={song.soundcloud} />
            )}
            {song.youtube && <Link site="YouTube" url={song.youtube} />}
            {song.bandcamp && <Link site="Bandcamp" url={song.bandcamp} />}
            {song.download && <Link site="Free Download" url={song.download} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
