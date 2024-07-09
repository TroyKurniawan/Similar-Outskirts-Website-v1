import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="overflow-x-clip scroll">
      {/* Background */}
      <div className="h-screen w-screen bg-show bg-cover bg-no-repeat  bg-fixed fixed -z-10 bg-center" />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Music" element={<Music />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
