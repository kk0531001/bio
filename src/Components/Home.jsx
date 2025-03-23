import React, { useState, useEffect } from "react";
import "../styles.css"; // Ensure this is the correct path
import "./PageStyles.css"
import ScrollVideo from "./ScrollVideo";
import TopicTimeline from "./TopicTimeline";

const Home = () => {
  const fullText = "Human Influences on Ecosystems: Conservation";
  const typingSpeed = 100; // Adjust speed as needed
  const [text, setText] = useState("");

  useEffect(() => {
    // Apply the specific class for the home page
    document.body.classList.add("home");

    let index = 0;
    let currentText = ""; // Maintain a local variable for correct updates

    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index]; // Append the new character
        setText(currentText); // Update state with the correct full string
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
      // Remove the class when component unmounts (prevents interference on other pages)
      document.body.classList.remove("home");
    };
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1 className="typing-text">{text}</h1>
      </section>
      
      <section className="video-section">
        <ScrollVideo />
      </section>
      
      <section className="topics-section">
        <TopicTimeline />
      </section>
    </div>
  );
};

export default Home;