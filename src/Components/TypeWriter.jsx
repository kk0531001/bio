import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text, speed = 100, onComplete = () => {} }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    let currentText = '';

    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        setDisplayText(currentText);
        index++;
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return <span className="typing-text">{displayText}</span>;
};

export default TypeWriter; 