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
  label: string;
};

function SearchResults({
  keyword,
  tempo,
  releaseYear,
  keysig,
  label,
}: SearchResultsProps) {
  // Count number of entries that are rendered
  let entryCount = MusicData.slice(0).filter(musicFilter).length;

  // Pages
  const [itemsPerPage, setItemsPerPage] = useState(20);
  let pageCount = Math.ceil(entryCount / itemsPerPage);
  const [pageRange, setPageRange] = useState([0, itemsPerPage]);
  const [pageCurrent, setPageCurrent] = useState(1);

  // Filter music entries
  function musicFilter(entry: EntryProps) {
    // Check keyword
    if (keyword && !entry.title.toLowerCase().includes(keyword)) return null;

    // Check tempo
    for (let i = 0; i < entry.tempo.length; i++) {
      if (tempo[0] <= entry.tempo[i] && entry.tempo[i] <= tempo[1]) break;
      if (i === entry.tempo.length - 1) return null;
    }

    // Check release year
    let date_split: string[] = entry.release_date.split("-");
    let year: number = parseInt(date_split[0]);
    if (releaseYear[0] > year || year > releaseYear[1]) return null;

    // Check keysig
    if (keysig !== "-") {
      for (let i = 0; i < entry.keysig.length; i++) {
        if (entry.keysig[i].includes(keysig)) break;
        if (i === entry.keysig.length - 1) return null;
      }
    }

    // Check label
    if (label !== "-") {
      if (label !== entry.label) return null;
    }

    // If all pass, render component
    return entry;
  }

  // Every time a filter is changed, set the page back to 1
  useEffect(() => {
    setPageRange([0, itemsPerPage]);
    setPageCurrent(1);
  }, [keyword, tempo, releaseYear, keysig, label, itemsPerPage]);

  // Sort entry
  const [sortMethod, setSortMethod] = useState("Newest");
  function sortEntry(a: EntryProps, b: EntryProps) {
    if (sortMethod === "Newest") return b.id - a.id;
    if (sortMethod === "Oldest") return a.id - b.id;

    if (sortMethod === "Longest") return b.length - a.length;
    if (sortMethod === "Shortest") return a.length - b.length;

    if (sortMethod === "Fastest") return b.tempo[0] - a.tempo[0];
    if (sortMethod === "Slowest") return a.tempo[0] - b.tempo[0];

    if (sortMethod === "A - Z") {
      //
    }
    if (sortMethod === "Z - A") {
      //
    }

    return 0;
  }

  // Scroll back to top of results when page, sort, or filter changes
  useEffect(() => {
    let musicentries = document.getElementById("music-entries");
    musicentries!.scrollTop = 0;
  }, [pageCurrent, sortMethod, keyword, tempo, releaseYear, keysig]);

  // ===========================================

  return (
    <div
      className="w-[calc(100vw)] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-500px)]
                  h-[calc(100vh-250px)] lg:h-[calc(100vh-200px)]
                  border-4 border-slate-800 bg-slate-900
                  grid justify-center place-content-start
                  animate-fadeInSlide"
    >
      {/* Header */}
      <div
        className="w-[calc(100vw)] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-500px)]
                  h-20 flex px-4
                  border-l-4 border-r-4 border-b-4 border-slate-800 bg-slate-900
                  place-content-between place-items-center"
      >
        {/* Result Count */}
        <p className="text-sm text-gray-500">
          <b>Results:</b>
          {entryCount !== 0 && (
            <p>
              ( {pageRange[0] + 1} - {Math.min(pageRange[1], entryCount)} of{" "}
              {entryCount} )
            </p>
          )}
          {entryCount === 0 && <p>No results found.</p>}
        </p>

        <div className="flex space-x-8">
          {/* Sort */}
          <div className="flex place-items-center text-gray-500 space-x-2">
            <b className="text-sm w-20">Sort by:</b>
            <select
              id="sort-menu"
              className="bg-slate-800 w-full pl-2 h-8"
              defaultValue={"Newest"}
              onChange={() => {
                setSortMethod(
                  (document.getElementById("sort-menu") as HTMLSelectElement)!
                    .value
                );
              }}
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
              <option value="Longest">Longest</option>
              <option value="Shortest">Shortest</option>
              <option value="Fastest">Fastest</option>
              <option value="Slowest">Slowest</option>
              {/* <option value="A - Z">A - Z</option> */}
              {/* <option value="Z - A">Z - A</option> */}
            </select>
          </div>
          {/* Pages */}
          <div className="flex space-x-2">
            {Array.from({ length: pageCount }, (_, index) => (
              <PageButton
                setPageRange={setPageRange}
                pageNumber={index + 1}
                pageCurrent={pageCurrent}
                setPageCurrent={setPageCurrent}
                itemsPerPage={itemsPerPage}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Music Entries */}
      <div
        id="music-entries"
        className="border-l-4 border-r-4 border-slate-800
                   overflow-x-hidden"
      >
        {MusicData.filter(musicFilter)
          .sort(sortEntry)
          .slice(pageRange[0], pageRange[1])
          .map((entry) => (
            <MusicEntry entry={entry} />
          ))}
      </div>
    </div>
  );
}

export default SearchResults;
