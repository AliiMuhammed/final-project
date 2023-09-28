import React from "react";
import "../Style/main-header.css";
function MainHeader({ header }) {
  return (
    <>
      <section className="mainHeader-section">
        <div className="main-header">
          <div className="container">
            <h1>{header}</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainHeader;
