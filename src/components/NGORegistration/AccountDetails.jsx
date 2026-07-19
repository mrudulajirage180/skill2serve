import React from "react";
import "./NGORegistration.css";

const AccountDetails = () => {
  return (
    <div className="form-section">
      <h2>Account Details</h2>

      <div className="form-grid">

        <div className="input-group">
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="input-group">
          <label>Password</label>

          <input
            type="password"
            placeholder="Create password"
          />
        </div>

        <div className="input-group full-width">
          <label>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm password"
          />
        </div>

        <div className="input-group full-width">
          <label className="checkbox-label">
            <input type="checkbox" />

            <span>
              I agree to the <strong>Terms & Conditions</strong> and{" "}
              <strong>Privacy Policy</strong>.
            </span>
          </label>
        </div>

      </div>
    </div>
  );
};

export default AccountDetails;