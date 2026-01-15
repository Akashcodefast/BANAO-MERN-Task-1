import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      localStorage.setItem(
        "user",
        JSON.stringify(form)
      );
    }

    localStorage.setItem("token", "dummy-token");
    localStorage.setItem("currentUser", form.email || "guest");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#141414] rounded-2xl p-8 shadow-2xl text-white">

        {/* TITLE */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            {isSignup
              ? "Sign up to get started"
              : "Login to continue to dashboard"}
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {isSignup && (
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md
                         bg-[#111] text-white
                         placeholder:text-white/40
                         border border-white/15
                         outline-none focus:border-purple-500"
            />
          )}

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md
                       bg-[#111] text-white
                       placeholder:text-white/40
                       border border-white/15
                       outline-none focus:border-purple-500"
          />

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md
                       bg-[#111] text-white
                       placeholder:text-white/40
                       border border-white/15
                       outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            className="mt-2 py-3 rounded-md
                       bg-gradient-to-r from-pink-400 to-purple-500
                       text-white font-medium"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* TOGGLE */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400 mb-2">
            {isSignup ? "Already have an account?" : "New here?"}
          </p>
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-purple-400 text-sm hover:underline"
          >
            {isSignup ? "Login instead" : "Create an account"}
          </button>
        </div>
      </div>
    </div>
  );
}
