import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Layout from "./Layout/Layout";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import DarkLightTheme from "./Theme/DarkLightTheme";
import Certified from "./components/Certified";
import Certificate from "./pages/Certificate";
import { useLocation } from "react-router-dom";
import Stairs from "./common/Stairs";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Layout>
        <Stairs>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificate" element={<Certificate />} />
          </Routes>

        </Stairs>
          {location.pathname != "/certificate" && <Certified />}
      </Layout>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
      <DarkLightTheme />
    </Router>
  );
};

export default App;
