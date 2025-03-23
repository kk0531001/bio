import React, { useState, useEffect } from 'react';
import TypeWriter from './TypeWriter';

const SectionPage = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [titleComplete, setTitleComplete] = useState(false);

  const handleScroll = (event) => {
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
      setTitleComplete(false);
    } else if (event.deltaY < 0 && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
      setTitleComplete(false);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection]);

  return (
    <div className="section-page">
      <div className="section-content" key={currentSection}>
        <h2>
          <TypeWriter 
            text={sections[currentSection].title} 
            speed={70} 
            onComplete={() => setTitleComplete(true)} 
          />
        </h2>
        <div className={`content-fade ${titleComplete ? 'visible' : ''}`}>
          {sections[currentSection].content}
        </div>
      </div>
      <div className="section-dots">
        {sections.map((_, index) => (
          <div 
            key={index}
            className={`dot ${index === currentSection ? 'active' : ''}`}
            onClick={() => {
              setCurrentSection(index);
              setTitleComplete(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionPage; 