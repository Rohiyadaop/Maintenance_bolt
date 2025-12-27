import { useNavigate } from "react-router-dom";

export default function WorkCenters() {
  const navigate = useNavigate();

  const workCenters = [
    {
      name: "Assembly 1",
      code: "ASM-01",
      tag: "Assembly",
      alternatives: "",
      costPerHour: 1.0,
      capacity: 1.0,
      timeEfficiency: 100.0,
      oeeTarget: 34.59,
    },
    {
      name: "Drill 1",
      code: "DRL-01",
      tag: "Drilling",
      alternatives: "",
      costPerHour: 1.0,
      capacity: 1.0,
      timeEfficiency: 100.0,
      oeeTarget: 90.0,
    },
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
          <span className="font-medium">Work Center</span>
        </div>

        {/* TABLE */}
        <table className="w-full text-sm">
          <thead className="border-b text-left">
            <tr>
              <th className="py-2">Work Center</th>
              <th>Code</th>
              <th>Tag</th>
              <th>Alternative Workcenters</th>
              <th>Cost per hour</th>
              <th>Capacity</th>
              <th>Time Efficiency</th>
              <th>OEE Target</th>
            </tr>
          </thead>

          <tbody>
            {workCenters.map((wc, index) => (
              <tr
                key={index}
                onClick={() => navigate(`/work-center/${index}`)}
                className="border-b hover:bg-gray-50 cursor-pointer"
              >
                <td className="py-2">{wc.name}</td>
                <td>{wc.code}</td>
                <td>{wc.tag}</td>
                <td>{wc.alternatives || "-"}</td>
                <td>{wc.costPerHour.toFixed(2)}</td>
                <td>{wc.capacity.toFixed(2)}</td>
                <td>{wc.timeEfficiency.toFixed(2)}</td>
                <td>{wc.oeeTarget.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
