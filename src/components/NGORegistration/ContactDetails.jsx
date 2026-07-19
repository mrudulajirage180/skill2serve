import React from "react";
import "./NGORegistration.css";

const ContactDetails = () => {
  return (
    <div className="form-section">
      <h2>Contact Details</h2>

      <div className="form-grid">

        <div className="input-group">
          <label>Contact Person Name</label>

          <input
            type="text"
            placeholder="Enter contact person name"
          />
        </div>

        <div className="input-group">
          <label>Designation</label>

          <input
            type="text"
            placeholder="Manager / Coordinator / Director"
          />
        </div>

        <div className="input-group">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter email address"
          />
        </div>

        <div className="input-group">
          <label>Phone Number</label>

          <input
            type="tel"
            placeholder="Enter phone number"
          />
        </div>

      </div>
    </div>
  );
};

export default ContactDetails;