import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import LiveShows from "./pages/LiveShows";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const currentYear: number = new Date().getFullYear();

function App() {
  return (
    <div className="overflow-x-clip text-white relative grid content-center">
      {/* Background */}
      <div
        className="h-screen w-screen bg-show fixed -z-10
                   bg-cover bg-no-repeat bg-fixed bg-[70%] md:bg-center"
      />

      {/* Header */}
      <Header />

      {/* Page Routing */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/live-shows" element={<LiveShows />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
