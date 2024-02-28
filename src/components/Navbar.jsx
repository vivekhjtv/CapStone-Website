import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav_style fixed-top">
      <Link to="/" className="navbar-brand thunder">
        Thunder Devs
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <ScrollLink
              style={{
                fontSize: '22px',
                color: '#ffe900',
                fontFamily: 'Patrick Hand',
              }}
              className="nav-link"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              Home
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              style={{
                fontSize: '22px',
                color: '#ffe900',
                fontFamily: 'Patrick Hand',
              }}
              className="nav-link"
              to="team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              Team
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              style={{
                fontSize: '22px',
                color: '#ffe900',
                fontFamily: 'Patrick Hand',
              }}
              className="nav-link"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              style={{
                fontSize: '22px',
                color: '#ffe900',
                fontFamily: 'Patrick Hand',
              }}
              className="nav-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
    // ... (copy your navbar JSX here)
  );
};

export default Navbar;
