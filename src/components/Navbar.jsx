import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";
import "./Navbar.css";

export function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);
useEffect(() => {
    showButton();
  }, []);


  function changeClick() {
    setClicked(!clicked);
  }
  function closeMobileMenu() {
    setClicked(false);
  }
  function showButton() {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

    window.addEventListener("resize", showButton);

   

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Trvl <i className="fas fa-star"></i>
          </Link>
          <div className="menu-icon" onClick={changeClick}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle = "btn--outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}
