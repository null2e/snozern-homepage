import menuIcon1 from "../assets/menubar1.png";
import menuIcon2 from "../assets/menubar2.png";
import "./Header.css";

export default function Header({ isOpen, toggleMenu }) {
  return (
    <>
      <header className="header">
        <h1 className="brand-title">THIS SHIT HITS</h1>
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
    </>
  );
}

