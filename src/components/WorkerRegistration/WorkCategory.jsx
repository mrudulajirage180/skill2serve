import "./WorkerRegistration.css";

function WorkCategory() {
  return (
    <div className="form-section">
      <h2>💼 Work Category</h2>

      <p className="section-desc">
        Select one or more categories that match your skills.
      </p>

      <div className="category-grid">

        <label className="category-card">
          <input type="checkbox" />
          <span>🏗 Construction & Technical</span>
        </label>

        <label className="category-card">
          <input type="checkbox" />
          <span>🏠 Home Services</span>
        </label>

        <label className="category-card">
          <input type="checkbox" />
          <span>🛍 Retail & Shops</span>
        </label>

        <label className="category-card">
          <input type="checkbox" />
          <span>🍽 Hotels & Restaurants</span>
        </label>

        <label className="category-card">
          <input type="checkbox" />
          <span>🚜 Agriculture</span>
        </label>

        <label className="category-card">
          <input type="checkbox" />
          <span>🏭 Factory & Warehouse</span>
        </label>

        <label className="category-card">
          <input type="checkbox" />
          <span>🚚 Driving & Transport</span>
        </label>

        <label className="category-card">
          <input type="checkbox" />
          <span>💼 Office Support</span>
        </label>

        <label className="category-card">
          <input type="checkbox" />
          <span>🏥 Healthcare Support</span>
        </label>

        <label className="category-card">
          <input type="checkbox" />
          <span>📚 Education & Community</span>
        </label>

      </div>
    </div>
  );
}

export default WorkCategory;