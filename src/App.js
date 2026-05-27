import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WasteMap from './components/WasteMap';
import ReportForm from './components/ReportForm';
import RecycleGuide from './components/RecycleGuide';
import Events from './components/Events';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all reports from our backend API on page load
  const fetchReports = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/reports`)
      setReports(response.data);
    } catch (error) {
      console.error('Error fetching reports from API:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div>
      <Navbar />
      
      <Hero reportsCount={reports.length} />
      
      <section id="waste-map" className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-green">Community Waste Hotspots</h2>
            <p className="text-muted">Use the map filter buttons below to view reports based on severity or resolution status.</p>
          </div>
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading system data...</span>
              </div>
            </div>
          ) : (
            <WasteMap reports={reports} />
          )}
        </div>
      </section>

      <section id="report-issue" className="py-5 bg-light">
        <div className="container">
          <ReportForm reports={reports} setReports={setReports} />
        </div>
      </section>

      <section id="recycle-guide" className="py-5">
        <div className="container">
          <RecycleGuide />
        </div>
      </section>

      <section id="events" className="py-5 bg-light">
        <div className="container">
          <Events />
        </div>
      </section>

      <section id="dashboard" className="py-5">
        <div className="container">
          <Dashboard reports={reports} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;