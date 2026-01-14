import axios from "axios";

export const fetchUsers = () =>
  axios.get("http://localhost:5000/api/users");
