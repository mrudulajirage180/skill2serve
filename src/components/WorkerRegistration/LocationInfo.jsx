import "./WorkerRegistration.css";

function LocationInfo() {
  return (
    <div className="form-section">
      <h2>📍 Location Details</h2>

      <div className="form-grid">
        <div className="input-group">
          <label>State *</label>
          <input type="text" placeholder="Enter your state" />
        </div>

        <div className="input-group">
          <label>District *</label>
          <input type="text" placeholder="Enter your district" />
        </div>

        <div className="input-group">
          <label>City / Village *</label>
          <input type="text" placeholder="Enter your city or village" />
        </div>

        <div className="input-group">
          <label>PIN Code *</label>
          <input type="number" placeholder="Enter PIN Code" />
        </div>

        <div className="input-group" style={{ gridColumn: "1 / -1" }}>
          <label>Full Address *</label>
          <textarea
            rows="4"
            placeholder="Enter your complete address"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default LocationInfo;