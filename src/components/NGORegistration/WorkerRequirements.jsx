import React from "react";
import "./NGORegistration.css";

const WorkerRequirements = () => {
  return (
    <div className="form-section">
      <h2>Worker Requirements</h2>

      <p className="section-desc">
        Select the type of workers required for your organization.
      </p>

      <div className="form-grid">

        <div className="input-group">
          <label>Worker Category</label>

          <select>
            <option value="">Select Category</option>
            <option>Construction & Technical</option>
            <option>Home Services</option>
            <option>Retail & Shops</option>
            <option>Hotels & Restaurants</option>
            <option>Agriculture</option>
            <option>Factory & Warehouse</option>
            <option>Driving & Transport</option>
            <option>Office Support</option>
            <option>Healthcare Support</option>
            <option>Education & Community</option>
          </select>
        </div>

        <div className="input-group">
          <label>Number of Workers</label>

          <input
            type="number"
            placeholder="Enter required workers"
          />
        </div>

        <div className="input-group">
          <label>Salary / Daily Wage (₹)</label>

          <input
            type="number"
            placeholder="Enter amount"
          />
        </div>

        <div className="input-group">
          <label>Job Type</label>

          <select>
            <option value="">Select Job Type</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Contract</option>
            <option>Temporary</option>
          </select>
        </div>

        <div className="input-group full-width">
          <label>Job Description</label>

          <textarea
            placeholder="Describe work responsibilities..."
          ></textarea>
        </div>

      </div>
    </div>
  );
};

export default WorkerRequirements;