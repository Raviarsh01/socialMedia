import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="flex">
        <div className="w-[25%]">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-gray-100 p-2">
          <Outlet />
        </div>
      </div>
      {pathname != "/home" && <Footer />}
    </>
  );
};

export default Layout;
