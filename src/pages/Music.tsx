import Menu from "../components/Menu";
import SearchFilter from "../components/SearchFilter";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer";

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
