import React, { useState, useEffect } from 'react';

const Dashboard = ({ reports }) => {
  const [counts, setCounts] = useState({ reports: 0, waste: 0, citizens: 0 });

  useEffect(() => {
    // Simple "animation" effect for numbers
    setCounts({
      reports: reports.length,
      waste: 38,
      citizens: 5200
    });
  }, [reports]);

  const stats = [
    { label: "Total Reports", value: counts.reports, color: "primary" },
    { label: "Hotspots Resolved", value: 87, color: "success" },
    { label: "Clean-Up Events", value: 142, color: "warning" },
    { label: "Active Citizens", value: counts.citizens, color: "info" },
    { label: "Waste Collected (Tons)", value: 38, color: "danger" },
    { label: "Partner Councils", value: 12, color: "dark" }
  ];

  return (
    <section className="section-padding container">
      <h2 className="text-center fw-bold mb-2">Our Community Impact</h2>
      <p className="text-center text-muted mb-5">Real-time data on our journey to a cleaner city.</p>
      
      <div className="row g-4 mb-5">
        {stats.map((s, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-2">
            <div className="card text-center p-3 shadow-sm border-0 h-100">
              <h3 className={`fw-bold text-${s.color}`}>{s.value}</h3>
              <p className="small text-muted mb-0">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <h4 className="fw-bold mb-4">🌿 Environmental Impact</h4>
          <ul className="list-unstyled">
            <li className="mb-3">✅ Reduced landfill waste by 22% through active reporting.</li>
            <li className="mb-3">✅ Prevented 15 tons of plastic from entering local waterways.</li>
            <li className="mb-3">✅ Successfully identified 45 illegal dumping zones for permanent closure.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold mb-4">👥 Community Impact</h4>
          <ul className="list-unstyled">
            <li className="mb-3">✅ 95% citizen satisfaction in waste collection efficiency.</li>
            <li className="mb-3">✅ Average response time to reports decreased from 7 days to 48 hours.</li>
            <li className="mb-3">✅ Over 5,000 households now practice source segregation.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;