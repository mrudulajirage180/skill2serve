import "./WorkerRegistration.css";

function AccountDetails() {
  return (
    <div className="form-section">
      <h2>🔒 Account Details</h2>

      <div className="form-grid">
        <div className="input-group">
          <label>Email Address *</label>
          <input
            type="email"
            placeholder="Enter your email address"
          />
        </div>

        <div className="input-group">
          <label>Create Password *</label>
          <input
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="input-group">
          <label>Confirm Password *</label>
          <input
            type="password"
            placeholder="Confirm your password"
          />
        </div>

        <div className="input-group">
          <label>Preferred Communication</label>
          <select>
            <option>Select Option</option>
            <option>Phone Call</option>
            <option>SMS</option>
            <option>WhatsApp</option>
            <option>Email</option>
          </select>
        </div>

        <div className="full-width">
          <label className="checkbox-label">
            <input type="checkbox" />
            <span>
              I agree to the <strong>Terms & Conditions</strong> and
              <strong> Privacy Policy</strong>.
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;