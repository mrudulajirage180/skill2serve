import "./WorkerRegistration.css";

function Languages() {
  return (
    <div className="form-section">
      <h2>🌐 Languages Known</h2>

      <div className="form-grid">
        <div className="input-group">
          <label>Primary Language *</label>
          <select>
            <option>Select Language</option>
            <option>Marathi</option>
            <option>Hindi</option>
            <option>English</option>
            <option>Kannada</option>
            <option>Tamil</option>
            <option>Telugu</option>
            <option>Gujarati</option>
            <option>Punjabi</option>
            <option>Bengali</option>
            <option>Malayalam</option>
            <option>Other</option>
          </select>
        </div>

        <div className="input-group">
          <label>Other Languages</label>
          <input
            type="text"
            placeholder="Example: Hindi, English"
          />
        </div>

        <div className="input-group" style={{ gridColumn: "1 / -1" }}>
          <label>Can you read and write?</label>

          <select>
            <option>Select Option</option>
            <option>Yes</option>
            <option>No</option>
            <option>Can Read Only</option>
            <option>Can Speak Only</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Languages;