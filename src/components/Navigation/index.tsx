import React from "react";
import "./navigation.scss";

export const Navigation = () => {
  return (
    <div className="nav">
      <div>
        <h2>Pokè Practice</h2>
      </div>

      <div className="nav-btnGroup">
        <button className="nav-btnGroup-btn">About</button>
        <button className="nav-btnGroup-btn">Portfolio</button>
        <button className="nav-btnGroup-btn">API Docs</button>
      </div>
    </div>
  );
};
