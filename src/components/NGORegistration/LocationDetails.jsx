import React from "react";
import "./NGORegistration.css";

const LocationDetails = () => {
  return (
    <div className="form-section">
      <h2>Location Details</h2>

      <div className="form-grid">

        <div className="input-group">
          <label>State</label>

          <input
            type="text"
            placeholder="Enter state"
          />
        </div>

        <div className="input-group">
          <label>District</label>

          <input
            type="text"
            placeholder="Enter district"
          />
        </div>

        <div className="input-group">
          <label>City / Village</label>

          <input
            type="text"
            placeholder="Enter city or village"
          />
        </div>

        <div className="input-group">
          <label>PIN Code</label>

          <input
            type="text"
            placeholder="Enter PIN code"
          />
        </div>

        <div className="input-group full-width">
          <label>Complete Address</label>

          <textarea
            placeholder="Enter complete address"
          ></textarea>
        </div>

      </div>
    </div>
  );
};

export default LocationDetails;