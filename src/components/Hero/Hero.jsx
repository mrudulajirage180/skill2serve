import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <h1>
        Connecting Skills with Social Impact
      </h1>

      <p>
        Find meaningful work opportunities and help NGOs
        discover skilled workers to create a better society.
      </p>

      <div className="hero-buttons">

  <Link to="/worker-register">
    <button className="worker-btn">
      Register as Worker
    </button>
  </Link>

  <Link to="/ngo-register">
    <button className="ngo-btn">
      Register as NGO
    </button>
  </Link>

</div>

    </section>
  );
}

export default Hero;