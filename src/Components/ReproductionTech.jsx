import React from "react";
import TypedPage from "./TypedPage";

const ReproductionTechContent = () => {
  return (
    <div className="content-wrapper">
      <h2>Advanced Reproductive Technologies</h2>

      <ul>
        <li>
          <div className="species-container">
            <strong>Artificial Insemination (AI)</strong>
            <p>A sophisticated technique where carefully collected sperm is precisely introduced into a female's reproductive tract, enabling reproduction when natural mating is impossible or impractical.</p>
            <ul>
              <li>Overcomes geographical barriers between potential mates</li>
              <li>Helps breeding when physical limitations exist</li>
              <li>Maximizes the genetic contribution of valuable males</li>
              <li>Reduces stress and risk compared to natural mating</li>
            </ul>
          </div>
        </li>

        <li>
          <div className="species-container">
            <strong>In Vitro Fertilization (IVF)</strong>
            <p>A groundbreaking laboratory procedure where eggs are fertilized outside the body in carefully controlled conditions, then implanted into a female. The term "In Vitro" literally means "in glass," referring to the laboratory equipment used.</p>
            <img src="/cc25.jpg" className="endangered-image" alt="In Vitro Fertilization" />
            <ul>
              <li>Enables breeding of species with low fertility rates</li>
              <li>Preserves genetic material from critically endangered individuals</li>
              <li>Allows embryo transportation between facilities</li>
              <li>Facilitates surrogate motherhood programs</li>
            </ul>
          </div>
        </li>

        <li>
          <div className="species-container">
            <strong>Genetic Banking</strong>
            <p>Advanced cryopreservation techniques to store genetic material, including eggs, sperm, and embryos, preserving valuable genetic diversity for future conservation efforts.</p>
            <ul>
              <li>Maintains genetic diversity over long periods</li>
              <li>Creates backup populations of endangered species</li>
              <li>Enables future breeding programs</li>
              <li>Preserves rare genetic traits</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

const ReproductionTech = () => {
  return (
    <TypedPage
      title="Reproductive Technologies"
      className="reproduction-genetics"
    >
      <ReproductionTechContent />
    </TypedPage>
  );
};

export default ReproductionTech;