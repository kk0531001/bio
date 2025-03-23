import React, { useEffect, useRef } from 'react';
import './ScrollVideo.css';

const ScrollVideo = () => {
  const containerRef = useRef(null);

  return (
    <div className="scroll-video-container" ref={containerRef}>
      <div className="scroll-video">
        <img 
          src="/biomes.jpg" 
          alt="Earth's Biomes"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="scroll-content">
        <h2>Conservation</h2>
        <p>Explore Conservation and delve deeper into it</p>
      </div>
    </div>
  );
};

export default ScrollVideo; 