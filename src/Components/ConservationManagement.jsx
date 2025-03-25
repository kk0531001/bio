import React from "react";
import TypedPage from "./TypedPage";

const ConservationManagementContent = () => {
  return (
    <div className="content-wrapper">
      <h2>Can we manage Resources Efficiently?</h2>
      <p>Resources like wood logs and fish stocks can be sustainable if they are conserved and managed efficiently.</p>

      <h2>Common Methods</h2>
      <ul>
        <li>
          <div className="species-container">
            <strong>Monitoring and protecting species and habitats</strong>
            <p>Using technology like GPS tracking and camera traps to monitor endangered species. Establishing protected areas like national parks and wildlife reserves.</p>
            <img src="/public/cc5.jpeg" className="endangered-image" alt="GPS tracking for rhinos" />
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Education</strong>
            <p>Raising awareness about conservation through schools, campaigns, and eco-tourism to encourage sustainable practices.</p>
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Captive breeding programs</strong>
            <p>Breeding endangered species in controlled environments such as zoos and wildlife reserves to increase their population and reintroduce them into the wild.</p>
            <img src="cc6.jpeg" className="endangered-image" alt="California condor captive breeding" />
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Seed banks</strong>
            <p>Storing seeds from endangered plant species to preserve genetic diversity and restore habitats in the future.</p>
            <img src="cc7.jpg" className="endangered-image" alt="Svalbard Global Seed Vault" />
          </div>
        </li>
      </ul>
    </div>
  );
};

const ConservationManagement = () => {
  return (
    <TypedPage
      title="Conservation Management"
      className="conservation-mgmt"
    >
      <ConservationManagementContent />
    </TypedPage>
  );
};

export default ConservationManagement;
