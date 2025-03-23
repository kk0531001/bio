import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './TopicTimeline.css';

const topics = [
  {
    title: "Conservation\nManagement",
    path: "/conservation-management",
    image: "cc5.jpeg"
  },
  {
    title: "Forest\nConservation",
    path: "/forest-conservation",
    image: "cc12.jpeg"
  },
  {
    title: "Fish\nConservation",
    path: "/fish-conservation",
    image: "cc14.jpeg"
  },
  {
    title: "Endangered\nSpecies",
    path: "/endangered-species",
    image: "cc1.jpg"
  },
  {
    title: "Conservation\nMethods",
    path: "/conservation-methods",
    image: "cc6.jpeg"
  },
  {
    title: "Conservation\nReasons",
    path: "/conservation-reasons",
    image: "cc18.jpg"
  },
  {
    title: "Reproduction\nTechnology",
    path: "/reproduction-tech",
    image: "cc25.jpg"
  },
  {
    title: "Genetic\nVariation",
    path: "/genetic-variation",
    image: "cc24.jpeg"
  }
];

const TopicTimeline = () => {
  const timelineRef = useRef(null);

  const scroll = (direction) => {
    if (timelineRef.current) {
      const scrollAmount = 550;
      const newScrollLeft = timelineRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      timelineRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="timeline-container">
      <h2 className="section-title">EXPLORE TOPICS</h2>
      <button className="timeline-nav prev" onClick={() => scroll('left')}>
        ←
      </button>
      <div className="timeline" ref={timelineRef}>
        {topics.map((topic, index) => (
          <Link 
            to={topic.path}
            key={index}
            className="timeline-item"
          >
            <div 
              className="item-background"
              style={{ backgroundImage: `url(${topic.image})` }}
            />
            <div className="topic-preview">
              <h3>{topic.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      <button className="timeline-nav next" onClick={() => scroll('right')}>
        →
      </button>
    </div>
  );
};

export default TopicTimeline; 