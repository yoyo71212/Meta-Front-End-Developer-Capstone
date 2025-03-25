import { useState } from "react";
import "../styles/Nav.css";
import "../styles/Header.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
          <button className='menu' type='button' onClick={() => setIsOpen(!isOpen)}>
              <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="65"
                  height="65"
                  fill="#000"
              >
                  <path
                      d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                  />
              </svg>
          </button>
    
          <nav className={ isOpen ? "nav-dropdown" : "nav nav-dropdown-hide" }>
              <ul>
                  <li><a href="/">HOME</a></li>
                  <li><a href="/about">ABOUT</a></li>
                  <li><a href="/menu">MENU</a></li>
                  <li><a href="/reservations">RESERVATIONS</a></li>
                  <li><a href="/order-online">ORDER ONLINE</a></li>
                  <li><a href="/login">LOGIN</a></li>
              </ul>
          </nav>
      </>
    );
}