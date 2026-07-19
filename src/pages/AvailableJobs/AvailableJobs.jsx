import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./AvailableJobs.css";

const jobs = [
  {
    id: 1,
    title: "Construction Worker",
    organization: "Helping Hands NGO",
    location: "Pune",
    salary: "₹700/day",
    duration: "30 Days",
  },
  {
    id: 2,
    title: "Electrician",
    organization: "Bright Future Foundation",
    location: "Mumbai",
    salary: "₹900/day",
    duration: "15 Days",
  },
  {
    id: 3,
    title: "Plumber",
    organization: "Care India",
    location: "Kolhapur",
    salary: "₹800/day",
    duration: "20 Days",
  },
];

const AvailableJobs = () => {
  return (
    <>
      <Navbar />

      <div className="jobs-page">
        <div className="jobs-container">

          <h1>Available Jobs</h1>

          <p className="jobs-subtitle">
            Browse jobs posted by NGOs.
          </p>

          <div className="jobs-grid">

            {jobs.map((job) => (
              <div className="job-card" key={job.id}>

                <h2>{job.title}</h2>

                <p><strong>Organization:</strong> {job.organization}</p>

                <p><strong>Location:</strong> {job.location}</p>

                <p><strong>Salary:</strong> {job.salary}</p>

                <p><strong>Duration:</strong> {job.duration}</p>

            
                <Link to="/job-details">
                <button className="apply-btn">
                     Apply Now
                </button>
                </Link>

              </div>
            ))}

          </div>

        </div>
      </div>
    </>
  );
};

export default AvailableJobs;