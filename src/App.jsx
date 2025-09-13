import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect, useRef } from "react"; // 1. useRef를 import에 추가합니다.

import Home from "./pages/Home";
import WhoIsHe from "./pages/WhoIsHe";
import Sns from "./pages/Sns";
import Album from "./pages/Album";
import Header from "./components/Header";
import "./App.css";

import green1 from "./assets/menu/green 1.png";
import green2 from "./assets/menu/green 2.png";
import green3 from "./assets/menu/green 3.png";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // 2. 스크롤이 발생하는 div를 가리킬 '이름표'를 만듭니다.
  const scrollWrapperRef = useRef(null);

  const { pathname } = useLocation();
  useEffect(() => {
    // 3. '이름표'가 붙은 div가 있으면, 그 div의 스크롤을 직접 0으로 만듭니다.
    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <div className="app-container">
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* 4. 스크롤이 발생하는 바로 그 div에 이름표(ref)를 붙여줍니다. */}
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
