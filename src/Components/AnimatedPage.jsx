import React, { useState } from 'react';
import TypeWriter from './TypeWriter';
import './PageStyles.css';

const AnimatedPage = ({ title, children, className = '' }) => {
  const [titleComplete, setTitleComplete] = useState(false);

  return (
    <div className={`page-container ${className}`}>
      <div className="content-wrapper">
        <h1>
          <TypeWriter 
            text={title} 
            speed={70} 
            onComplete={() => setTitleComplete(true)} 
          />
        </h1>
        <div className={`content-fade ${titleComplete ? 'visible' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimatedPage; 