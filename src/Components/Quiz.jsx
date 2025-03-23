import React, { useState } from 'react';
import TypedPage from "./TypedPage";
import useSound from 'use-sound';
import Confetti from 'react-confetti';
import './Quiz.css';

const questions = [
  {
    topic: "Endangered Species",
    question: "What is one of the main threats to endangered species?",
    options: [
      "Increased population growth",
      "Habitat destruction",
      "Natural selection",
      "Climate stability"
    ],
    correctAnswer: 1,
    explanation: "Habitat destruction is one of the primary threats to endangered species, as it removes their natural living spaces and resources."
  },
  {
    topic: "Forest Conservation",
    question: "What is a key method for forest conservation?",
    options: [
      "Unlimited logging",
      "Government licensing control",
      "Ignoring illegal logging",
      "Removing protected areas"
    ],
    correctAnswer: 1,
    explanation: "Government licensing control helps regulate logging and protect forests through legal frameworks."
  },
  {
    topic: "Fish Conservation",
    question: "Which conservation method helps protect fish populations?",
    options: [
      "Year-round fishing",
      "Unregulated fishing gear",
      "Seasonal protection periods",
      "Removing quotas"
    ],
    correctAnswer: 2,
    explanation: "Seasonal protection periods allow fish populations to reproduce and maintain healthy numbers."
  },
  {
    topic: "Genetic Variation",
    question: "What happens when genetic diversity is reduced?",
    options: [
      "Increased disease resistance",
      "Better adaptation to changes",
      "Higher reproductive success",
      "Inbreeding depression"
    ],
    correctAnswer: 3,
    explanation: "Reduced genetic diversity often leads to inbreeding depression, causing harmful genetic traits to become more common."
  },
  {
    topic: "Reproduction Technology",
    question: "Which technology helps preserve endangered species?",
    options: [
      "Natural breeding only",
      "Random mating",
      "Artificial Insemination",
      "Avoiding intervention"
    ],
    correctAnswer: 2,
    explanation: "Artificial Insemination is a crucial technology that helps breed endangered species when natural mating is impossible."
  },
  {
    topic: "Sustainable Resources",
    question: "Which of these is a sustainable resource?",
    options: [
      "Coal",
      "Solar energy",
      "Oil",
      "Natural gas"
    ],
    correctAnswer: 1,
    explanation: "Solar energy is a sustainable resource as it's renewable and doesn't deplete natural resources."
  },
  {
    topic: "Conservation Management",
    question: "What is an effective conservation management strategy?",
    options: [
      "Ignoring wildlife",
      "Monitoring species",
      "Removing protection",
      "Avoiding technology"
    ],
    correctAnswer: 1,
    explanation: "Monitoring species and their habitats is crucial for effective conservation management."
  },
  {
    topic: "Conservation Reasons",
    question: "Why is conservation important for medicine?",
    options: [
      "It has no medical value",
      "It only affects animals",
      "Many medicines come from nature",
      "It reduces medical research"
    ],
    correctAnswer: 2,
    explanation: "Many life-saving medicines come from natural sources, making biodiversity conservation crucial for medical advances."
  }
];

const QuizContent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const [playCorrect] = useSound('/sounds/correct.mp3', {
    volume: 0.5,
    onplayerror: () => {
      console.error('Failed to play correct sound');
    }
  });
  const [playWrong] = useSound('/sounds/wrong.mp3', {
    volume: 0.5,
    onplayerror: () => {
      console.error('Failed to play wrong sound');
    }
  });

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswer(optionIndex);
    setShowFeedback(true);
    const correct = optionIndex === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      playCorrect();
      setShowConfetti(true);
      setScore(score + 1);
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      playWrong();
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowScore(false);
    setShowFeedback(false);
  };

  if (showScore) {
    return (
      <div className="quiz-container">
        <h2>Quiz Complete!</h2>
        <p className="score-text">Your Score: {score} out of {questions.length}</p>
        <button className="quiz-button" onClick={resetQuiz}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {showConfetti && <Confetti />}
      <div className="topic-label">Topic: {questions[currentQuestion].topic}</div>
      <div className="question-section">
        <h2>Question {currentQuestion + 1} of {questions.length}</h2>
        <p className="question-text">{questions[currentQuestion].question}</p>
      </div>

      <div className="answer-section">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`answer-button ${selectedAnswer === index ? 
              (index === questions[currentQuestion].correctAnswer ? 'correct' : 'incorrect') : ''}`}
            onClick={() => !showFeedback && handleAnswerSelect(index)}
            disabled={showFeedback}
          >
            {option}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
          <p>{questions[currentQuestion].explanation}</p>
        </div>
      )}

      {showFeedback && (
        <button 
          className="next-button"
          onClick={handleNext}
        >
          {currentQuestion === questions.length - 1 ? 'Finish' : 'Next Question'}
        </button>
      )}
    </div>
  );
};

const Quiz = () => {
  return (
    <TypedPage
      title="Test Your Knowledge"
      className="quiz-page"
    >
      <QuizContent />
    </TypedPage>
  );
};

export default Quiz; 