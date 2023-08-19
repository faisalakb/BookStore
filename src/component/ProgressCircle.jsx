import React from 'react';

const ProgressCircle = () => {
  const rotation = (70 / 100) * 360;

  return (
    <div className="circular-progress-bar">
      <div className="circle">
        <div className="mask full">
          <div className="fill" style={{ transform: `rotate(${rotation}deg)` }} />
        </div>
        <div className="mask half">
          <div className="fill" style={{ transform: `rotate(${rotation}deg)` }} />
        </div>
        <div className="inside-circle" />
      </div>
    </div>
  );
};

export default ProgressCircle;
