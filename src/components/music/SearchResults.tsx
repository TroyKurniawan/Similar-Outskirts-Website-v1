import { MusicData } from "../../musicdata/musicdata";
import MusicEntry from "./MusicEntry";

type EntryProps = {
  id: number;
  title: string;
  subtitle: string;
  release_date: string;
  type: string;
  length: number;
  keysig: string[];
  tempo: number[];
  label: string;
  remix: boolean;
  collaboration: boolean;
  link: string;
  art: string;
};

type SearchResultsProps = {
  keyword: string;
  tempo: number[];
  releaseYear: number[];
  keysig: string;
  setResultCount: React.Dispatch<React.SetStateAction<number>>;
};

function SearchResults({
  keyword,
  tempo,
  releaseYear,
  keysig,
  setResultCount,
}: SearchResultsProps) {
  // Filter music entries
  function musicFilter(entry: EntryProps) {
    // Check keyword
    if (keyword && !entry.title.toLowerCase().includes(keyword)) return null;

    // Check tempo
    for (let i = 0; i < entry.tempo.length; i++) {
      if (tempo[0] <= entry.tempo[i] && entry.tempo[i] <= tempo[1]) break;
      if (i == entry.tempo.length - 1) return null;
    }

    // Check release year
    let date_split: string[] = entry.release_date.split("-");
    let year: number = parseInt(date_split[0]);
    if (releaseYear[0] > year || year > releaseYear[1]) return null;

    // Check keysig
    if (keysig != "-") {
      for (let i = 0; i < entry.keysig.length; i++) {
        if (keysig == entry.keysig[i]) break;
        if (i == entry.keysig.length - 1) return null;
      }
    }

    // If all pass, render component
    return entry;
  }

  // Count number of entries that are rendered
  setResultCount(MusicData.slice(0).filter(musicFilter).length);

  // ===========================================

  return (
    <div
      className="w-[64rem] h-[44rem]
                  border-4 border-slate-800 bg-slate-900
                  grid justify-center place-content-start
                  overflow-y-scroll overflow-x-hidden
                  animate-fadeInSlide"
    >
      {MusicData.slice(0)
        .filter(musicFilter)
        .reverse()
        .map((entry) => (
          <MusicEntry entry={entry} />
        ))}
      {/* <p className="font-bold text-xl">No results found.</p> */}
    </div>
  );
}

export default SearchResults;
