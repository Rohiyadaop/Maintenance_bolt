import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MaintenanceRequest from "./pages/MaintenanceRequest";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Reports from "./pages/Reports";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/reports" element={<Reports />} />
<Route path="/request/:id" element={<MaintenanceRequest />} />
    </Routes>
  );
}

