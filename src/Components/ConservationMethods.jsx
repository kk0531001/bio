import React from "react";
import TypedPage from "./TypedPage";

const ConservationMethodsContent = () => {
  return (
    <div className="content-wrapper">
      <h2>Methods for Conservation</h2>
      <p>In order to conserve resources in a forest, many governments can refuse to grant licenses to companies who want to cut down valuable forests,</p>

      <h2>Common Techniques</h2>
      <ul>
        <li>Quotas are also agreed between countries, organisations and governments in the practice of deforestation, it is only agreed for a certain quantity of trees and the specific type of tree and by limiting them to areas that are not restricted.</li>
        <li>In addition to this education on deforestation of forests can be provided to people who are not literate in these fields.</li>
        <li>Once trees are cut of, plants can be planted to compensate for the loss of trees in the region</li>
      </ul>

      <h2>Examples</h2>
      <ul>
        <li>
          <div className="species-container">
            <strong>Quotas:</strong> The European Union enforces logging quotas through the Forest Law Enforcement, Governance and Trade (FLEGT) action plan to combat illegal logging.
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Education:</strong> The Rainforest Alliance has implemented educational programs in Central and South America to teach sustainable forestry practices.
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Reforestation:</strong> India's Green India Mission aims to reforest degraded lands and increase tree cover across the country.
          </div>
        </li>
      </ul>
    </div>
  );
};

const ConservationMethods = () => {
  return (
    <TypedPage
      title="Conservation Methods"
      className="conservation-methods"
    >
      <ConservationMethodsContent />
    </TypedPage>
  );
};

export default ConservationMethods;