import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("jwt_token"); // Clear authentication token from cookies
    navigate("/"); // Redirect to login page
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;