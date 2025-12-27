// import { useState } from "react";
// import { useParams } from "react-router-dom";

// export default function MaintenanceRequest() {
//   const { id } = useParams();
//   const [equipmentType, setEquipmentType] = useState("workcenter");
//   const [activeTab, setActiveTab] = useState("Notes");

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 p-6">
//       <div className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto">

//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 mb-6">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">Maintenance Requests</h2>
//             <p className="text-gray-500 mt-1">Test activity</p>
//           </div>
//           <div className="text-sm text-gray-600 mt-2 md:mt-0">
//             <span className="font-medium text-gray-700">Status:</span> 
//             <span className="ml-1 text-blue-600">New Request &gt; In Progress &gt; Repaired &gt; Scrap</span>
//           </div>
//         </div>

//         {/* FORM GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//           {/* LEFT SIDE */}
//           <div className="space-y-5">
//             {/* Subject */}
//             <div>
//               <label className="text-sm text-gray-500">Subject</label>
//               <p className="font-semibold text-gray-800 mt-1">Test activity</p>
//             </div>

//             {/* Created By */}
//             <div>
//               <label className="text-sm text-gray-500">Created By</label>
//               <p className="mt-1 text-gray-700">Mitchell Admin</p>
//             </div>

//             {/* Maintenance For */}
//             <div>
//               <label className="text-sm text-gray-500">Maintenance For</label>
//               <p className="mt-1 text-gray-700">Equipment</p>
//             </div>

//             {/* Equipment Type Selector */}
//             <div>
//               <label className="text-sm text-gray-500">Equipment Type</label>
//               <select
//                 value={equipmentType}
//                 onChange={(e) => setEquipmentType(e.target.value)}
//                 className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               >
//                 <option value="workcenter">Workcenter</option>
//                 <option value="machine">Machines & Tools</option>
//               </select>
//             </div>

//             {/* Conditional Equipment Field */}
//             {equipmentType === "workcenter" && (
//               <div className="mt-2 p-3 bg-blue-50 rounded-lg">
//                 <label className="text-sm text-gray-500">Workcenter</label>
//                 <p className="font-medium mt-1 text-gray-800">Acer Laptop LP/203/19281928</p>
//               </div>
//             )}

//             {equipmentType === "machine" && (
//               <div className="mt-2 p-3 bg-green-50 rounded-lg">
//                 <label className="text-sm text-gray-500">Machine / Tool</label>
//                 <p className="font-medium mt-1 text-gray-800">Lathe Machine – LT-09</p>
//               </div>
//             )}

//             {/* Category */}
//             <div>
//               <label className="text-sm text-gray-500">Category</label>
//               <p className="mt-1 text-gray-700">Computers</p>
//             </div>

//             {/* Request Date */}
//             <div>
//               <label className="text-sm text-gray-500">Request Date</label>
//               <p className="mt-1 text-gray-700">12/18/2025</p>
//             </div>

//             {/* Maintenance Type */}
//             <div>
//               <label className="text-sm text-gray-500">Maintenance Type</label>
//               <div className="flex gap-4 mt-2">
//                 <label className="flex items-center gap-2">
//                   <input type="radio" checked readOnly className="accent-blue-500" />
//                   Corrective
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="radio" readOnly className="accent-blue-500" />
//                   Preventive
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="space-y-5">
//             <div>
//               <label className="text-sm text-gray-500">Team</label>
//               <p className="mt-1 text-gray-700">Internal Maintenance</p>
//             </div>

//             <div>
//               <label className="text-sm text-gray-500">Technician</label>
//               <p className="mt-1 text-gray-700">Aka Foster</p>
//             </div>

//             <div>
//               <label className="text-sm text-gray-500">Scheduled Date</label>
//               <p className="mt-1 text-gray-700">12/28/2025 14:30:00</p>
//             </div>

//             <div>
//               <label className="text-sm text-gray-500">Duration</label>
//               <p className="mt-1 text-gray-700">00:00 hours</p>
//             </div>

//             <div>
//               <label className="text-sm text-gray-500">Priority</label>
//               <div className="flex gap-2 mt-2">
//                 <span className="w-5 h-5 bg-red-500 rounded-full" title="High"></span>
//                 <span className="w-5 h-5 bg-yellow-400 rounded-full" title="Medium"></span>
//                 <span className="w-5 h-5 bg-green-400 rounded-full" title="Low"></span>
//               </div>
//             </div>

//             <div>
//               <label className="text-sm text-gray-500">Company</label>
//               <p className="mt-1 text-gray-700">My Company (San Francisco)</p>
//             </div>
//           </div>
//         </div>

//         {/* TABS */}
//         <div className="mt-8 border-t pt-4 flex gap-4 text-sm">
//           {["Notes", "Instructions"].map((tab) => (
//             <button
//               key={tab}
//               className={`px-4 py-2 rounded-md font-medium ${
//                 activeTab === tab
//                   ? "bg-blue-500 text-white shadow"
//                   : "border bg-white text-gray-700 hover:bg-gray-50"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Tab Content */}
//         <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-inner min-h-[100px]">
//           {activeTab === "Notes" ? (
//             <p className="text-gray-700">No notes yet.</p>
//           ) : (
//             <p className="text-gray-700">No instructions yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MaintenanceRequest() {
  const { id } = useParams();
  const [request, setRequest] = useState(null);
  const [equipmentType, setEquipmentType] = useState("workcenter");
  const [activeTab, setActiveTab] = useState("Notes");

  /* LOAD REQUEST BY ID */
  useEffect(() => {
    const all =
      JSON.parse(localStorage.getItem("maintenanceRequests")) || [];

    const found = all.find((r) => String(r.id) === id);
    setRequest(found);
  }, [id]);

  if (!request) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Request not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold">Maintenance Requests</h2>
            <p className="text-gray-500 mt-1">{request.subject}</p>
          </div>
          <div className="text-sm text-blue-600">
            New Request → In Progress → Repaired → Scrap
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="space-y-4">
            <Field label="Subject" value={request.subject} />
            <Field label="Created By" value={request.createdBy || "-"} />
            <Field label="Maintenance For" value="Equipment" />

            <div>
              <label className="text-sm text-gray-500">Equipment Type</label>
              <select
                value={equipmentType}
                onChange={(e) => setEquipmentType(e.target.value)}
                className="w-full mt-1 border rounded px-3 py-2"
              >
                <option value="workcenter">Workcenter</option>
                <option value="machine">Machines & Tools</option>
              </select>
            </div>

            <Field
              label={equipmentType === "workcenter" ? "Workcenter" : "Machine"}
              value={request.equipment}
            />

            <Field label="Category" value={request.category || "-"} />
            <Field label="Request Date" value={request.requestDate || "-"} />

            <div>
              <label className="text-sm text-gray-500">Maintenance Type</label>
              <div className="flex gap-4 mt-1">
                <Radio checked={request.maintenanceType === "Corrective"} label="Corrective" />
                <Radio checked={request.maintenanceType === "Preventive"} label="Preventive" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            <Field label="Team" value={request.team || "-"} />
            <Field label="Technician" value={request.technician || "-"} />
            <Field label="Scheduled Date" value={request.scheduledDate || "-"} />
            <Field label="Duration" value={request.duration || "-"} />
            <Field label="Priority" value={request.priority} />
            <Field label="Company" value={request.company || "-"} />
          </div>
        </div>

        {/* TABS */}
        <div className="mt-8 flex gap-3 border-t pt-4">
          {["Notes", "Instructions"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded min-h-[100px]">
          {activeTab === "Notes"
            ? request.notes || "No notes"
            : request.instructions || "No instructions"}
        </div>

      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Field({ label, value }) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      <p className="mt-1 text-gray-800">{value}</p>
    </div>
  );
}

function Radio({ checked, label }) {
  return (
    <label className="flex items-center gap-2">
      <input type="radio" checked={checked} readOnly />
      {label}
    </label>
  );
}
