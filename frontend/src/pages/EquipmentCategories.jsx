import { useNavigate } from "react-router-dom";

export default function EquipmentCategories() {
  const navigate = useNavigate();

  const categories = [
    "Monitors",
    "Computers",
    "Printers",
    "Networking Devices",
    "Machinery",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white border rounded-xl p-6">

        {/* HEADER */}
        <div className="flex items-center gap-4 border-b pb-3 mb-4 text-sm">
          <button
            onClick={() => navigate(-1)}
            className="border px-3 py-1 rounded"
          >
            Back
          </button>
          <span className="font-medium">Equipment Categories</span>
        </div>

        {/* ACTION BAR */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => navigate("/add-equipment-category")}
            className="border px-4 py-1 rounded hover:bg-gray-100"
          >
            New
          </button>

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
              <th className="py-2">Category Name</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <tr
                key={cat}
                onClick={() => navigate(-1)}
                className="border-b cursor-pointer hover:bg-gray-50"
              >
                <td className="py-2">{cat}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
