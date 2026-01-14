import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const base =
    "block px-4 py-2 rounded text-sm font-medium transition";

  return (
    <aside className="w-56 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-lg font-semibold mb-6">SaaS Admin</h2>

      <nav className="space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${base} ${
              isActive ? "bg-purple-600" : "hover:bg-gray-800"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `${base} ${
              isActive ? "bg-purple-600" : "hover:bg-gray-800"
            }`
          }
        >
          Users
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${base} ${
              isActive ? "bg-purple-600" : "hover:bg-gray-800"
            }`
          }
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
