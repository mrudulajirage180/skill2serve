import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="works">

      <h2>How Skill2Serve Works</h2>

      <div className="steps">

        <div className="step">
          <div className="number">1</div>
          <h3>Register</h3>
          <p>Create your account as Worker or NGO.</p>
        </div>

        <div className="step">
          <div className="number">2</div>
          <h3>Add Skills</h3>
          <p>Workers upload their skills and experience.</p>
        </div>

        <div className="step">
          <div className="number">3</div>
          <h3>AI Matching</h3>
          <p>Our AI finds the best worker for each NGO.</p>
        </div>

        <div className="step">
          <div className="number">4</div>
          <h3>Start Working</h3>
          <p>Workers receive opportunities and begin helping.</p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;