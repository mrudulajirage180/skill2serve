import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./WorkerProfile.css";

const WorkerProfile = () => {

  const [worker, setWorker] = useState({
    name: "Mrudula Jirage",
    email: "mrudula@example.com",
    phone: "9876543210",
    category: "Construction Worker",
    experience: "2 Years",
    location: "Pune, Maharashtra",
  });

  const handleChange = (e) => {
    setWorker({
      ...worker,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="profile-container">

          <h1>My Profile</h1>

          <div className="profile-card">

            <div className="profile-image">
              👤
            </div>

            <div className="profile-form">

              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={worker.name}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={worker.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={worker.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={worker.category}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={worker.experience}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={worker.location}
                  onChange={handleChange}
                />
              </div>

              <button className="edit-btn">
                Save Changes
              </button>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default WorkerProfile;