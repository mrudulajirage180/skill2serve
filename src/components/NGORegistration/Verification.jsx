import React from "react";
import "./NGORegistration.css";

const Verification = () => {
  return (
    <div className="form-section">
      <h2>Verification</h2>

      <div className="form-grid">

        <div className="input-group">
          <label>Registration Certificate</label>

          <input type="file" />
        </div>

        <div className="input-group">
          <label>PAN Number</label>

          <input
            type="text"
            placeholder="Enter PAN Number"
          />
        </div>

        <div className="input-group">
          <label>GST Number (Optional)</label>

          <input
            type="text"
            placeholder="Enter GST Number"
          />
        </div>

        <div className="input-group">
          <label>Website (Optional)</label>

          <input
            type="url"
            placeholder="https://example.org"
          />
        </div>

      </div>
    </div>
  );
};

export default Verification;