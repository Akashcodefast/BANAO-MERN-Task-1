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

  const handleSubmit = () => {
    if (isSignup) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        })
      );
    }

    // fake auth
    localStorage.setItem("token", "dummy-token");
    localStorage.setItem("currentUser", form.email);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#141414] rounded-2xl p-8 shadow-2xl">

        {/* Title */}
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

        {/* FORM – VERTICAL ONLY */}
        <div className="flex flex-col gap-4">

          {isSignup && (
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="auth-input"
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="auth-input"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="auth-input"
          />

          <button
            onClick={handleSubmit}
            className="mt-2 py-3 rounded-md bg-gradient-to-r from-pink-400 to-purple-500 font-medium"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </div>

        {/* TOGGLE – ALSO VERTICAL */}
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
