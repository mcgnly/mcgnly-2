import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `rebeccapurple`
    }}
  >
    <section className="navbar">
      <ul className="navbarLinks">
        <li><a href="#aboutMe" className="about">About Me</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </section>
  </header>
)

export default Header
