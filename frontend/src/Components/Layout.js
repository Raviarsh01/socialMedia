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
      <div className="outletDiv">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
