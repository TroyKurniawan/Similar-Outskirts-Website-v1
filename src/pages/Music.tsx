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

  return (
    <div
      className="w-screen h-screen
                  grid justify-center content-center
                  bg-show bg-cover bg-center
                  text-white"
    >
      <div className="flex">
        <SearchFilter
          setKeyword={setKeyword}
          setTempo={setTempo}
          setReleaseYear={setReleaseYear}
          setKeysig={setKeysig}
        />
        <SearchResults
          keyword={keyword}
          tempo={tempo}
          releaseYear={releaseYear}
          keysig={keysig}
        />
      </div>
    </div>
  );
}

export default Music;
