import Menu from "../components/Menu";
import SearchFilter from "../components/SearchFilter";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer";

function Music() {
  return (
    <div
      className="w-screen h-screen
                  grid justify-center place-items-center place-content-between
                  bg-show bg-cover bg-center
                  text-white"
    >
      <Header />

      <div className="flex my-2">
        <SearchFilter />
        <SearchResults />
      </div>

      <Footer />
    </div>
  );
}

export default Music;
