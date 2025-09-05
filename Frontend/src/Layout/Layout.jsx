import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
