import React from "react";
import"./Style/main-header.css"
function MainHeader({ title, icon }) {
  return (
    <div className="main-header">
      {icon}
      <h1>{title}</h1>
    </div>
  );
}

export default MainHeader;
