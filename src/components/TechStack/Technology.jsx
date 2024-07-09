import React from 'react';
import './Technology.css';

const Technology = ({ name, logo }) => {
  return (
    <div className="technology">
      <img src={logo} alt={name} className="technology-logo" />
    </div>
  );
};

export default Technology;
