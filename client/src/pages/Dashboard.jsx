import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";
import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((res) => {
        setUsersCount(res.data.length);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
  <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
    {/* Spinner */}
    <div className="w-10 h-10 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-6"></div>

    {/* Text */}
    <p className="text-gray-400 text-sm tracking-wide">
      Loading, please wait...
    </p>
  </div>
);

  }

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Users" value={usersCount} />
        <Card title="Active Projects" value="12" />
        <Card title="Revenue" value="$4,200" />
      </div>
    </DashboardLayout>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
}
