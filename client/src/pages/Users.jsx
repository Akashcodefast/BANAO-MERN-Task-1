import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4 text-white">Users</h1>

      <input
        className="mb-4 w-full max-w-sm px-4 py-2 rounded-md
                   bg-[#111] text-white placeholder:text-white/40
                   border border-white/15 outline-none
                   focus:border-purple-500"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="bg-[#141414] rounded-xl overflow-hidden">
        {filtered.map((u) => (
          <div
            key={u.id}
            className="px-4 py-3 border-b border-white/10
                       text-white last:border-b-0"
          >
            <div className="font-medium">{u.name}</div>
            <div className="text-sm text-gray-400">{u.email}</div>
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
