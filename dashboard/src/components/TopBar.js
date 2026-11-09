import React from "react";
import axios from "axios";
import Menu from "./Menu";

const TopBar = () => {
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://tradenow-backend.onrender.com/auth/logout",
        {},
        { withCredentials: true },
      );

      window.location.href = "http://tradenow-frontend.onrender.com/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />

      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "#e53935",
          color: "#ffffff",
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "600",
          border: "2px solid #e53935",
          borderRadius: "10px",
          cursor: "pointer",
          marginLeft: "15px",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default TopBar;
