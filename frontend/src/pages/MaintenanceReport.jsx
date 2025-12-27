import { useEffect, useState } from "react";

export default function MaintenanceReport() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("maintenanceRequests")) || [];
    setRequests(data);
  }, []);

  const total = requests.length;
  const newReq = requests.filter(r => !r.status || r.status === "New").length;
  const inProgress = requests.filter(r => r.status === "In Progress").length;
  const repaired = requests.filter(r => r.status === "Repaired").length;
  const scrap = requests.filter(r => r.status === "Scrap").length;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white border rounded-xl p-6">

        {/* HEADER */}
        <div className="border-b pb-3 mb-6">
          <h2 className="text-lg font-semibold">
            Maintenance Process Report
          </h2>
          <p className="text-sm text-gray-500">
            Dummy report to track maintenance lifecycle
          </p>
        </div>

        {/* KPI SUMMARY */}
        <div className="grid grid-cols-5 gap-4 mb-8 text-center text-sm">
          <KPI title="Total Requests" value={total} />
          <KPI title="New" value={newReq} />
          <KPI title="In Progress" value={inProgress} />
          <KPI title="Repaired" value={repaired} />
          <KPI title="Scrap" value={scrap} />
        </div>

        {/* PROCESS FLOW */}
        <div className="mb-8">
          <h3 className="font-medium mb-3">Process Flow</h3>
          <div className="flex items-center gap-4 text-sm">
            <Flow label="New" />
            <Arrow />
            <Flow label="In Progress" />
            <Arrow />
            <Flow label="Repaired" />
            <Arrow />
            <Flow label="Scrap" />
          </div>
        </div>

        {/* REPORT TABLE */}
        <h3 className="font-medium mb-3">Request Details</h3>

        <table className="w-full text-sm">
          <thead className="border-b text-gray-600">
            <tr>
              <th className="py-2">Subject</th>
              <th>Equipment</th>
              <th>Technician</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody>
            {requests.length === 0 && (
              <tr>
                <td colSpan="6" className="py-6 text-center text-gray-500">
                  No data available (dummy report)
                </td>
              </tr>
            )}

            {requests.map((r) => (
              <tr key={r.id} className="border-b hover:bg-gray-50">
                <td className="py-2">{r.subject}</td>
                <td>{r.equipment}</td>
                <td>{r.technician || "-"}</td>
                <td>{r.priority}</td>
                <td>{r.status || "New"}</td>
                <td>
                  {r.createdAt
                    ? new Date(r.createdAt).toLocaleDateString()
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function KPI({ title, value }) {
  return (
    <div className="border rounded p-3 bg-gray-50">
      <p className="text-gray-500">{title}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

function Flow({ label }) {
  return (
    <div className="border rounded px-4 py-2 bg-white">
      {label}
    </div>
  );
}

function Arrow() {
  return <span className="text-gray-400">→</span>;
}
