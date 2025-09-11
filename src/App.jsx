import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import WhoIsHe from "./pages/WhoIsHe";
import Sns from "./pages/Sns";
import Album from "./pages/Album";
import Header from "./components/Header";
import "./App.css";

import green1 from "./assets/menu/green 1.png";
import green2 from "./assets/menu/green 2.png";
import green3 from "./assets/menu/green 3.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div className="app-container">
        
        <Header isOpen={isOpen} toggleMenu={toggleMenu} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/whoishe" element={<WhoIsHe />} />
          <Route path="/Sns" element={<Sns />} />
          <Route path="/Album" element={<Album />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <div
          className={`menu-overlay ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        />

        <nav className={`side-menu ${isOpen ? "open" : ""}`}>
          <Link to="/whoishe" className="menu-who" onClick={toggleMenu}>WhoIsHe?</Link>
          <Link to="/Album" className="menu-album" onClick={toggleMenu}>Album</Link>
          <Link to="/Sns" className="menu-sns" onClick={toggleMenu}>SNS</Link>
          <Link to="/Home" className="menu-home" onClick={toggleMenu}>Home</Link>

          <img src={green1} alt="footer decoration" className="green1" />
          <img src={green2} alt="footer decoration" className="green2" />
          <img src={green3} alt="footer decoration" className="green3" />
        </nav>
      </div>
    </Router>
  );
}

export default App;
