import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-clip text-white relative grid content-center">
      {/* Background */}
      <div className="h-screen w-screen bg-show bg-cover bg-no-repeat  bg-fixed fixed -z-10 bg-center" />

      {/* Header */}
      <Header />

      {/* Page Routing */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Music" element={<Music />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
