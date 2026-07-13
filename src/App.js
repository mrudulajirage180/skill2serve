import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import WorkerRegister from "./pages/WorkerRegister/WorkerRegister";
import NGORegister from "./pages/NGORegister/NGORegister";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/worker-register" element={<WorkerRegister />} />
      <Route path="/ngo-register" element={<NGORegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;