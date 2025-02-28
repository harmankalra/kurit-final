import { useState, useEffect } from "react"
import "./Header.css"
import Kurit from "../assets/KuritIcon.png"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="mainNavbar">
      <div className="navbar">
        <div className="navbarImg">

          <div className="hamburger" onClick={toggleMenu}>
            <span className={`bar ${isOpen ? "active" : ""}`}></span>
            <span className={`bar ${isOpen ? "active" : ""}`}></span>
            <span className={`bar ${isOpen ? "active" : ""}`}></span>
          </div>

          <div className={`menu-overlay ${isOpen ? "active" : ""}`} onClick={closeMenu}></div>
          <div className={`mobileMenu ${isOpen ? "active" : ""}`}>
            <div className="mobileNavItems">
              <a href="/" style={{ animationDelay: "0.1s" }}>
                <span>Home</span>
              </a>
              <a href="/about" style={{ animationDelay: "0.2s" }}>
                <span>About</span>
              </a>
              <a href="/contact" style={{ animationDelay: "0.3s" }}>
                <span>Contact</span>
              </a>
            </div>
          </div>
          <a href="/">
          <img src={Kurit || "/placeholder.svg"} alt="" />
          </a>
        </div>

        <div className="navbarItems">
          <a href="/"><span>Home</span></a>
          <a href="/about"><span>About</span></a>
          <a href="/contact"><span>Contact</span></a>
        </div>

        <div className="navbarContact">
          <div className="contactUsHeading">
            <p>Contact Us</p>
          </div>
          <div className="navbarContactNumber">
            <p>+91 95177 77992</p>
            <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header