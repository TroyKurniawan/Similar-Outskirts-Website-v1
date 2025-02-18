import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import LiveShows from "./pages/LiveShows";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MusicUsage from "./pages/MusicUsage";
import Contact from "./pages/Contact";
export const currentYear: number = new Date().getFullYear();

function pageBehind() {
  if (document.getElementById("page")?.classList.contains("-z-10"))
    document.getElementById("page")?.classList.remove("-z-10");
  else document.getElementById("page")?.classList.add("-z-10");
}

function App() {
  return (
    <div className="overflow-x-clip text-white relative grid content-center">
      {/* Header */}
      <Header pageBehind={pageBehind} />

      {/* Page Routing */}
      <div id="page" className="transition-all">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
            <Route path="/live-shows" element={<LiveShows />} />
            <Route path="/music-usage" element={<MusicUsage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </div>
  );
}

export default App;
