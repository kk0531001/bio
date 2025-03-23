import React from "react";
import "./PageStyles.css";

const EndangeredSpeciesContent = () => {
  return (
    <div className="content-wrapper">
      <h2>Reasons for Extinction/Endangerment</h2>
      <p>
        There are various reasons that species which are due to either human or natural factors, such as:
      </p>
      <ul>
        <li>
          <strong>Climate Change:</strong> Rising temperatures, changing weather patterns, and extreme events like droughts or floods can make habitats unsuitable for certain species.
        </li>
        <li>
          <strong>Habitat Destruction:</strong> Deforestation, urbanization, and land conversion for agriculture reduce the natural living space of organisms. When their habitat is destroyed, they struggle to find food, shelter, and breeding grounds.
        </li>
        <li>
          <strong>Hunting & Poaching:</strong> Excessive hunting for meat, fur, or medicinal purposes can rapidly reduce animal populations.
        </li>
        <li>
          <strong>Overharvesting:</strong> Overfishing and excessive harvesting of plants or animals for commercial purposes can lead to population decline. The dodo bird became extinct due to overhunting and egg collection by sailors.
        </li>
        <li>
          <strong>Pollution:</strong> Water, air, and soil pollution harm organisms. Oil spills, plastic waste, and toxic chemicals can poison species, while air pollution and acid rain damage ecosystems.
        </li>
        <li>
          <strong>Introduced Species:</strong> Non-native species can outcompete, prey on, or spread diseases to local species.
        </li>
      </ul>

      <h2>Examples:</h2>
      <ul>
        <li>
          <div className="species-container">
            <strong>Golden Toad (Incilius periglenes):</strong> Declared extinct in 2004 due to climate change affecting its cloud forest habitat in Costa Rica.
            <img src="cc1.jpg" className="endangered-image" alt="Golden Toad" />
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Sumatran Orangutan (Pongo abelii):</strong> Critically endangered due to deforestation for palm oil plantations in Indonesia.
            <img src="cc2.jpeg" className="endangered-image" alt="Sumatran Orangutan" />
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Bengal Tiger (Panthera tigris tigris):</strong> Endangered due to illegal hunting for its skin, bones, and body parts.
            <img src="cc3.jpg" className="endangered-image" alt="Bengal Tiger" />
          </div>
        </li>
        <li>
          <div className="species-container">
            <strong>Atlantic Cod (Gadus morhua):</strong> Endangered due to overfishing, collapsing its population in the 1990s.
            <img src="cc4.jpg" className="endangered-image" alt="Atlantic Cod" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EndangeredSpeciesContent; 