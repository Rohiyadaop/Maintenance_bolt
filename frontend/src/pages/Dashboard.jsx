import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow p-6">

        {/* TOP TABS */}
        <div className="flex gap-6 border-b pb-3 mb-6 text-sm font-medium">
          <Link to="/dashboard" className="text-blue-600 border-b-2 border-blue-600 pb-1">
            Maintenance
          </Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/calendar">Maintenance Calendar</Link>
          <Link to="/equipment">Equipment</Link>
          <Link to="/reporting">Reporting</Link>
          <Link to="/teams">Teams</Link>
        </div>

        {/* ACTION BAR */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate("/new-request")}
            className="border px-4 py-1 rounded hover:bg-gray-100"
          >
            New
          </button>

          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1 w-64 outline-none"
          />
        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-3 gap-6 mb-8">

          <div
            onClick={() => navigate("/equipment")}
            className="cursor-pointer border border-red-400 text-red-600 rounded-lg p-4 text-center hover:bg-red-50"
          >
            <p className="font-semibold">Critical Equipment</p>
            <p className="text-lg mt-2">5 Units</p>
            <p className="text-sm">(Health &lt; 30%)</p>
          </div>

          <div
            onClick={() => navigate("/teams")}
            className="cursor-pointer border border-blue-400 text-blue-600 rounded-lg p-4 text-center hover:bg-blue-50"
          >
            <p className="font-semibold">Technician Load</p>
            <p className="text-lg mt-2">85% Utilized</p>
            <p className="text-sm">(Assign Carefully)</p>
          </div>

          <div
            onClick={() => navigate("/dashboard")}
            className="cursor-pointer border border-green-400 text-green-600 rounded-lg p-4 text-center hover:bg-green-50"
          >
            <p className="font-semibold">Open Requests</p>
            <p className="text-lg mt-2">12 Pending</p>
            <p className="text-sm">3 Overdue</p>
          </div>

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
            <tr
              onClick={() => navigate("/request/1")}
              className="border-b cursor-pointer hover:bg-gray-50"
            >
              <td className="py-2">Test activity</td>
              <td>Mitchell Admin</td>
              <td>Aka Foster</td>
              <td>Computer</td>
              <td>New Request</td>
              <td>My company</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}
