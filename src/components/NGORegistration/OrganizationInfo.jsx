import React from "react";
import "./NGORegistration.css";

const OrganizationInfo = () => {
  return (
    <div className="form-section">
      <h2>Organization Information</h2>

      <div className="form-grid">
        <div className="input-group">
          <label>Organization Name</label>
          <input
            type="text"
            placeholder="Enter organization name"
          />
        </div>

        <div className="input-group">
          <label>Registration Number</label>
          <input
            type="text"
            placeholder="Enter registration number"
          />
        </div>

        <div className="input-group">
          <label>Organization Type</label>

          <select>
            <option value="">Select Type</option>
            <option>NGO</option>
            <option>Trust</option>
            <option>Society</option>
            <option>Foundation</option>
            <option>Government Organization</option>
            <option>Private Company</option>
          </select>
        </div>

        <div className="input-group">
          <label>Year Established</label>

          <input
            type="number"
            placeholder="e.g. 2015"
          />
        </div>

        <div className="input-group full-width">
          <label>Organization Description</label>

          <textarea
            placeholder="Describe your organization and its mission..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default OrganizationInfo;