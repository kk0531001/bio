import React from "react";
import TypedPage from "./TypedPage";

const FishConservationContent = () => {
  return (
    <div className="content-wrapper">
      <h2>Methods for Conservation of Fish Stocks</h2>
      <ul>
        <li>
          <div className="species-container">
            <strong>International Fishing Quotas</strong>
            <p>The European Union's Common Fisheries Policy establishes strict catch limits and monitoring systems to prevent overfishing and ensure sustainable fish populations in European waters.</p>
            <img src="cc14.jpeg" className="endangered-image" alt="Fishing Quotas" />
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Seasonal Protection Periods</strong>
            <p>Implementation of fishing bans during crucial breeding seasons, such as India's monsoon fishing ban, allowing marine populations to reproduce and maintain healthy numbers.</p>
            <img src="cc15.jpeg" className="endangered-image" alt="Seasonal Fishing Ban" />
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Equipment Regulations</strong>
            <p>Strict control of fishing gear and methods, including specific net mesh sizes regulated by the Magnuson-Stevens Act, protecting juvenile fish and preventing unnecessary marine habitat destruction.</p>
            <img src="cc16.jpeg" className="endangered-image" alt="Mesh Size Regulations" />
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Fisher Education Programs</strong>
            <p>Comprehensive training programs by organizations like the FAO, teaching sustainable fishing practices to small-scale fishermen and promoting long-term marine conservation.</p>
            <img src="cc17.jpeg" className="endangered-image" alt="Fishing Education Programs" />
          </div>
        </li>
      </ul>
    </div>
  );
};

const FishConservation = () => {
  return (
    <TypedPage
      title="Fish Conservation"
      className="fish-conservation"
    >
      <FishConservationContent />
    </TypedPage>
  );
};

export default FishConservation;