import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("User");
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Profile;
