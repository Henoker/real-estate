// Selectors.js
import React from 'react';

const Selectors = ({ selectedTab, onSelectTab }) => {
  const selectors = [
    { id: 1, label: 'Picture' },
    { id: 2, label: 'Location' },
    { id: 3, label: 'Video' },
  ];

  return (
    <ul className="selectors_wrapper">
      {selectors.map(selector => (
        <li
          key={selector.id}
          className={`selector ${selector.id === selectedTab ? 'active' : ''}`}
          data-selector={selector.id}
          onClick={() => onSelectTab(selector.id)}
        >
          {selector.label}
        </li>
      ))}
    </ul>
  );
};

export default Selectors;
