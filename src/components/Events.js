import React, { useState } from 'react';

const EventCard = ({ title, date, location, target }) => {
  const [joined, setJoined] = useState(false);
  const [count, setCount] = useState(Math.floor(Math.random() * 20) + 10);

  return (
    <div className="col-md-6 col-lg-3">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-body">
          <span className="badge bg-amber mb-2" style={{backgroundColor: '#F59E0B'}}>Upcoming Clean-up</span>
          <h5 className="fw-bold">{title}</h5>
          <p className="small text-muted mb-1">📅 {date}</p>
          <p className="small text-muted mb-3">📍 {location}</p>
          <div className="mb-2 small d-flex justify-content-between">
            <span>Volunteers</span>
            <span>{count}/{target}</span>
          </div>
          <div className="progress mb-3" style={{height: '8px'}}>
            <div className="progress-bar bg-success" style={{width: `${(count/target)*100}%`}}></div>
          </div>
          <button 
            className={`btn w-100 fw-bold ${joined ? 'btn-outline-success' : 'btn-success'}`}
            onClick={() => {
              if(!joined) {
                setJoined(true);
                setCount(count + 1);
              }
            }}
          >
            {joined ? '✅ Joined!' : 'Join Event'}
          </button>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <section className="section-padding bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Community Clean-up Events</h2>
        <div className="row g-4">
          <EventCard title="Bhimavaram Canal Drive" date="June 15, 2025" location="Main Canal Road" target={50} />
          <EventCard title="Market Waste Segregation" date="June 22, 2025" location="Old Market Area" target={30} />
          <EventCard title="Beach Cleanup Drive" date="July 05, 2025" location="Perupalem Beach" target={100} />
          <EventCard title="School Green Workshop" date="July 12, 2025" location="Town Hall" target={40} />
        </div>
      </div>
    </section>
  );
};

export default Events;