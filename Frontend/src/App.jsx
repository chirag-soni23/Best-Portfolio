import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Layout from "./Layout/Layout";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import DarkLightTheme from "./Theme/DarkLightTheme";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
      <DarkLightTheme/>
    </>
  );
};

export default App;
