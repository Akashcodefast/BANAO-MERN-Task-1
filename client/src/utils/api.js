const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchUsers = async () => {
  const res = await fetch(`${BASE_URL}/api/users`);
  if (!res.ok) throw new Error("API error");
  return res.json();
};
