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
                  justify-center place-items-center
                  text-white py-20
                  grid xl:flex"
    >
      <SearchFilter
        setKeyword={setKeyword}
        setTempo={setTempo}
        setReleaseYear={setReleaseYear}
        setKeysig={setKeysig}
        setLabel={setLabel}
      />
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
