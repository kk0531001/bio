import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContextMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setShowMenu(true);
    };

    const handleClick = () => {
      setShowMenu(false);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleQuizClick = () => {
    navigate('/quiz');
    setShowMenu(false);
  };

  return (
    <div 
      className="custom-context-menu"
      style={{
        left: position.x,
        top: position.y,
        display: showMenu ? 'block' : 'none'
      }}
    >
      <div className="custom-context-menu-item" onClick={handleQuizClick}>
        Take Quiz
      </div>
    </div>
  );
};

export default ContextMenu; 