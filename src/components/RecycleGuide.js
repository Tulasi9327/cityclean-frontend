import React, { useState } from 'react';

const tabs = ['What to Recycle', 'Segregation Guide', 'Recycling Centers'];

const items = [
  { icon: '📄', title: 'Paper', yes: 'Newspapers, cardboard', no: 'Wet/oily paper' },
  { icon: '🧴', title: 'Plastic', yes: 'Bottles, containers', no: 'Plastic bags' },
  { icon: '🍶', title: 'Glass', yes: 'Bottles, jars', no: 'Broken glass' },
  { icon: '🔩', title: 'Metal', yes: 'Cans, tins', no: 'Painted metal' },
  { icon: '💻', title: 'E-Waste', yes: 'Old phones, wires', no: 'Batteries alone' },
  { icon: '🥕', title: 'Organic', yes: 'Food scraps, leaves', no: 'Meat/dairy' },
];

const centers = [
  { name: 'Green Earth Recyclers', address: 'Bhimavaram, AP', timing: '8AM-6PM', materials: 'Paper, Plastic, Metal' },
  { name: 'EcoPoint Center', address: 'Tanuku, AP', timing: '9AM-5PM', materials: 'Glass, E-Waste' },
  { name: 'CleanCity Hub', address: 'Eluru, AP', timing: '8AM-7PM', materials: 'All Types' },
  { name: 'WasteWise', address: 'Narsapur, AP', timing: '10AM-4PM', materials: 'Organic, Paper' },
  { name: 'RecyclePro', address: 'Palakol, AP', timing: '9AM-6PM', materials: 'Plastic, Metal' },
];

const RecycleGuide = () => {
  const [tab, setTab] = useState(0);

  return (
    <section id="recycle" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{ color: '#1A6B47' }}>
          Recycle Right
        </h2>

        {/* Tab Buttons */}
        <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
          {tabs.map((t, i) => (
            <button
              key={i}
              className={`btn fw-bold ${tab === i ? 'btn-success' : 'btn-outline-success'}`}
              onClick={() => setTab(i)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab 1 - What to Recycle */}
        {tab === 0 && (
          <div className="row g-3">
            {items.map((item, i) => (
              <div key={i} className="col-md-4 col-6">
                <div className="card h-100 shadow-sm p-3 text-center">
                  <div style={{ fontSize: '2rem' }}>{item.icon}</div>
                  <h5 className="fw-bold mt-2">{item.title}</h5>
                  <p className="text-success small">✅ {item.yes}</p>
                  <p className="text-danger small">❌ {item.no}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2 - Segregation Guide */}
        {tab === 1 && (
          <div className="row g-3 text-center">
            {[
              { emoji: '🟢', name: 'Green Bin', desc: 'Wet & Food Waste', tip: 'Vegetable peels, leftover food, leaves' },
              { emoji: '🔵', name: 'Blue Bin', desc: 'Dry & Recyclables', tip: 'Paper, plastic bottles, cardboard' },
              { emoji: '🔴', name: 'Red Bin', desc: 'Hazardous Waste', tip: 'Medicines, chemicals, paint' },
              { emoji: '⚫', name: 'Black Bin', desc: 'E-Waste', tip: 'Old phones, wires, batteries' },
            ].map((bin, i) => (
              <div key={i} className="col-md-3 col-6">
                <div className="card p-3 shadow-sm h-100">
                  <div style={{ fontSize: '2.5rem' }}>{bin.emoji}</div>
                  <h5 className="fw-bold mt-2">{bin.name}</h5>
                  <p className="fw-bold text-muted small">{bin.desc}</p>
                  <p className="small">{bin.tip}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3 - Recycling Centers */}
        {tab === 2 && (
          <div className="row g-3">
            {centers.map((c, i) => (
              <div key={i} className="col-md-6">
                <div className="card shadow-sm p-3 h-100">
                  <h5 className="fw-bold">♻️ {c.name}</h5>
                  <p className="mb-1">📍 {c.address}</p>
                  <p className="mb-1">🕐 {c.timing}</p>
                  <p className="mb-2">✅ Accepts: {c.materials}</p>
                  
                    href={`https://www.google.com/maps/search/${encodeURIComponent(c.name + ' ' + c.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-success"
                  >
                    📍 View on Google Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecycleGuide;