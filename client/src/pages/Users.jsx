import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";
import DashboardLayout from "../components/DashboardLayout";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchUsers().then((res) => setUsers(res.data));
  }, []);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Users</h1>

      <input
        className="p-2 border mb-4 w-full max-w-sm"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="bg-white rounded shadow">
        {filtered.map((u) => (
          <div
            key={u.id}
            className="border-b p-3 last:border-b-0"
          >
            {u.name} — {u.email}
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="p-4 text-gray-500">
            No users found
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
