import "./WorkerRegistration.css";

function PersonalInfo() {
  return (
    <div className="form-section">
      <h2>👤 Personal Information</h2>

      <div className="form-grid">
        <div className="input-group">
          <label>Full Name *</label>
          <input type="text" placeholder="Enter your full name" />
        </div>

        <div className="input-group">
          <label>Phone Number *</label>
          <input type="tel" placeholder="Enter your phone number" />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-group">
          <label>Date of Birth *</label>
          <input type="date" />
        </div>

        <div className="input-group">
          <label>Gender *</label>
          <select>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="input-group">
          <label>Highest Education</label>
          <select>
            <option>Select Education</option>
            <option>No Formal Education</option>
            <option>Primary School</option>
            <option>High School</option>
            <option>Diploma</option>
            <option>Graduate</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;