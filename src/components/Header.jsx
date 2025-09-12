// src/components/Header.jsx

import menuIcon1 from "../assets/menubar1.png";
import menuIcon2 from "../assets/menubar2.png";
import "./Header.css";

export default function Header({ isOpen, toggleMenu }) {
  return (
    // <header> 태그가 모든 요소를 감싸도록 수정
    <header className="header">
      <h1 className="brand-title">THIS SHIT HITS</h1>

      {/* 메뉴 아이콘을 header 안으로 이동 */}
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
    </header>
  );
}