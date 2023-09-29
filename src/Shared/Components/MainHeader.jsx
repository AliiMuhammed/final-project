import React from "react";
import "../Style/main-header.css";
function MainHeader({ header, userImg }) {
  return (
    <>
      <section className="mainHeader-section">
        <div className="main-header">
          <div className="container">
            <div className="userImg">
              {userImg ? <img src={userImg} alt="" /> : ""}
            </div>
            <h1>{header}</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainHeader;
