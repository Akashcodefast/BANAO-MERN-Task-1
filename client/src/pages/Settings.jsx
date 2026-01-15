import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Settings() {
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setName(localStorage.getItem("profile_name") || "");
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  const save = () => {
    localStorage.setItem("profile_name", name);
    localStorage.setItem("theme", theme);
    alert("Settings saved");
  };

  return (
    <DashboardLayout>
      {/* PAGE HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage your personal preferences
        </p>
      </div>

      {/* CARD */}
      <div className="max-w-md bg-[#141414] rounded-2xl p-6 shadow-xl">

        {/* NAME */}
        <div className="mb-5">
          <label className="block text-sm text-gray-400 mb-2">
            Profile Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-md
                       bg-[#111] text-white
                       placeholder:text-white/40
                       border border-white/15
                       outline-none focus:border-purple-500"
          />
        </div>

        {/* THEME */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">
            Theme Preference
          </label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full px-4 py-3 rounded-md
                       bg-[#111] text-white
                       border border-white/15
                       outline-none focus:border-purple-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={save}
          className="w-full py-3 rounded-md
                     bg-gradient-to-r from-pink-400 to-purple-500
                     text-white font-medium
                     hover:opacity-90 transition"
        >
          Save Changes
        </button>
      </div>
    </DashboardLayout>
  );
}
