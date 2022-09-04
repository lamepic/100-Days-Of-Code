import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
