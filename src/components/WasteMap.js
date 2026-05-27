import React, { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

const WasteMap = ({ reports }) => {
  const [filter, setFilter] = useState('All');

  // Center coordinate focused on Bhimavaram, Andhra Pradesh (16.5449, 81.5212)
  const mapCenter = [16.5449, 81.5212];

  // Helper method to determine the color scheme of reports based on status or severity
  const getMarkerColor = (report) => {
    if (report.status === 'Resolved') return '#28A745'; // Green for resolved issues
    switch (report.severity) {
      case 'Critical': return '#DC3545'; // Red
      case 'High': return '#FD7E14';     // Orange
      case 'Medium': return '#F59E0B';   // Yellow-amber
      case 'Low': return '#0D6EFD';      // Blue
      default: return '#6C757D';         // Slate gray
    }
  };

  // Filter application log
  const filteredReports = reports.filter(report => {
    if (filter === 'All') return true;
    if (filter === 'Resolved') return report.status === 'Resolved';
    return report.severity === filter && report.status !== 'Resolved';
  });

  return (
    <div className="row">
      <div className="col-12 mb-3 text-center">
        <div className="btn-group shadow-sm" role="group" aria-label="Map filters">
          {['All', 'Critical', 'High', 'Medium', 'Resolved'].map((type) => (
            <button
              key={type}
              type="button"
              className={`btn btn-sm px-3 ${filter === type ? 'btn-green' : 'btn-outline-secondary'}`}
              onClick={() => setFilter(type)}
            >
              {type} {type !== 'All' && type !== 'Resolved' ? 'Severity' : ''}
            </button>
          ))}
        </div>
      </div>

      <div className="col-lg-9 position-relative">
        <div className="map-outer-card shadow-sm border mb-4">
          <MapContainer 
            center={mapCenter} 
            zoom={14} 
            style={{ height: '480px', width: '100%', zIndex: 1 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredReports.map((report) => (
              <CircleMarker
                key={report._id}
                center={[report.lat, report.lng]}
                radius={12}
                fillColor={getMarkerColor(report)}
                color="#ffffff"
                weight={2}
                fillOpacity={0.85}
              >
                <Popup>
                  <div className="p-1">
                    <h6 className="fw-bold text-green mb-1">{report.issueType}</h6>
                    <p className="mb-1 small"><strong>Reporter:</strong> {report.name}</p>
                    <p className="mb-1 small"><strong>Location:</strong> {report.location}</p>
                    <p className="mb-1 small">
                      <strong>Severity:</strong>{' '}
                      <span className={`badge ${
                        report.severity === 'Critical' ? 'bg-danger' : 
                        report.severity === 'High' ? 'bg-warning text-dark' : 'bg-info'
                      }`}>
                        {report.severity}
                      </span>
                    </p>
                    <p className="mb-1 small">
                      <strong>Status:</strong>{' '}
                      <span className={`badge ${report.status === 'Resolved' ? 'bg-success' : 'bg-secondary'}`}>
                        {report.status}
                      </span>
                    </p>
                    {report.description && (
                      <p className="mt-2 mb-0 small text-muted border-top pt-1">
                        "{report.description}"
                      </p>
                    )}
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="card legend-card p-3 border mb-4 bg-white h-100">
          <h5 className="fw-bold mb-3 text-green">Map Key Legend</h5>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center">
              <span className="d-inline-block rounded-circle me-3" style={{ width: '20px', height: '20px', backgroundColor: '#DC3545' }}></span>
              <div>
                <span className="fw-bold d-block small">Critical Severity</span>
                <span className="text-muted small">Immediate safety threat</span>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span className="d-inline-block rounded-circle me-3" style={{ width: '20px', height: '20px', backgroundColor: '#FD7E14' }}></span>
              <div>
                <span className="fw-bold d-block small">High Severity</span>
                <span className="text-muted small">Large accumulations of dump</span>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span className="d-inline-block rounded-circle me-3" style={{ width: '20px', height: '20px', backgroundColor: '#F59E0B' }}></span>
              <div>
                <span className="fw-bold d-block small">Medium Severity</span>
                <span className="text-muted small">Standard trash bins overflowing</span>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span className="d-inline-block rounded-circle me-3" style={{ width: '20px', height: '20px', backgroundColor: '#0D6EFD' }}></span>
              <div>
                <span className="fw-bold d-block small">Low Severity</span>
                <span className="text-muted small">Minor trash debris</span>
              </div>
            </div>
            <div className="d-flex align-items-center border-top pt-2">
              <span className="d-inline-block rounded-circle me-3" style={{ width: '20px', height: '20px', backgroundColor: '#28A745' }}></span>
              <div>
                <span className="fw-bold d-block small text-success">Resolved Issue</span>
                <span className="text-muted small">Cleaned & verified by locals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteMap;