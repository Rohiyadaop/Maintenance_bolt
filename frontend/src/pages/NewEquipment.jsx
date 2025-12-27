import { useNavigate } from "react-router-dom";

export default function NewEquipment() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white border rounded-xl p-6">

        {/* HEADER */}
        <div className="flex items-center gap-4 border-b pb-3 mb-6 text-sm">
          <button className="border px-3 py-1 rounded">New</button>
          <span className="font-medium">Equipment</span>
        </div>

        {/* FORM GRID */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-5 text-sm">

          {/* LEFT COLUMN */}
          <div className="space-y-4">
            <Field label="Name?" placeholder="Samsung Monitor 15”" />

            {/* CLICKABLE EQUIPMENT CATEGORY */}
            <ClickableField
              label="Equipment Category?"
              value="Monitors"
              onClick={() => navigate("/equipment-categories")}
            />

            <Field label="Company?" placeholder="My Company (San Francisco)" />
            <SelectField label="Used By?" options={["Employee", "Department"]} />
            <Field label="Maintenance Team?" placeholder="Internal Maintenance" />
            <Field label="Assigned Date?" placeholder="12/24/2025" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            <Field label="Technician?" placeholder="Mitchell Admin" />
            <Field label="Employee?" placeholder="Abigail Peterson" />
            <Field label="Scrap Date?" />
            <Field label="Used in location?" />
            <Field label="Work Center?" />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-8">
          <label className="block text-sm mb-1">Description</label>
          <textarea className="w-full border rounded p-2 h-24 resize-none" />
        </div>

      </div>
    </div>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function Field({ label, placeholder }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border-b outline-none px-1 py-0.5"
      />
    </div>
  );
}

/* CLICKABLE FIELD */
function ClickableField({ label, value, onClick }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <input
        type="text"
        value={value}
        readOnly
        onClick={onClick}
        className="w-full border-b outline-none px-1 py-0.5 cursor-pointer hover:bg-gray-50"
      />
    </div>
  );
}

function SelectField({ label, options }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <select className="w-full border-b outline-none px-1 py-0.5 bg-transparent">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
