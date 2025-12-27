import { useState } from "react";

export default function MaintenanceCalendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  const [selectedDay, setSelectedDay] = useState(18);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow p-6">

        {/* HEADER */}
        <h1 className="text-lg font-semibold mb-4">
          Maintenance Calendar
        </h1>

        {/* TOP CONTROLS */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 text-sm">
            <button className="border px-3 py-1 rounded hover:bg-gray-100">
              Week
            </button>
            <button className="border px-3 py-1 rounded hover:bg-gray-100">
              Today
            </button>
            <span className="ml-4 font-medium">
              December 2025 · Week 51
            </span>
          </div>
        </div>

        {/* CALENDAR LAYOUT */}
        <div className="grid grid-cols-[1fr_260px] gap-4">

          {/* MAIN CALENDAR */}
          <div className="border rounded overflow-hidden">

            {/* DAYS HEADER */}
            <div className="grid grid-cols-8 border-b text-sm bg-gray-50">
              <div className="p-2"></div>
              {days.map((day, i) => (
                <div
                  key={day}
                  className={`p-2 text-center ${
                    i === 4 ? "text-red-600 font-semibold" : ""
                  }`}
                >
                  {day}
                  <div
                    className={`mt-1 w-6 h-6 mx-auto rounded-full flex items-center justify-center text-xs ${
                      i === 4
                        ? "bg-red-500 text-white"
                        : "text-gray-600"
                    }`}
                  >
                    {14 + i}
                  </div>
                </div>
              ))}
            </div>

            {/* TIME GRID */}
            <div className="h-[520px] overflow-y-auto">
              {hours.map((hour) => (
                <div
                  key={hour}
                  className="grid grid-cols-8 border-b text-xs"
                >
                  <div className="p-2 text-right pr-3 text-gray-500">
                    {hour}
                  </div>
                  {days.map((_, i) => (
                    <div
                      key={i}
                      className="border-l h-12 hover:bg-blue-50 cursor-pointer"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT MINI CALENDAR */}
          <div className="border rounded p-3 text-sm">
            <div className="flex justify-between items-center mb-2">
              <button>{"<"}</button>
              <span className="font-medium">December 2025</span>
              <button>{">"}</button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {days.map((d) => (
                <div key={d} className="font-medium">
                  {d[0]}
                </div>
              ))}

              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedDay(i + 1)}
                  className={`p-1 rounded cursor-pointer ${
                    selectedDay === i + 1
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
