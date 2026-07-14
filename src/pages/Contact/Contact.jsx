import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">

        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Reach out for support,
          partnerships, or any questions about Skill2Serve.
        </p>

        <div className="contact-container">

          <div className="contact-info">

            <div className="info-card">
              <FaPhone className="contact-icon" />
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="info-card">
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p>support@skill2serve.com</p>
            </div>

            <div className="info-card">
              <FaLocationDot className="contact-icon" />
              <h3>Location</h3>
              <p>Pune, Maharashtra, India</p>
            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>
    </>
  );
}

export default Contact;