import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Layout from "./Layout/Layout";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import DarkLightTheme from "./Theme/DarkLightTheme";
import Certified from "./components/Certified";
import Certificate from "./pages/Certificate";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificate" element={<Certificate />} />
          </Routes>
      <Certified/>
        </Layout>
      </Router>
      <DarkLightTheme/>
    </>
  );
};

export default App;
