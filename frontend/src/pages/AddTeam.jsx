import { useNavigate } from "react-router-dom";

export default function AddTeam() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white border rounded-xl p-6">

        {/* HEADER */}
        <div className="flex items-center gap-4 border-b pb-3 mb-6 text-sm">
          <button
            onClick={() => navigate("/teams")}
            className="border px-3 py-1 rounded"
          >
            Back
          </button>
          <span className="font-medium">New Team</span>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-5 text-sm">

          {/* LEFT COLUMN */}
          <div className="space-y-4">
            <Field label="Team Name?" placeholder="Internal Maintenance" />

            <Field
              label="Company?"
              placeholder="My Company (San Francisco)"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            <MultiSelectField
              label="Team Members?"
              placeholder="Select team members"
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-8">
          <label className="block text-sm mb-1">Description</label>
          <textarea
            className="w-full border rounded p-2 h-24 resize-none"
          />
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3 mt-6">
          <button className="border px-4 py-1 rounded hover:bg-gray-100">
            Save
          </button>
          <button
            onClick={() => navigate("/teams")}
            className="border px-4 py-1 rounded hover:bg-gray-100"
          >
            Discard
          </button>
        </div>

      </div>
    </div>
  );
}

/* ---------- REUSABLE FIELDS ---------- */

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

function MultiSelectField({ label, placeholder }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <select
        multiple
        className="w-full border rounded px-2 py-1 h-24 outline-none"
      >
        <option>Anas Makori</option>
        <option>Marc Demo</option>
        <option>Maggie Davidson</option>
        <option>Mitchell Admin</option>
      </select>
      <p className="text-xs text-gray-500 mt-1">
        Hold Ctrl / Cmd to select multiple
      </p>
    </div>
  );
}
