import React, { useEffect, useRef } from 'react';
import { useSettings } from '../context/SettingsContext';

const AudioPlayer = () => {
  const { backgroundSound } = useSettings();
  const audioRef = useRef(null);

  useEffect(() => {
    if (backgroundSound) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [backgroundSound]);

  return (
    <audio
      ref={audioRef}
      src="/nature-sounds.mp3"
      loop
      preload="auto"
      style={{ display: 'none' }}
    />
  );
};

export default AudioPlayer; 