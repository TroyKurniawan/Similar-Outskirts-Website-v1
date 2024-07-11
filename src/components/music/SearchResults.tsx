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
};

function SearchResults({ keyword }: SearchResultsProps) {
  // Filter music entries
  function musicFilter(entry: EntryProps) {
    // Check keyword
    if (keyword && !entry.title.toLowerCase().includes(keyword)) return null;
    return entry;
  }

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
