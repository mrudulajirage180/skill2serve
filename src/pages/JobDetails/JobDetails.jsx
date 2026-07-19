import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./JobDetails.css";

const JobDetails = () => {
  return (
    <>
      <Navbar />

      <div className="job-details-page">
        <div className="job-details-container">

          <h1>Construction Worker</h1>

          <div className="job-details-card">

            <p><strong>Organization:</strong> Helping Hands NGO</p>

            <p><strong>Location:</strong> Pune, Maharashtra</p>

            <p><strong>Salary:</strong> ₹700/day</p>

            <p><strong>Duration:</strong> 30 Days</p>

            <p><strong>Vacancies:</strong> 10 Workers</p>

            <p><strong>Working Hours:</strong> 9:00 AM - 6:00 PM</p>

            <div className="description">
              <h3>Job Description</h3>

              <p>
                We are looking for hardworking construction workers to assist
                in building community housing projects. Workers should be
                physically fit and willing to work in a team environment.
              </p>
            </div>

            <button className="apply-btn">
              Apply for Job
            </button>

          </div>

        </div>
      </div>
    </>
  );
};

export default JobDetails;