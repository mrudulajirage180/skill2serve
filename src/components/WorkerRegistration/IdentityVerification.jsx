import "./WorkerRegistration.css";

function IdentityVerification() {
  return (
    <div className="form-section">
      <h2>🪪 Identity Verification</h2>

      <div className="form-grid">
        <div className="input-group">
          <label>ID Proof Type *</label>
          <select>
            <option>Select ID Proof</option>
            <option>Aadhaar Card</option>
            <option>PAN Card</option>
            <option>Voter ID</option>
            <option>Driving License</option>
            <option>Passport</option>
          </select>
        </div>

        <div className="input-group">
          <label>ID Number *</label>
          <input
            type="text"
            placeholder="Enter your ID number"
          />
        </div>

        <div className="input-group">
          <label>Upload ID Proof *</label>
          <input type="file" accept=".jpg,.jpeg,.png,.pdf" />
        </div>

        <div className="input-group">
          <label>Emergency Contact Name *</label>
          <input
            type="text"
            placeholder="Enter emergency contact name"
          />
        </div>

        <div className="input-group">
          <label>Emergency Contact Number *</label>
          <input
            type="tel"
            placeholder="Enter emergency contact number"
          />
        </div>

        <div className="input-group">
          <label>Relationship</label>
          <select>
            <option>Select Relationship</option>
            <option>Father</option>
            <option>Mother</option>
            <option>Brother</option>
            <option>Sister</option>
            <option>Spouse</option>
            <option>Friend</option>
            <option>Guardian</option>
            <option>Other</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default IdentityVerification;