import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./WorkerDashboard.css";
import { Link } from "react-router-dom";

const WorkerDashboard = () => {
  return (
    <>
      <Navbar />

      <div className="dashboard-page">
        <div className="dashboard-container">

          <h1>Worker Dashboard</h1>

          <p className="welcome-text">
            Welcome! Manage your profile, explore jobs, and track your applications.
          </p>

          <div className="dashboard-grid">

<Link to="/worker-profile" className="dashboard-link">

  <div className="dashboard-card">
    <h3>👤 My Profile</h3>
    <p>View and update your personal information.</p>
  </div>

</Link>

<Link to="/available-jobs" className="dashboard-link">

  <div className="dashboard-card">
    <h3>💼 Available Jobs</h3>
    <p>Browse jobs posted by NGOs.</p>
  </div>

</Link>

            <div className="dashboard-card">
              <h3>📄 Applied Jobs</h3>
              <p>Track the jobs you have applied for.</p>
            </div>

            <div className="dashboard-card">
              <h3>🔔 Notifications</h3>
              <p>View job alerts and important updates.</p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default WorkerDashboard;