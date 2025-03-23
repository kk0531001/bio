import React from "react";
import TypedPage from "./TypedPage";
import EndangeredSpeciesContent from "./EndangeredSpeciesContent";

const EndangeredSpecies = () => {
  return (
    <TypedPage
      title="Endangered Species"
      className="endangered-species"
    >
      <EndangeredSpeciesContent />
    </TypedPage>
  );
};

export default EndangeredSpecies;