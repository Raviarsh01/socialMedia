import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [login, setlogin] = useState(false);
  return (
    <div class="shadow py-3 flex justify-between px-5">
      <h2 className="text-gray-800 text-xl font-semibold">Social Media App</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/notes" className="mx-4">
          Posts
        </Link>
        {login ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
