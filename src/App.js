import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import WorkerRegister from "./pages/WorkerRegister/WorkerRegister";
import NGORegister from "./pages/NGORegister/NGORegister";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import WorkerDashboard from "./pages/WorkerDashboard/WorkerDashboard";
import WorkerProfile from "./pages/WorkerProfile/WorkerProfile";
import AvailableJobs from "./pages/AvailableJobs/AvailableJobs";
import JobDetails from "./pages/JobDetails/JobDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/worker-register" element={<WorkerRegister />} />
      <Route path="/ngo-register" element={<NGORegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/worker-dashboard" element={<WorkerDashboard />} />
      <Route path="/worker-profile" element={<WorkerProfile />} />
      <Route path="/available-jobs" element={<AvailableJobs />} />
      <Route path="/job-details" element={<JobDetails />} />
    </Routes>
  );
}

export default App;