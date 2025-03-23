import React from "react";
import TypedPage from "./TypedPage";

const ConservationReasonsContent = () => {
  return (
    <div className="content-wrapper">
      <h2>Why Is Conservation Important?</h2>

      <ul>
        <li>
          <div className="species-container">
            <strong>Maintaining Biodiversity</strong>
            <p>Conservation efforts help preserve the rich variety of life on Earth, ensuring that diverse species continue to thrive and contribute to healthy, resilient ecosystems that benefit all life forms.</p>
          </div>
        </li>

        <li>
          <div className="species-container">
            <strong>Preventing Species Extinction</strong>
            <p>Through protected areas, breeding programs, and anti-poaching measures, conservation work helps stabilize and increase populations of endangered species threatened by human activities and climate change.</p>
            <img src="cc18.jpg" className="endangered-image" alt="Reducing Extinction" />
          </div>
        </li>

        <li>
          <div className="species-container">
            <strong>Safeguarding Critical Ecosystems</strong>
            <p>Protection of vital habitats like rainforests, coral reefs, and wetlands ensures these complex systems continue to support biodiversity and provide essential environmental services.</p>
            <img src="cc19.jpeg" className="endangered-image" alt="Protecting Valuable Ecosystems" />
          </div>
        </li>

        <li>
          <div className="species-container">
            <strong>Supporting Natural Cycles</strong>
            <p>Healthy ecosystems maintain crucial processes like nutrient cycling, where decomposers, plants, and animals work together to ensure soil fertility and sustain life.</p>
            <img src="cc20.jpeg" className="endangered-image" alt="Nutrient Cycling" />
          </div>
        </li>

        <li>
          <div className="species-container">
            <strong>Securing Food Sources</strong>
            <p>Conservation ensures the continued availability of vital food resources from both terrestrial and marine ecosystems, supporting food security for countless species including humans.</p>
            <img src="cc21.jpeg" className="endangered-image" alt="Food Provision" />
          </div>
        </li>

        <li>
          <div className="species-container">
            <strong>Preserving Medicinal Resources</strong>
            <p>Many life-saving medicines come from natural sources - protecting biodiversity ensures we maintain access to these crucial compounds and potential future medical discoveries.</p>
            <img src="cc22.jpeg" className="endangered-image" alt="Drugs from Biodiversity" />
          </div>
        </li>

        <li>
          <div className="species-container">
            <strong>Sustainable Energy Resources</strong>
            <p>Conservation of forests and other ecosystems provides renewable resources for fuel and energy, offering sustainable alternatives to fossil fuels.</p>
            <img src="cc23.jpeg" className="endangered-image" alt="Fuel Resources" />
          </div>
        </li>

        <li>
          <div className="species-container">
            <strong>Protecting Genetic Diversity</strong>
            <p>Maintaining genetic diversity in wild species provides valuable resources for improving crop resilience, disease resistance, and adaptation to changing conditions.</p>
            <img src="cc24.jpeg" className="endangered-image" alt="Genetic Diversity" />
          </div>
        </li>
      </ul>
    </div>
  );
};

const ConservationReasons = () => {
  return (
    <TypedPage
      title="Why Conserve?"
      className="conservation-reasons"
    >
      <ConservationReasonsContent />
    </TypedPage>
  );
};

export default ConservationReasons;