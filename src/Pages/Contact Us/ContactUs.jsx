import React from "react";
import "./style/countactUs.css";
import MainHeader from "../../Shared/Components/MainHeader";
import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <>
      <MainHeader header={"Contact Us"} />
      <section className="contact-section">
        <div className="container">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="icon">
                <BsFire />
              </div>
              <h3>Email us</h3>
              <p>
                <Link to={"mailto:ali.muhammed.dev@gmail.com"}>
                  ali.muhammed.dev@gmail.com
                </Link>
                Interactively grow backend ideas for cross-platform models.
              </p>
            </div>
            <div className="contact-card">
              <div className="icon">
                <BsFire />
              </div>
              <h3>Call Us</h3>
              <p>
                <Link to={"mailto:ali.muhammed.dev@gmail.com"}>
                  +255 789 456 123
                </Link>
                Distinctively exploit optimal alignments for intuitive
                bandwidth.
              </p>
            </div>
            <div className="contact-card">
              <div className="icon">
                <BsFire />
              </div>
              <h3>Location</h3>
              <p>
                Cairo,Egypt
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
