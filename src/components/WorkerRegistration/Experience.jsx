import "./WorkerRegistration.css";

function Experience() {
  return (
    <div className="form-section">
      <h2>🛠 Work Experience</h2>

      <div className="form-grid">
        <div className="input-group">
          <label>Years of Experience *</label>
          <select>
            <option>Select Experience</option>
            <option>Fresher</option>
            <option>Less than 1 Year</option>
            <option>1 - 3 Years</option>
            <option>3 - 5 Years</option>
            <option>5 - 10 Years</option>
            <option>More than 10 Years</option>
          </select>
        </div>

        <div className="input-group">
          <label>Previous Occupation</label>
          <input
            type="text"
            placeholder="Example: Electrician, Driver"
          />
        </div>

        <div className="input-group">
          <label>Preferred Work Type *</label>
          <select>
            <option>Select Work Type</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Daily Wage</option>
            <option>Contract</option>
          </select>
        </div>

        <div className="input-group">
          <label>Expected Daily Wage (₹)</label>
          <input
            type="number"
            placeholder="Enter expected daily wage"
          />
        </div>

        <div className="input-group" style={{ gridColumn: "1 / -1" }}>
          <label>Skills</label>
          <textarea
            rows="4"
            placeholder="Example: Wiring, Plumbing, Painting, Cooking, Driving..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Experience;