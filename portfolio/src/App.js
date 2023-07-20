import Aside from "./components/Aside";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { AnimatePresence } from "framer-motion";
import { useAppContext } from "./context/AppContext";
import { FaAlignLeft } from "react-icons/fa";

function App() {
  const { toggleSidebar } = useAppContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loader">
          <CircleLoader
            color="#37b24d"
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="main-container">
          <Aside />

          <div className="main-content">
            <div className="nav-toggle" onClick={toggleSidebar}>
              <FaAlignLeft />
            </div>
            <AnimatePresence>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
