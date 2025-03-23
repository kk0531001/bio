import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SustainableResource from "./Components/SustainableResource";
import ConservationManagement from "./Components/ConservationManagement";
import ForestConservation from "./Components/ForestConservation";
import FishConservation from "./Components/FishConservation";
import EndangeredSpecies from "./Components/EndangeredSpecies";
import EndangeredSpeciesContent from "./Components/EndangeredSpeciesContent";
import ConservationMethods from "./Components/ConservationMethods";
import ConservationReasons from "./Components/ConservationReasons";
import ReproductionTech from "./Components/ReproductionTech";
import GeneticVariation from "./Components/GeneticVariation";
import Quiz from "./Components/Quiz";
import ContextMenu from "./Components/ContextMenu";
import Settings from "./Components/Settings";
import ScrollToTop from "./Components/ScrollToTop";
import { SettingsProvider } from "./context/SettingsContext";
import AudioPlayer from './Components/AudioPlayer';

function App() {
  return (
    <SettingsProvider>
      <Router>
        <div className="app">
          <AudioPlayer />
          <Navbar />
          <ContextMenu />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sustainable-resource" element={<SustainableResource />} />
              <Route path="/conservation-management" element={<ConservationManagement />} />
              <Route path="/forest-conservation" element={<ForestConservation />} />
              <Route path="/fish-conservation" element={<FishConservation />} />
              <Route path="/endangered-species" element={<EndangeredSpecies />} />
              <Route path="/endangered-species/content" element={<EndangeredSpeciesContent />} />
              <Route path="/conservation-methods" element={<ConservationMethods />} />
              <Route path="/conservation-reasons" element={<ConservationReasons />} />
              <Route path="/reproduction-tech" element={<ReproductionTech />} />
              <Route path="/genetic-variation" element={<GeneticVariation />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
          <ScrollToTop />
        </div>
      </Router>
    </SettingsProvider>
  );
}

export default App;