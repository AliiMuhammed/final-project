import React from "react";
import "../Style/main-heading.css";
function MainHeading({ title, icon }) {
  return (
    <div className="main-heading">
      {icon}
      <h1>{title}</h1>
    </div>
  );
}

export default MainHeading;
