import React from "react";
import "../Style/main-header.css";
function MainHeader({ header, userImg }) {
  return (
    <>
      <section className="mainHeader-section">
        <div className="main-header">
          <div className="container">
            {userImg ? (
              <div
                className="imageBG"
                style={{ backgroundImage: `url(${userImg})` }}
              ></div>
            ) : (
              ""
            )}

            <h1>{header}</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainHeader;
