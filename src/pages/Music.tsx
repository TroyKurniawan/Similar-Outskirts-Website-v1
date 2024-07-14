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
      <div className="hidden lg:inline">
        <SearchFilter
          setKeyword={setKeyword}
          setTempo={setTempo}
          setReleaseYear={setReleaseYear}
          setKeysig={setKeysig}
          setLabel={setLabel}
        />
      </div>
      <SearchResults
        keyword={keyword}
        tempo={tempo}
        releaseYear={releaseYear}
        keysig={keysig}
        label={label}
      />
    </div>
  );
}

export default Music;
