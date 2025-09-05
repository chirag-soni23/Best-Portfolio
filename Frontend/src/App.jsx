import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Layout from "./Layout/Layout";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import DarkLightTheme from "./Theme/DarkLightTheme";
import Certificate from "./pages/Certificate";
import Stairs from "./common/Stairs";
import { ToastContainer } from "react-toastify";

const AppContent = () => {
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
      </Layout>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
      <DarkLightTheme />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </Router>
  );
};

export default App;
