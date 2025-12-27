import { useNavigate } from "react-router-dom";

export default function EquipmentList() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white border rounded-xl p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center border-b pb-3 mb-4 text-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/add-equipment")}
              className="border px-3 py-1 rounded"
            >
              New
            </button>
            <span className="font-medium">Equipment</span>
          </div>

          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1 w-60 outline-none"
          />
        </div>

        {/* TABLE */}
        <table className="w-full text-sm">
          <thead className="border-b">
            <tr className="text-left">
              <th className="py-2">Equipment Name</th>
              <th>Employee</th>
              <th>Department</th>
              <th>Serial Number</th>
              <th>Technician</th>
              <th>Equipment Category</th>
              <th>Company</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2">Samsung Monitor 15"</td>
              <td>Tejas Modi</td>
              <td>Admin</td>
              <td>MT/125/2278837</td>
              <td>Mitchell Admin</td>
              <td>Monitors</td>
              <td>My Company (San Francisco)</td>
            </tr>

            <tr className="border-b hover:bg-gray-50">
              <td className="py-2">Acer Laptop</td>
              <td>Bhaumik P</td>
              <td>Technician</td>
              <td>MT/122/111222</td>
              <td>Marc Demo</td>
              <td>Computers</td>
              <td>My Company (San Francisco)</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}
