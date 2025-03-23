import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './TopicTimeline.css';

const topics = [
  {
    title: "Conservation\nManagement",
    path: "/conservation-management",
    image: "/images/conservation-mgmt.jpg"
  },
  {
    title: "Forest\nConservation",
    path: "/forest-conservation",
    image: "/images/forest-conservation.jpg"
  },
  {
    title: "Fish\nConservation",
    path: "/fish-conservation",
    image: "/images/fish-conservation.jpg"
  },
  {
    title: "Endangered\nSpecies",
    path: "/endangered-species",
    image: "/images/endangered-species.jpg"
  },
  {
    title: "Conservation\nMethods",
    path: "/conservation-methods",
    image: "/images/conservation-methods.jpg"
  },
  {
    title: "Conservation\nReasons",
    path: "/conservation-reasons",
    image: "/images/conservation-reasons.jpg"
  },
  {
    title: "Reproduction\nTechnology",
    path: "/reproduction-tech",
    image: "/images/reproduction-tech.jpg"
  },
  {
    title: "Genetic\nVariation",
    path: "/genetic-variation",
    image: "/images/genetic-variation.jpg"
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