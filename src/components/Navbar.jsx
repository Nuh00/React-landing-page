import { Link } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Trvl <i className="fas fa-moon"></i>
          </Link>
          <div className="menu-icon" onClick={} >
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
