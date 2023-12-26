import React from "react";
import { Navigate } from "react-router-dom";

const Routing = ({ children }) => {
  const token = localStorage.getItem("Token");
  return token ? children : <Navigate to="/" />;
};

export default Routing;
