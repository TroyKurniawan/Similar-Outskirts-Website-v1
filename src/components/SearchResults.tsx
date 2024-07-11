import { MusicData } from "../musicdata/musicdata";
import MusicEntry from "./MusicEntry";

function SearchResults() {
  return (
    <div
      className="w-[64rem] h-[44rem]
                  border-4 border-slate-800 bg-slate-900
                  grid justify-center
                  overflow-y-scroll overflow-x-hidden
                  animate-fadeInSlide"
    >
      {MusicData.slice(0)
        .reverse()
        .map((entry) => (
          <MusicEntry
            id={entry.id}
            title={entry.title}
            subtitle={entry.subtitle}
            release_date={entry.release_date}
            type={entry.type}
            length={entry.length}
            keysig={entry.key}
            tempo={entry.tempo}
            label={entry.label}
            remix={entry.remix}
            collaboration={entry.collaboration}
            link={entry.link}
            art={entry.art}
          />
        ))}
      {/* <p className="font-bold text-xl">No results found.</p> */}
    </div>
  );
}

export default SearchResults;
