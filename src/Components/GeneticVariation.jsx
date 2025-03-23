import React from "react";
import TypedPage from "./TypedPage";

const GeneticVariationContent = () => {
  return (
    <div className="content-wrapper">
      <h2>The Impact of Reduced Genetic Diversity</h2>

      <ul>
        <li>
          <div className="species-container">
            <strong>Inbreeding Depression</strong>
            <p>When populations become small and isolated, closely related individuals are forced to mate, leading to increased expression of harmful genetic traits and reduced overall fitness of the population.</p>
            <ul>
              <li>Higher rates of genetic disorders</li>
              <li>Decreased reproductive success</li>
              <li>Reduced offspring survival rates</li>
              <li>Weakened immune responses</li>
            </ul>
          </div>
        </li>

        <li>
          <div className="species-container">
            <strong>Reduced Environmental Adaptability</strong>
            <p>Limited genetic diversity severely restricts a species' ability to adapt to environmental changes, making them more vulnerable to extinction in the face of climate change and habitat alterations.</p>
            <img src="/cc26.jpeg" className="endangered-image" alt="Environmental Changes Adaptability" />
            <ul>
              <li>Less resilience to climate changes</li>
              <li>Decreased ability to adapt to new conditions</li>
              <li>Reduced survival in changing habitats</li>
              <li>Limited evolution potential</li>
            </ul>
          </div>
        </li>

        <li>
          <div className="species-container">
            <strong>Disease Vulnerability</strong>
            <p>Low genetic diversity can leave entire populations susceptible to the same diseases, as they lack the genetic variations that might provide resistance to different pathogens.</p>
            <img src="/cc27.jpeg" className="endangered-image" alt="Disease Susceptibility" />
            <ul>
              <li>Increased susceptibility to pathogens</li>
              <li>Rapid disease spread through populations</li>
              <li>Limited natural immunity</li>
              <li>Higher risk of population collapse</li>
            </ul>
          </div>
        </li>

        <li>
          <div className="species-container">
            <strong>Reproductive Challenges</strong>
            <p>Decreased genetic diversity often leads to reproductive complications, creating a dangerous cycle that can accelerate population decline.</p>
            <ul>
              <li>Reduced fertility rates</li>
              <li>Lower birth success rates</li>
              <li>Increased developmental problems</li>
              <li>Compromised reproductive health</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

const GeneticVariation = () => {
  return (
    <TypedPage
      title="Genetic Diversity"
      className="reproduction-genetics"
    >
      <GeneticVariationContent />
    </TypedPage>
  );
};

export default GeneticVariation;