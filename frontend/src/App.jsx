import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MaintenanceRequest from "./pages/MaintenanceRequest";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Reports from "./pages/Reports";
import Signup from "./pages/Signup";
import NewEquipment from "./pages/NewEquipment";
import EquipmentList from "./pages/EquipmentList";
import TeamsList from "./pages/TeamList";
import AddTeam from "./pages/AddTeam";
import MaintenanceCalendar from "./pages/MaintenanceCalendar";
import EquipmentCategories from "./pages/EquipmentCategories";
import NewMaintenanceRequest from "./pages/NewMaintenanceRequest";
import WorkCenters from "./pages/WorkCenter";
import MaintenanceReport from "./pages/MaintenanceReport";




export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/request/:id" element={<MaintenanceRequest />} />
      <Route path="/add-activity" element={<NewMaintenanceRequest />} />
      <Route path="/teams" element={<TeamsList />} />
      <Route path="/add-team" element={<AddTeam />} />
      <Route path="/equipment" element={<EquipmentList />} />
      <Route path="/add-equipment" element={<NewEquipment />} />
      <Route path="/calendar" element={<MaintenanceCalendar />} />
      <Route path="/equipment-categories" element={<EquipmentCategories />} />
      <Route path="/work-centers" element={<WorkCenters />} />
      <Route path="/reporting" element={<MaintenanceReport />} />
    </Routes>
  );
}
