import "./Impact.css";

import {
  FaUserTie,
  FaBuilding,
  FaMapMarkerAlt,
  FaHandshake
} from "react-icons/fa";

function Impact() {
  return (
    <section className="impact">

      <h2>Our Impact</h2>

      <div className="impact-container">

        <div className="impact-card">
          <FaUserTie className="impact-icon" />
          <h1>10,000+</h1>
          <p>Workers Registered</p>
        </div>

        <div className="impact-card">
          <FaBuilding className="impact-icon" />
          <h1>500+</h1>
          <p>NGOs Connected</p>
        </div>

        <div className="impact-card">
          <FaMapMarkerAlt className="impact-icon" />
          <h1>50+</h1>
          <p>Cities Covered</p>
        </div>

        <div className="impact-card">
          <FaHandshake className="impact-icon" />
          <h1>25,000+</h1>
          <p>Tasks Completed</p>
        </div>

      </div>

    </section>
  );
}

export default Impact;