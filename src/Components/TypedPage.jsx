import React, { useState, useEffect } from "react";
import "./PageStyles.css";

const TypedPage = ({ title, introText, className, children }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < title.length) {
        setDisplayText(title.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [title]);

  return (
    <div className={`full-page-layout ${className}`}>
      <section className="intro-section">
        <div className="center-content">
          <h1 className="typing-text">{displayText}</h1>
          <p className="intro-text">
            {introText}
          </p>
        </div>
      </section>
      
      <section className="content-section">
        {children}
      </section>
    </div>
  );
};

export default TypedPage; 