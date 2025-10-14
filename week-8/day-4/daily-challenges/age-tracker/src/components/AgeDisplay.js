import React from 'react';
import { useSelector } from 'react-redux';

const AgeDisplay = () => {
  const { age, loading } = useSelector((state) => state.age);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>🎂 Age Tracker</h1>
      {loading ? (
        <div>
          <img
            src="https://i.gifer.com/ZZ5H.gif"
            alt="Loading..."
            width="60"
            height="60"
          />
          <p>Updating age...</p>
        </div>
      ) : (
        <h2>Your age: {age}</h2>
      )}
    </div>
  );
};

export default AgeDisplay;
