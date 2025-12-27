import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MaintenanceRequestForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    subject: "",
    createdBy: "",
    maintenanceFor: "Equipment",
    equipment: "",
    category: "",
    requestDate: "",
    maintenanceType: "Corrective",
    team: "",
    technician: "",
    scheduledDate: "",
    duration: "",
    priority: "Medium",
    company: "",
    notes: "",
    instructions: "",
  });

  const update = (key, value) =>
    setForm({ ...form, [key]: value });

  /* -------- SAVE HANDLER -------- */
  const handleSave = () => {
    // Basic validation
    if (!form.subject || !form.equipment || !form.requestDate) {
      alert("Please fill Subject, Equipment, and Request Date.");
      return;
    }

    // Get existing requests
    const existing =
      JSON.parse(localStorage.getItem("maintenanceRequests")) || [];

    // Add new request
    const updated = [
      ...existing,
      {
        id: Date.now(),
        ...form,
        createdAt: new Date().toISOString(),
      },
    ];

    // Save to localStorage
    localStorage.setItem(
      "maintenanceRequests",
      JSON.stringify(updated)
    );

    alert("Maintenance request saved successfully.");

    // Redirect (or reset form)
    navigate("/dashboard"); // change if needed
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white border rounded-xl p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center border-b pb-3 mb-6 text-sm">
          <div className="flex gap-3 items-center">
            <button className="border px-3 py-1 rounded">New</button>
            <span className="font-medium">Maintenance Request</span>
          </div>
        </div>

        {/* SUBJECT */}
        <div className="mb-6">
          <label className="block text-sm mb-1">Subject *</label>
          <input
            type="text"
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className="w-full border-b outline-none px-1 py-1"
            placeholder="Test activity"
          />
        </div>

        {/* FORM GRID */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-5 text-sm">

          {/* LEFT */}
          <div className="space-y-4">
            <Input label="Created By" value={form.createdBy} onChange={(e)=>update("createdBy",e.target.value)} />
            <Input label="Equipment *" value={form.equipment} onChange={(e)=>update("equipment",e.target.value)} />
            <Input label="Category" value={form.category} onChange={(e)=>update("category",e.target.value)} />

            <Input
              label="Request Date *"
              type="date"
              value={form.requestDate}
              onChange={(e)=>update("requestDate",e.target.value)}
            />

            <div>
              <label className="block mb-1">Maintenance Type</label>
              <div className="flex gap-4">
                {["Corrective", "Preventive"].map((type) => (
                  <label key={type} className="flex items-center gap-1">
                    <input
                      type="radio"
                      checked={form.maintenanceType === type}
                      onChange={() => update("maintenanceType", type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            <Input label="Team" value={form.team} onChange={(e)=>update("team",e.target.value)} />
            <Input label="Technician" value={form.technician} onChange={(e)=>update("technician",e.target.value)} />

            <Input
              label="Scheduled Date"
              type="datetime-local"
              value={form.scheduledDate}
              onChange={(e)=>update("scheduledDate",e.target.value)}
            />

            <Input label="Duration" value={form.duration} onChange={(e)=>update("duration",e.target.value)} />

            <Select
              label="Priority"
              value={form.priority}
              onChange={(e)=>update("priority",e.target.value)}
              options={["Low", "Medium", "High"]}
            />

            <Input label="Company" value={form.company} onChange={(e)=>update("company",e.target.value)} />
          </div>
        </div>

        {/* NOTES */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          <Textarea label="Notes" value={form.notes} onChange={(e)=>update("notes",e.target.value)} />
          <Textarea label="Instructions" value={form.instructions} onChange={(e)=>update("instructions",e.target.value)} />
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={handleSave}
            className="border px-4 py-1 rounded hover:bg-gray-100"
          >
            Save
          </button>
          <button
            onClick={() => navigate(-1)}
            className="border px-4 py-1 rounded hover:bg-gray-100"
          >
            Discard
          </button>
        </div>

      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Input({ label, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full border-b outline-none px-1 py-0.5"
      />
    </div>
  );
}

function Select({ label, value, options, onChange }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full border-b outline-none px-1 py-0.5 bg-transparent"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function Textarea({ label, value, onChange }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        className="w-full border rounded p-2 h-28 resize-none"
      />
    </div>
  );
}
