import React from 'react';
import Technology from './Technology';
import './Section.css';

const Section = ({ title, items }) => {
  return (
    <div className="section">
      <h3>{title}</h3>
      <div className="technologies">
        {items.map(item => (
          <Technology key={item.name} name={item.name} logo={item.logo} />
        ))}
      </div>
    </div>
  );
};

export default Section;
