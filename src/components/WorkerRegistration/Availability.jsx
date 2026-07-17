import "./WorkerRegistration.css";

function Availability() {
  return (
    <div className="form-section">
      <h2>🕒 Availability</h2>

      <div className="form-grid">
        <div className="input-group">
          <label>Preferred Working Days *</label>
          <select>
            <option>Select Working Days</option>
            <option>Monday - Friday</option>
            <option>Monday - Saturday</option>
            <option>Weekends Only</option>
            <option>Any Day</option>
          </select>
        </div>

        <div className="input-group">
          <label>Preferred Shift *</label>
          <select>
            <option>Select Shift</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>Night</option>
            <option>Flexible</option>
          </select>
        </div>

        <div className="input-group">
          <label>Working Hours Per Day</label>
          <select>
            <option>Select Hours</option>
            <option>4 Hours</option>
            <option>6 Hours</option>
            <option>8 Hours</option>
            <option>10 Hours</option>
            <option>12 Hours</option>
          </select>
        </div>

        <div className="input-group">
          <label>Can you travel for work?</label>
          <select>
            <option>Select Option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="input-group">
          <label>Ready to Relocate?</label>
          <select>
            <option>Select Option</option>
            <option>Yes</option>
            <option>No</option>
            <option>Depends on Location</option>
          </select>
        </div>

        <div className="input-group">
          <label>Available From *</label>
          <input type="date" />
        </div>
      </div>
    </div>
  );
}

export default Availability;