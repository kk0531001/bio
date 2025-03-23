import React from 'react';
import { useSettings } from '../context/SettingsContext';
import './Settings.css';

const Settings = () => {
  const {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    backgroundSound,
    setBackgroundSound
  } = useSettings();

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      
      <div className="settings-section">
        <h2>Theme</h2>
        <div className="setting-options">
          <button
            className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
          >
            Light
          </button>
          <button
            className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
          >
            Dark
          </button>
          <button
            className={`theme-btn ${theme === 'high-contrast' ? 'active' : ''}`}
            onClick={() => setTheme('high-contrast')}
          >
            High Contrast
          </button>
        </div>
      </div>

      <div className="settings-section">
        <h2>Font Size</h2>
        <div className="setting-options">
          <button
            className={`font-btn ${fontSize === 'small' ? 'active' : ''}`}
            onClick={() => setFontSize('small')}
          >
            Small
          </button>
          <button
            className={`font-btn ${fontSize === 'medium' ? 'active' : ''}`}
            onClick={() => setFontSize('medium')}
          >
            Medium
          </button>
          <button
            className={`font-btn ${fontSize === 'large' ? 'active' : ''}`}
            onClick={() => setFontSize('large')}
          >
            Large
          </button>
          <button
            className={`font-btn ${fontSize === 'extra-large' ? 'active' : ''}`}
            onClick={() => setFontSize('extra-large')}
          >
            Extra Large
          </button>
        </div>
      </div>

      <div className="settings-section">
        <h2>Background Sounds</h2>
        <div className="sound-toggle">
          <label className="switch">
            <input
              type="checkbox"
              checked={backgroundSound}
              onChange={(e) => setBackgroundSound(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
          <span>Enable nature sounds</span>
        </div>
      </div>
    </div>
  );
};

export default Settings; 