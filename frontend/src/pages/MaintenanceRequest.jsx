import { useState } from "react";
import { useParams } from "react-router-dom";

export default function MaintenanceRequest() {
  const { id } = useParams();
  const [equipmentType, setEquipmentType] = useState("workcenter");
  const [activeTab, setActiveTab] = useState("Notes");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Maintenance Requests</h2>
            <p className="text-gray-500 mt-1">Test activity</p>
          </div>
          <div className="text-sm text-gray-600 mt-2 md:mt-0">
            <span className="font-medium text-gray-700">Status:</span> 
            <span className="ml-1 text-blue-600">New Request &gt; In Progress &gt; Repaired &gt; Scrap</span>
          </div>
        </div>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <div className="space-y-5">
            {/* Subject */}
            <div>
              <label className="text-sm text-gray-500">Subject</label>
              <p className="font-semibold text-gray-800 mt-1">Test activity</p>
            </div>

            {/* Created By */}
            <div>
              <label className="text-sm text-gray-500">Created By</label>
              <p className="mt-1 text-gray-700">Mitchell Admin</p>
            </div>

            {/* Maintenance For */}
            <div>
              <label className="text-sm text-gray-500">Maintenance For</label>
              <p className="mt-1 text-gray-700">Equipment</p>
            </div>

            {/* Equipment Type Selector */}
            <div>
              <label className="text-sm text-gray-500">Equipment Type</label>
              <select
                value={equipmentType}
                onChange={(e) => setEquipmentType(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="workcenter">Workcenter</option>
                <option value="machine">Machines & Tools</option>
              </select>
            </div>

            {/* Conditional Equipment Field */}
            {equipmentType === "workcenter" && (
              <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                <label className="text-sm text-gray-500">Workcenter</label>
                <p className="font-medium mt-1 text-gray-800">Acer Laptop LP/203/19281928</p>
              </div>
            )}

            {equipmentType === "machine" && (
              <div className="mt-2 p-3 bg-green-50 rounded-lg">
                <label className="text-sm text-gray-500">Machine / Tool</label>
                <p className="font-medium mt-1 text-gray-800">Lathe Machine – LT-09</p>
              </div>
            )}

            {/* Category */}
            <div>
              <label className="text-sm text-gray-500">Category</label>
              <p className="mt-1 text-gray-700">Computers</p>
            </div>

            {/* Request Date */}
            <div>
              <label className="text-sm text-gray-500">Request Date</label>
              <p className="mt-1 text-gray-700">12/18/2025</p>
            </div>

            {/* Maintenance Type */}
            <div>
              <label className="text-sm text-gray-500">Maintenance Type</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input type="radio" checked readOnly className="accent-blue-500" />
                  Corrective
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" readOnly className="accent-blue-500" />
                  Preventive
                </label>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5">
            <div>
              <label className="text-sm text-gray-500">Team</label>
              <p className="mt-1 text-gray-700">Internal Maintenance</p>
            </div>

            <div>
              <label className="text-sm text-gray-500">Technician</label>
              <p className="mt-1 text-gray-700">Aka Foster</p>
            </div>

            <div>
              <label className="text-sm text-gray-500">Scheduled Date</label>
              <p className="mt-1 text-gray-700">12/28/2025 14:30:00</p>
            </div>

            <div>
              <label className="text-sm text-gray-500">Duration</label>
              <p className="mt-1 text-gray-700">00:00 hours</p>
            </div>

            <div>
              <label className="text-sm text-gray-500">Priority</label>
              <div className="flex gap-2 mt-2">
                <span className="w-5 h-5 bg-red-500 rounded-full" title="High"></span>
                <span className="w-5 h-5 bg-yellow-400 rounded-full" title="Medium"></span>
                <span className="w-5 h-5 bg-green-400 rounded-full" title="Low"></span>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">Company</label>
              <p className="mt-1 text-gray-700">My Company (San Francisco)</p>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-8 border-t pt-4 flex gap-4 text-sm">
          {["Notes", "Instructions"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === tab
                  ? "bg-blue-500 text-white shadow"
                  : "border bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-inner min-h-[100px]">
          {activeTab === "Notes" ? (
            <p className="text-gray-700">No notes yet.</p>
          ) : (
            <p className="text-gray-700">No instructions yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
