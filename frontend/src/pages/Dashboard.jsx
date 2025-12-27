import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [openNew, setOpenNew] = useState(false);
  const [requests, setRequests] = useState([]);

  /* -------- LOAD SAVED REQUESTS -------- */
  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("maintenanceRequests")) || [];
    setRequests(saved);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow p-6">

        {/* TOP TABS */}
        <div className="flex gap-6 border-b pb-3 mb-6 text-sm font-medium">
          <Link
            to="/dashboard"
            className="text-blue-600 border-b-2 border-blue-600 pb-1"
          >
            Maintenance
          </Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/calendar">Maintenance Calendar</Link>
          <Link to="/equipment">Equipment</Link>
          <Link to="/reporting">Reporting</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/work-centers">Work Centers</Link>
        </div>

        {/* ACTION BAR */}
        <div className="flex justify-between items-center mb-6">
          {/* NEW BUTTON */}
          <div className="relative">
            <button
              onClick={() => setOpenNew(!openNew)}
              className="border px-4 py-1 rounded hover:bg-gray-100"
            >
              New
            </button>

            {openNew && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
                <button
                  onClick={() => navigate("/add-activity")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Add Activity
                </button>
                <button
                  onClick={() => navigate("/add-team")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Add Team
                </button>
                <button
                  onClick={() => navigate("/equipment")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Add Equipment
                </button>
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1 w-64 outline-none"
          />
        </div>

        {/* TABLE */}
        <table className="w-full text-sm">
          <thead className="border-b text-gray-600">
            <tr>
              <th className="py-2">Subject</th>
              <th>Employee</th>
              <th>Technician</th>
              <th>Category</th>
              <th>Stage</th>
              <th>Company</th>
            </tr>
          </thead>

          <tbody>
            {requests.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500"
                >
                  No maintenance requests found
                </td>
              </tr>
            )}

            {requests.map((req) => (
              <tr
                key={req.id}
                onClick={() => navigate(`/request/${req.id}`)}
                className="border-b cursor-pointer hover:bg-gray-50"
              >
                <td className="py-2">{req.subject}</td>
                <td>{req.createdBy || "-"}</td>
                <td>{req.technician || "-"}</td>
                <td>{req.category || "-"}</td>
                <td>New Request</td>
                <td>{req.company || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
