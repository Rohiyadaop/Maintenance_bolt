import { useNavigate } from "react-router-dom";

export default function TeamsList() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white border rounded-xl p-6">

        {/* HEADER */}
        <div className="flex items-center gap-4 border-b pb-3 mb-4 text-sm">
          <button
            onClick={() => navigate("/add-team")}
            className="border px-3 py-1 rounded"
          >
            New
          </button>
          <span className="font-medium">Teams</span>
        </div>

        {/* TABLE */}
        <table className="w-full text-sm">
          <thead className="border-b">
            <tr className="text-left">
              <th className="py-2">Team Name</th>
              <th>Team Members</th>
              <th>Company</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2">Internal Maintenance</td>
              <td>Anas Makori</td>
              <td>My Company (San Francisco)</td>
            </tr>

            <tr className="border-b hover:bg-gray-50">
              <td className="py-2">Metrology</td>
              <td>Marc Demo</td>
              <td>My Company (San Francisco)</td>
            </tr>

            <tr className="border-b hover:bg-gray-50">
              <td className="py-2">Subcontractor</td>
              <td>Maggie Davidson</td>
              <td>My Company (San Francisco)</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}
