import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import OrganizationInfo from "../../components/NGORegistration/OrganizationInfo";
import ContactDetails from "../../components/NGORegistration/ContactDetails";
import LocationDetails from "../../components/NGORegistration/LocationDetails";
import WorkerRequirements from "../../components/NGORegistration/WorkerRequirements";
import Verification from "../../components/NGORegistration/Verification";
import AccountDetails from "../../components/NGORegistration/AccountDetails";

import "../../components/WorkerRegistration/WorkerRegistration.css";
import "./NGORegister.css";

const NGORegister = () => {
  return (
    <>
      <Navbar />

      <div className="ngo-register-page">
        <div className="ngo-register-container">

          <div className="page-header">
            <h1>NGO Registration</h1>

            <p>
              Register your NGO or organization to connect with skilled
              workers across India.
            </p>
          </div>

          <form>

            <OrganizationInfo />

            <ContactDetails />

            <LocationDetails />

            <WorkerRequirements />

            <Verification />

            <AccountDetails />

            <button className="submit-btn">
              Register Organization
            </button>

          </form>

        </div>
      </div>
    </>
  );
};

export default NGORegister;