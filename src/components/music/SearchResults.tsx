import { MusicData } from "../../musicdata/musicdata";
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
          <MusicEntry entry={entry} />
        ))}
      {/* <p className="font-bold text-xl">No results found.</p> */}
    </div>
  );
}

export default SearchResults;
