import React from 'react';

const Hero = ({ reportsCount }) => {
  return (
    <div className="bg-green-gradient text-white py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3">Map It. Report It. Clean It.</h1>
            <p className="lead fs-4 mb-4">
              Help sanitize our communities. Report public overflowing bins, illegal garbage dumps, or hazardous environmental hazards directly to Municipal Services and clean up your neighborhoods today.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#report-issue" className="btn btn-amber btn-lg px-4 py-2">Report a Waste Issue</a>
              <a href="#waste-map" className="btn btn-outline-light btn-lg px-4 py-2">View Waste Map</a>
            </div>
          </div>
          
          <div className="col-lg-5">
            <div className="card text-dark p-4 shadow-lg border-0 bg-white bg-opacity-95">
              <h4 className="fw-bold text-green mb-3">Community Tracker</h4>
              <p className="text-muted mb-4">Real-time indicators showing how citizens are cleaning and managing local public locations.</p>
              
              <div className="row g-3 text-center">
                <div className="col-6">
                  <div className="p-3 border rounded bg-light">
                    <h2 className="fw-bold text-green mb-0">{reportsCount}</h2>
                    <span className="small text-muted">Total Reports</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 border rounded bg-light">
                    <h2 className="fw-bold text-success mb-0">87</h2>
                    <span className="small text-muted">Hotspots Resolved</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 border rounded bg-light">
                    <h2 className="fw-bold text-warning mb-0">142</h2>
                    <span className="small text-muted">Clean-up Events</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 border rounded bg-light">
                    <h2 className="fw-bold text-info mb-0">5,200</h2>
                    <span className="small text-muted">Eco Citizens</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;