import React from "react";
import TypedPage from "./TypedPage";
import "./PageStyles.css";

const SustainableResourceContent = () => {
  return (
    <div className="content-wrapper">
      <h2>What Are Sustainable Resources?</h2>
      <p>A sustainable resource is a resource that is produced as rapidly as it is removed from the environment, so that it does not run out.</p>

      <h2>Examples:</h2>
      <ul>
        <li>
          <div className="species-container">
            <strong>Wood Pellets</strong>
            <p>A renewable energy source made from compressed sawdust and wood waste, providing a sustainable alternative to fossil fuels for heating and power generation.</p>
            <img src="/cc8.jpeg" className="endangered-image" alt="Wood Pellets" />
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Hydropower</strong>
            <p>Clean energy generated from flowing water, providing a constant and reliable source of renewable electricity without depleting natural resources.</p>
            <img src="/cc9.jpeg" className="endangered-image" alt="Hydropower" />
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Solar Energy</strong>
            <p>Harnessing the sun's unlimited power through photovoltaic panels, creating electricity without emissions or resource depletion.</p>
            <img src="/cc10.jpeg" className="endangered-image" alt="Solar Energy" />
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Wind Power</strong>
            <p>Converting wind's kinetic energy into electricity using turbines, providing clean and renewable power that will never run out.</p>
            <img src="/cc11.jpeg" className="endangered-image" alt="Wind Power" />
          </div>
        </li>
      </ul>
    </div>
  );
};

const SustainableResource = () => {
  return (
    <TypedPage
      title="Sustainable Resources"
      className="sustainable-resources"
    >
      <SustainableResourceContent />
    </TypedPage>
  );
};

export default SustainableResource;