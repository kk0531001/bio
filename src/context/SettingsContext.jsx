import React, { createContext, useState, useContext, useEffect } from 'react';

const SettingsContext = createContext();

export const useSettings = () => {
  return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }) => {
  // Load settings from localStorage or use defaults
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('fontSize') || 'medium';
  });
  
  const [backgroundSound, setBackgroundSound] = useState(() => {
    return localStorage.getItem('backgroundSound') === 'true';
  });

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('backgroundSound', backgroundSound);

    // Apply theme to body
    document.body.className = theme;
    
    // Apply font size using data attribute
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [theme, fontSize, backgroundSound]);

  const value = {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    backgroundSound,
    setBackgroundSound
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}; 