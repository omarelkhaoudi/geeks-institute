import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../redux/ageSlice';

const AgeControls = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.age);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button
        onClick={() => dispatch(ageUpAsync())}
        disabled={loading}
        style={{
          padding: '10px 20px',
          marginRight: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Age Up
      </button>
      <button
        onClick={() => dispatch(ageDownAsync())}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Age Down
      </button>
    </div>
  );
};

export default AgeControls;
