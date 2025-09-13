import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Home from "./pages/Home";
import WhoIsHe from "./pages/WhoIsHe";
import Sns from "./pages/Sns";
import Album from "./pages/Album";
// Header 관련 import는 App.jsx에서 직접 관리합니다.
import Header from "./components/Header";
import menuIcon1 from "./assets/menubar1.png";
import menuIcon2 from "./assets/menubar2.png";
import "./App.css";

import green1 from "./assets/menu/green 1.png";
import green2 from "./assets/menu/green 2.png";
import green3 from "./assets/menu/green 3.png";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const scrollWrapperRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <div className="app-container">
      {/* 1. Header는 이제 배경과 타이틀 역할만 합니다. */}
      <Header />

      {/* 2. 메뉴 아이콘을 App.jsx에서 직접 렌더링합니다. */}
      <div className="menu-icon-wrap" onClick={toggleMenu}>
        <img
          src={menuIcon1}
          alt="menu"
          className={`menu-icon ${isOpen ? "hidden" : "visible"}`}
        />
        <img
          src={menuIcon2}
          alt="close"
          className={`menu-icon ${isOpen ? "visible" : "hidden"}`}
        />
      </div>

      <div className="page-content-wrapper" ref={scrollWrapperRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/whoishe" element={<WhoIsHe />} />
          <Route path="/Sns" element={<Sns />} />
          <Route path="/Album" element={<Album />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <div
        className={`menu-overlay ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      />

      <nav className={`side-menu ${isOpen ? "open" : ""}`}>
        <Link to="/whoishe" className="menu-who" onClick={toggleMenu}>
          WhoIsHe?
        </Link>
        <Link to="/Album" className="menu-album" onClick={toggleMenu}>
          Album
        </Link>
        <Link to="/Sns" className="menu-sns" onClick={toggleMenu}>
          SNS
        </Link>
        <Link to="/Home" className="menu-home" onClick={toggleMenu}>
          Home
        </Link>
        <img src={green1} alt="footer decoration" className="green1" />
        <img src={green2} alt="footer decoration" className="green2" />
        <img src={green3} alt="footer decoration" className="green3" />
      </nav>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;

