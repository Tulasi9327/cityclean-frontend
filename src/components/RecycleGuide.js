import React from 'react';

const RecycleGuide = () => {
  return (
    <section className="section-padding container">
      <h2 className="text-center fw-bold mb-5">Recycling Guide & Segregation</h2>
      <ul className="nav nav-pills justify-content-center mb-4" id="recycleTab" role="tablist">
        <li className="nav-item">
          <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#tab1">What to Recycle</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" data-bs-toggle="pill" data-bs-target="#tab2">How to Segregate</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" data-bs-toggle="pill" data-bs-target="#tab3">Local Centers</button>
        </li>
      </ul>

      <div className="tab-content border p-4 rounded bg-white shadow-sm">
        <div className="tab-pane fade show active" id="tab1">
          <div className="row g-3">
            {['Paper', 'Plastic Bottles', 'Glass Jars', 'Metal Cans', 'E-Waste', 'Cardboard'].map(item => (
              <div key={item} className="col-md-4">
                <div className="card h-100 bg-light p-3 border-start border-success border-4">
                  <h5 className="fw-bold">{item}</h5>
                  <p className="small mb-0 text-muted">Clean and dry before putting in the bin.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tab-pane fade" id="tab2">
          <div className="row g-3">
            <div className="col-md-3">
              <div className="card bg-success text-white p-3 h-100">
                <h5>Green Bin</h5>
                <p className="small">Organic/Wet Waste: Vegetable peels, leftover food, leaves.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-primary text-white p-3 h-100">
                <h5>Blue Bin</h5>
                <p className="small">Dry Waste: Plastic, paper, metal, dry cloth.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-danger text-white p-3 h-100">
                <h5>Red Bin</h5>
                <p className="small">Hazardous: Batteries, chemicals, paint cans.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-dark text-white p-3 h-100">
                <h5>Black Bin</h5>
                <p className="small">Sanitary: Diapers, masks, medical bandages.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tab3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Bhimavaram Municipality Collection Center - Main Road
              <span className="badge bg-primary rounded-pill">Open 9AM-6PM</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Green Earth E-Waste Hub - Gunupudi
              <span className="badge bg-primary rounded-pill">Open 10AM-5PM</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Eco-Paper Recycling Plant - Industrial Estate
              <span className="badge bg-primary rounded-pill">Bulk Only</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecycleGuide;