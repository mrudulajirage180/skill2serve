import "./WorkerRegister.css";
import Navbar from "../../components/Navbar/Navbar";

function WorkerRegister() {
  return (
    <>
      <Navbar />

      <section className="worker-page">

        <div className="worker-card">

          <h1>Worker Registration</h1>

          <p>
            Register yourself and connect with NGOs looking
            for skilled workers.
          </p>

          <form>

            {/* Personal Information */}

<div className="form-section">

  <h2>👤 Personal Information</h2>

  <div className="form-grid">

    <div className="form-group">
      <label>Full Name *</label>
      <input
        type="text"
        placeholder="Enter your full name"
      />
    </div>

    <div className="form-group">
      <label>Mobile Number *</label>
      <input
        type="tel"
        placeholder="Enter mobile number"
      />
    </div>

    <div className="form-group">
      <label>Age *</label>
      <input
        type="number"
        placeholder="Enter your age"
      />
    </div>

    <div className="form-group">
      <label>Gender *</label>

      <select>
        <option>Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

    </div>

  </div>

</div>

            

            {/* Location */}

<div className="form-section">

  <h2>📍 Location</h2>

  <div className="form-grid">

    <div className="form-group">
      <label>State *</label>

      <select>
        <option>Select State</option>
        <option>Maharashtra</option>
        <option>Karnataka</option>
        <option>Goa</option>
      </select>
    </div>

    <div className="form-group">
      <label>District *</label>

      <input
        type="text"
        placeholder="Enter District"
      />
    </div>

    <div className="form-group">
      <label>Taluka *</label>

      <input
        type="text"
        placeholder="Enter Taluka"
      />
    </div>

    <div className="form-group">
      <label>Village / City *</label>

      <input
        type="text"
        placeholder="Enter Village or City"
      />
    </div>

  </div>

  <button
    type="button"
    className="location-btn"
  >
    📍 Use Current Location
  </button>

</div>

            {/* Skills */}

            <div className="form-section">

              <h2>Skills</h2>

            </div>

            {/* Experience */}

            <div className="form-section">

              <h2>Experience</h2>

            </div>

            {/* Languages */}

            <div className="form-section">

              <h2>Languages</h2>

            </div>

            {/* Availability */}

            <div className="form-section">

              <h2>Availability</h2>

            </div>

            {/* Documents */}

            <div className="form-section">

              <h2>Identity Verification</h2>

            </div>

            {/* Password */}

            <div className="form-section">

              <h2>Create Account</h2>

            </div>

          </form>

        </div>

      </section>
    </>
  );
}

export default WorkerRegister;