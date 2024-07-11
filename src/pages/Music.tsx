import Menu from "../components/menu/Menu";
import SearchFilter from "../components/music/SearchFilter";
import SearchResults from "../components/music/SearchResults";

function Music() {
  return (
    <div
      className="w-screen h-screen
                  grid justify-center content-center
                  bg-show bg-cover bg-center
                  text-white"
    >
      <div className="flex">
        <SearchFilter />
        <SearchResults />
      </div>
    </div>
  );
}

export default Music;
