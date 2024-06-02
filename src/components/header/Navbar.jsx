import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
          <section>
      <header>
        <div className="navbar">
          <div className="navTitle">
            <span className="alphaColor">M</span>ohammad
            <span className="alphaColor"> W</span>azahat
          </div>
          <div className="navLinks">
            <ul>
              <li className="navlink">
                <a href="/index.html" className="clickLink">Home</a>
              </li>
              <li className="navlink">
                <a href="/index.html" className="clickLink">My Resume</a>
              </li>
              <li className="navlink">
                <a href="/index.html" className="clickLink">My Projects</a>
              </li>
              <li className="navlink">
                <a href="/index.html" className="clickLink">About Me</a>
              </li>
              <li className="navlink">
                <a href="/index.html" className="clickLink">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="horizonLineBox"><hr className="horizon" /></div>
      </header>
    </section>
    </div>
  )
}

export default Navbar
