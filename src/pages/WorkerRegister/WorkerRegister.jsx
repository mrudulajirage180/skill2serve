import "./WorkerRegister.css";
import Navbar from "../../components/Navbar/Navbar";

import PersonalInfo from "../../components/WorkerRegistration/PersonalInfo";
import LocationInfo from "../../components/WorkerRegistration/LocationInfo";
import WorkCategory from "../../components/WorkerRegistration/WorkCategory";
import Experience from "../../components/WorkerRegistration/Experience";
import Languages from "../../components/WorkerRegistration/Languages";
import Availability from "../../components/WorkerRegistration/Availability";
import IdentityVerification from "../../components/WorkerRegistration/IdentityVerification";
import AccountDetails from "../../components/WorkerRegistration/AccountDetails";

function WorkerRegister() {
  return (
    <>
      <Navbar />

      <section className="worker-page">
        <div className="worker-card">
          <h1>Worker Registration</h1>

          <p>
            Register yourself and connect with NGOs looking for skilled
            workers.
          </p>

          <form>
            <PersonalInfo />

            <LocationInfo />

            <WorkCategory />

            <Experience />

            <Languages />

            <Availability />

            <IdentityVerification />

            <AccountDetails />

            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default WorkerRegister;