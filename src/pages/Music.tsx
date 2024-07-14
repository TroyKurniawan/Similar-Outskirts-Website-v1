import { useState } from "react";
import SearchFilter from "../components/music/SearchFilter";
import SearchResults from "../components/music/SearchResults";
import { currentYear } from "../App";

function Music() {
  // States
  const [keyword, setKeyword] = useState("");
  const [tempo, setTempo] = useState([0, 1000]);
  const [releaseYear, setReleaseYear] = useState([2014, currentYear]);
  const [keysig, setKeysig] = useState("-");
  const [label, setLabel] = useState("-");

  // Open search filter box on small devices
  function openSearchFilter() {
    // If closed, open
    if (
      document
        .getElementById("search-filter")
        ?.classList.contains("-translate-x-[80vw]")
    ) {
      document
        .getElementById("search-filter")
        ?.classList.remove("-translate-x-[80vw]");
      document.getElementById("black-bg")?.classList.remove("invisible");
    }
    // If opened, close
    else {
      document
        .getElementById("search-filter")
        ?.classList.add("-translate-x-[80vw]");
      document.getElementById("black-bg")?.classList.add("invisible");
    }
  }

  return (
    <div
      className="w-screen h-screen
                  justify-center content-center place-items-center
                  text-white py-20 lg:space-x-4
                  grid lg:flex"
    >
      {/* Filter Icon */}
      <span
        className="group bg-blue-500 w-full grid justify-center mb-2
                    hover:bg-white transition-all cursor-pointer
                    lg:hidden"
        onClick={openSearchFilter}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          width="40px"
          viewBox="0 -960 960 960"
          fill="#e8eaed"
          className=" group-hover:fill-blue-500"
        >
          <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
        </svg>
      </span>

      {/* SearchFilter */}
      <div
        id="search-filter"
        className="absolute lg:static -translate-x-[80vw] lg:-translate-x-0 transition-all z-20"
      >
        <SearchFilter
          setKeyword={setKeyword}
          setTempo={setTempo}
          setReleaseYear={setReleaseYear}
          setKeysig={setKeysig}
          setLabel={setLabel}
        />
      </div>

      {/* Black BG For small devices */}
      <span
        id="black-bg"
        className="invisible h-screen w-screen fixed bg-black bg-opacity-50 z-10 transition-all backdrop-blur-sm"
        onClick={openSearchFilter}
      />

      {/* Search Results */}
      <div id="search-results" className="">
        <SearchResults
          keyword={keyword}
          tempo={tempo}
          releaseYear={releaseYear}
          keysig={keysig}
          label={label}
        />
      </div>
    </div>
  );
}

export default Music;
