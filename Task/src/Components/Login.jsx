import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    role === "admin" ? navigate("/admin") : navigate("/employee");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
      
      {/* Login Card */}
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        
        {/* Logo / Heading */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {role === "admin" ? "A" : "E"}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mt-3">
            {role === "admin" ? "Admin Login" : "Employee Login"}
          </h2>
          <p className="text-gray-500 text-sm">
            Please sign in to continue
          </p>
        </div>

        {/* Role Switch */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-6">
          <button
            onClick={() => setRole("admin")}
            className={`w-1/2 py-2 rounded-full text-sm font-semibold transition ${
              role === "admin"
                ? "bg-indigo-600 text-white"
                : "text-gray-600"
            }`}
          >
            Admin
          </button>
          <button
            onClick={() => setRole("employee")}
            className={`w-1/2 py-2 rounded-full text-sm font-semibold transition ${
              role === "employee"
                ? "bg-indigo-600 text-white"
                : "text-gray-600"
            }`}
          >
            Employee
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-5">
          © 2026 Company Portal
        </p>
      </div>
    </div>
  );
};

export default Login;
