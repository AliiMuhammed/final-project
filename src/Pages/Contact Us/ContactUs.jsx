import React from "react";
import "./style/countactUs.css";
import MainHeader from "../../Shared/Components/MainHeader";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector to access the Redux store

function ContactUs() {
  const language = useSelector((state) => state.language); // Get the language from the Redux store

  return (
    <>
      <MainHeader
        header={language === "ar-KSA" ? "تواصل معنا" : "Contact Us"}
      />
      <section className="contact-section">
        <div className="container">
          <div className="contact-cards">
            {language === "ar-KSA" ? (
              <>
                <div className="contact-card">
                  <div className="icon">
                    <MdEmail />
                  </div>
                  <h3>راسلنا</h3>
                  <p>
                    أرسل لنا عبر البريد الإلكتروني
                    <Link to={"mailto:ali.muhammed.dev@gmail.com"}>
                      ali.muhammed.dev@gmail.com
                    </Link>
                  </p>
                </div>
                <div className="contact-card">
                  <div className="icon">
                    <BsFillTelephoneFill />
                  </div>
                  <h3>إتصل بنا</h3>
                  <p>
                    لا تتردد في الاتصال بنا عبر هذا الرقم لأي استفسار أو مساعدة
                    <Link to={"mailto:ali.muhammed.dev@gmail.com"}>
                      +255 789 456 123
                    </Link>
                  </p>
                </div>
                <div className="contact-card">
                  <div className="icon">
                    <FaLocationDot />
                  </div>
                  <h3>الموقع</h3>
                  <p>القاهرة، مصر</p>
                </div>
              </>
            ) : (
              <>
                <div className="contact-card">
                  <div className="icon">
                    <MdEmail />
                  </div>
                  <h3>Email us</h3>
                  <p>
                    <Link to={"mailto:ali.muhammed.dev@gmail.com"}>
                      ali.muhammed.dev@gmail.com
                    </Link>
                    Send us via email.
                  </p>
                </div>
                <div className="contact-card">
                  <div className="icon">
                    <BsFillTelephoneFill />
                  </div>
                  <h3>Call Us</h3>
                  <p>
                    <Link to={"mailto:ali.muhammed.dev@gmail.com"}>
                      +255 789 456 123
                    </Link>
                    Do not hesitate to contact us via this number for any
                    inquiries or assistance
                  </p>
                </div>
                <div className="contact-card">
                  <div className="icon">
                    <FaLocationDot />
                  </div>
                  <h3>Location</h3>
                  <p>Cairo,Egypt</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
