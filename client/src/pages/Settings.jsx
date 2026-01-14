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
    alert("Saved");
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      <div className="bg-white p-6 rounded shadow max-w-md">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border mb-4"
          placeholder="Name"
        />

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="w-full p-2 border mb-4"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        <button
          onClick={save}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </DashboardLayout>
  );
}
