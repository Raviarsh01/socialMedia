import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ minHeight: "84vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
