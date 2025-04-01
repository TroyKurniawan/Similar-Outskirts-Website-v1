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
import LandingPage from "./pages/LandingPage";
export const currentYear: number = new Date().getFullYear();

function pageBehind() {
  if (document.getElementById("page")?.classList.contains("-z-10"))
    document.getElementById("page")?.classList.remove("-z-10");
  else document.getElementById("page")?.classList.add("-z-10");
}

function App() {
  return (
    <>
      {/* Meta Tags */}
      <head>
        <title>Similar Outskirts</title>
        <meta name="description" content="Music Producer and DJ" />

        <meta property="og:url" content="https://similaroutskirts.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Similar Outskirts" />
        <meta property="og:description" content="Music Producer and DJ" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/TroyKurniawan/Similar-Outskirts-Website-v1/refs/heads/main/public/thumbnail.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="similaroutskirts.com" />
        <meta property="twitter:url" content="https://similaroutskirts.com" />
        <meta name="twitter:title" content="Similar Outskirts" />
        <meta name="twitter:description" content="Music Producer and DJ" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/TroyKurniawan/Similar-Outskirts-Website-v1/refs/heads/main/public/thumbnail.jpg"
        />
      </head>

      {/* ------------ */}

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

              {/* Music Landing Pages */}
              <Route
                path="/music/kokichant"
                element={<LandingPage id={124} />}
              />
            </Routes>
          </BrowserRouter>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
