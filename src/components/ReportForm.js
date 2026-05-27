import React, { useState } from 'react';
import axios from 'axios';

const ReportForm = ({ setReports }) => {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    location: '',
    issueType: 'Overflowing Bin',
    severity: 'Medium',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/reports`, {
        ...form,
        lat: 16.5449 + (Math.random() - 0.5) * 0.01,
        lng: 81.5212 + (Math.random() - 0.5) * 0.01
      });
      setReports((prev) => [...prev, res.data]);
      setSuccess(true);
      setForm({
        name: '',
        contact: '',
        location: '',
        issueType: 'Overflowing Bin',
        severity: 'Medium',
        description: ''
      });
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <section id="report" className="py-5" style={{ background: '#F0FDF4' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{ color: '#1A6B47' }}>
          Report a Waste Issue
        </h2>
        <div className="card shadow mx-auto" style={{ maxWidth: '700px' }}>
          <div className="card-body p-4">
            {success && (
              <div className="alert alert-success">
                ✅ Report submitted! Authorities have been notified.
              </div>
            )}
            {error && (
              <div className="alert alert-danger">
                ❌ Something went wrong. Please try again.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Phone / Email"
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-control"
                    placeholder="Location / Area Name"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <select
                    className="form-select"
                    name="issueType"
                    value={form.issueType}
                    onChange={handleChange}
                  >
                    <option>Overflowing Bin</option>
                    <option>Illegal Dump</option>
                    <option>Uncollected Garbage</option>
                    <option>Hazardous Waste</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select
                    className="form-select"
                    name="severity"
                    value={form.severity}
                    onChange={handleChange}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    placeholder="Describe the issue..."
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn w-100 fw-bold"
                    style={{ background: '#1A6B47', color: 'white' }}
                    disabled={loading}
                  >
                    {loading ? '⏳ Submitting...' : 'Submit & Map Report'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportForm;