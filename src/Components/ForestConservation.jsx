import React from "react";
import TypedPage from "./TypedPage";

const ForestConservationContent = () => {
  return (
    <div className="content-wrapper">
      <h2>Methods for Conservation of Forests</h2>

      <ul>
        <li>
          <div className="species-container">
            <strong>Government Licensing Control</strong>
            <p>Strict regulation of logging permits and enforcement of protected areas, ensuring only sustainable harvesting practices are allowed in designated zones.</p>
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>International Quotas</strong>
            <p>Countries, organizations, and governments establish agreements to limit deforestation, specifying exact quantities and types of trees that can be harvested from specific areas.</p>
            <img src="/cc12.jpeg" className="endangered-image" alt="Logging Quotas" />
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Community Education Programs</strong>
            <p>Comprehensive training and awareness programs teaching sustainable forestry practices, helping local communities understand the importance of forest preservation.</p>
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Reforestation Initiatives</strong>
            <p>Large-scale tree planting projects to restore damaged forests and create new woodland areas, helping to offset the impact of necessary logging activities.</p>
            <img src="/cc13.jpg" className="endangered-image" alt="Reforestation Efforts" />
          </div>
        </li>
      </ul>
    </div>
  );
};

const ForestConservation = () => {
  return (
    <TypedPage
      title="Forest Conservation"
      className="forest-conservation"
    >
      <ForestConservationContent />
    </TypedPage>
  );
};

export default ForestConservation;