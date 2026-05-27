import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-green sticky-top py-3 shadow">
      <div className="container">
        
        {/* Brand Logo */}
        <a 
          className="navbar-brand fw-bold d-flex align-items-center" 
          href="/"
        >
          <span className="me-2" style={{ fontSize: '1.4rem' }}>
            🌿
          </span>
          CityClean
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#cityCleanNavbar"
          aria-controls="cityCleanNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="cityCleanNavbar">
          <ul className="navbar-nav ms-auto align-items-center mb-2 mb-lg-0">

            <li className="nav-item mx-2">
              <a className="nav-link text-white fw-medium" href="/">
                Home
              </a>
            </li>

            <li className="nav-item mx-2">
              <a 
                className="nav-link text-white fw-medium" 
                href="#waste-map"
              >
                Waste Map
              </a>
            </li>

            <li className="nav-item mx-2">
              <a 
                className="nav-link text-white fw-medium" 
                href="#report-issue"
              >
                Report Issue
              </a>
            </li>

            <li className="nav-item mx-2">
              <a 
                className="nav-link text-white fw-medium" 
                href="#recycle-guide"
              >
                Recycle Guide
              </a>
            </li>

            <li className="nav-item mx-2">
              <a 
                className="nav-link text-white fw-medium" 
                href="#events"
              >
                Events
              </a>
            </li>

            <li className="nav-item mx-2">
              <a 
                className="nav-link text-white fw-medium" 
                href="#dashboard"
              >
                Dashboard
              </a>
            </li>

            <li className="nav-item ms-lg-3">
              <a 
                className="btn btn-amber rounded-pill px-4" 
                href="#report-issue"
              >
                Report Waste Now
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;