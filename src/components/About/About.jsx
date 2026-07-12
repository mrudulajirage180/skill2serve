import "./About.css";

import {
  FaUserTie,
  FaBrain,
  FaPeopleGroup
} from "react-icons/fa6";

function About() {
  return (
    <section className="about">

      <h2>About Skill2Serve</h2>

      <p className="about-text">
        Skill2Serve connects NGOs with skilled workers using
        technology. Our platform helps organizations quickly
        find the right people while creating meaningful
        employment opportunities for workers.
      </p>

      {/* Cards Container */}
      <div className="about-container">

        <div className="about-card">
          <FaUserTie className="about-icon" />
          <h3>Workers</h3>
          <p>
            Register your skills and discover nearby job opportunities.
          </p>
        </div>

        <div className="about-card">
          <FaBrain className="about-icon" />
          <h3>AI Matching</h3>
          <p>
            Match workers and NGOs intelligently using AI based on skills and location.
          </p>
        </div>

        <div className="about-card">
          <FaPeopleGroup className="about-icon" />
          <h3>NGOs</h3>
          <p>
            Connect NGOs with verified skilled workers for impactful community projects.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;