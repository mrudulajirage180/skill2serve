import "./Hero.css";

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

        <button className="worker-btn">
          Register as Worker
        </button>

        <button className="ngo-btn">
          Register as NGO
        </button>

      </div>

    </section>
  );
}

export default Hero;