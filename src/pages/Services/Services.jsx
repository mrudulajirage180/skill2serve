import "./Services.css";
import Navbar from "../../components/Navbar/Navbar";

import {
  FaUserTie,
  FaHandshake,
  FaBrain,
  FaLocationDot,
  FaChartLine,
  FaShieldHalved,
} from "react-icons/fa6";

function Services() {
  return (
    <>
      <Navbar />

      <section className="services-page">

        <h1>Our Services</h1>

        <p>
          Skill2Serve offers smart technology solutions that connect
          skilled workers with NGOs efficiently and securely.
        </p>

        <div className="services-grid">

          <div className="service-card">
            <FaUserTie className="service-icon" />
            <h3>Worker Registration</h3>
            <p>Register your skills and discover job opportunities.</p>
          </div>

          <div className="service-card">
            <FaHandshake className="service-icon" />
            <h3>NGO Registration</h3>
            <p>Create NGO profiles and hire skilled workers.</p>
          </div>

          <div className="service-card">
            <FaBrain className="service-icon" />
            <h3>AI Skill Matching</h3>
            <p>AI recommends the best workers for every NGO.</p>
          </div>

          <div className="service-card">
            <FaLocationDot className="service-icon" />
            <h3>Location Based Search</h3>
            <p>Find nearby opportunities using location.</p>
          </div>

          <div className="service-card">
            <FaChartLine className="service-icon" />
            <h3>Dashboard</h3>
            <p>Track registrations, jobs and completed tasks.</p>
          </div>

          <div className="service-card">
            <FaShieldHalved className="service-icon" />
            <h3>Secure Login</h3>
            <p>Protected authentication for workers and NGOs.</p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Services;