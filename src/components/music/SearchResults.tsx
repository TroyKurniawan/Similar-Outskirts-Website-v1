import { useEffect, useState } from "react";
import { MusicData } from "../../musicdata/musicdata";
import MusicEntry from "./MusicEntry";
import PageButton from "./PageButton";

type EntryProps = {
  id: number;
  title: string;
  subtitle: string;
  release_date: string;
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
};

function SearchResults({
  keyword,
  tempo,
  releaseYear,
  keysig,
}: SearchResultsProps) {
  // Count number of entries that are rendered
  let entryCount = MusicData.slice(0).filter(musicFilter).length;

  // Pages
  let pageCount = Math.ceil(entryCount / 20);
  const [pageRange, setPageRange] = useState([0, 20]);
  const [pageCurrent, setPageCurrent] = useState(1);

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

  // Every time a filter is changed, set the page back to 1
  useEffect(() => {
    setPageRange([0, 20]);
    setPageCurrent(1);
  }, [keyword, tempo, releaseYear, keysig]);

  // ===========================================

  return (
    <div
      className="w-[64rem] h-[44rem]
                 border-4 border-slate-800 bg-slate-900 bg-opacity-50 backdrop-blur
                  grid justify-center place-content-start
                  animate-fadeInSlide"
    >
      {/* Header */}
      <div
        className="w-[64rem] h-20 flex px-8
                   border-l-4 border-r-4 border-slate-800 bg-slate-900
                   place-content-between place-items-center"
      >
        <p className="text-sm text-gray-500">
          <b>RESULTS:</b>
          {entryCount != 0 && (
            <p>
              ( {pageRange[0] + 1} - {Math.min(pageRange[1], entryCount)} of{" "}
              {entryCount} )
            </p>
          )}
          {entryCount == 0 && <p>No results found.</p>}
        </p>
        {/* Pages */}
        <div className="flex space-x-2">
          {Array.from({ length: pageCount }, (_, index) => (
            <PageButton
              setPageRange={setPageRange}
              pageNumber={index + 1}
              pageCurrent={pageCurrent}
              setPageCurrent={setPageCurrent}
            />
          ))}
        </div>
      </div>

      {/* Music Entries */}
      <div
        className="border-t-4 border-l-4 border-r-4 border-slate-800
                   overflow-x-hidden"
      >
        {MusicData.filter(musicFilter)
          .slice(pageRange[0], pageRange[1])
          .map((entry) => (
            <MusicEntry entry={entry} />
          ))}
      </div>
    </div>
  );
}

export default SearchResults;
