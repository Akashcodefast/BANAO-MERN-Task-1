import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <h1 className="text-lg font-semibold">SaaS Dashboard</h1>

      <button
        onClick={logout}
        className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
}
