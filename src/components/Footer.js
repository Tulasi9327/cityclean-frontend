import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h4 className="fw-bold mb-3">🌿 CityClean</h4>
            <p className="text-muted">Small actions from citizens lead to cleaner, greener cities. Map waste, report issues, and help our community thrive.</p>
          </div>
          <div className="col-6 col-lg-2 ms-auto">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled text-muted small">
              <li><a href="#" className="text-decoration-none text-muted">Waste Map</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Report Issue</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Recycle Guide</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled text-muted small">
              <li><a href="#" className="text-decoration-none text-muted">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Terms of Use</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Admin Login</a></li>
            </ul>
          </div>
          <div className="col-lg-3 text-lg-end">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="text-muted small">support@cityclean.org<br/>Bhimavaram, Andhra Pradesh</p>
          </div>
        </div>
        <hr className="mt-4 mb-3 border-secondary" />
        <div className="text-center text-muted small">
          <p>© 2025 CityClean | 1M1B Green Internship Capstone Project</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;