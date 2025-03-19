import React from 'https://esm.sh/react@18.2.0';

const ProgressBar = ({ value, max = 100, color = '#3498db', height = '15px', label }) => {
  const percentage = (value / max) * 100;

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#e0e0e0',
      borderRadius: '10px',
      overflow: 'hidden',
      height: height,
      marginTop: '10px',
      position: 'relative'
    }}>
      <div style={{
        width: `${percentage}%`,
        height: '100%',
        backgroundColor: color,
        transition: 'width 0.5s ease-in-out'
      }} />
      {label && (
        <span style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          fontWeight: 'bold'
        }}>
          {`${Math.round(percentage)}%`}
        </span>
      )}
    </div>
  );
};

export default ProgressBar;