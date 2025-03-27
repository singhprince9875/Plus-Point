import React from 'react';
import { Link } from 'react-router-dom';

const HealthCheckCompo = ({ name, price }) => {
    const first = name.split('')[0];
  return (
    <Link to={'/HealthCheck/' + first}>
        <div className="card" style={{ width: '18rem', margin: '1rem', border: '1px solid #ddd', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div className="card-body" style={{ padding: '1rem' }}>
        <h5 className="card-title" style={{ marginBottom: '0.5rem' }}>{name}</h5>
        <p className="card-text" style={{ margin: 0 }}>₹{price}</p>
      </div>
    </div>
    </Link>
  );
};

export default HealthCheckCompo;