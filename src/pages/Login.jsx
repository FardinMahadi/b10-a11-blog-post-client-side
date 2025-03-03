import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { TextInput, Label } from "flowbite-react";
import { AuthContext } from "../provider/AuthProvider";
import ExtraLogin from "../components/ExtraLogin";

const Login = () => {
  const { handleLogIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handleLogIn(email, password);
    if (response?.success) {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Welcome Back to <span className="text-blue-500">TechTrails</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label
              htmlFor="email"
              value="Email"
              className="text-gray-700 dark:text-gray-300"
            />
            <TextInput
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              value="Password"
              className="text-gray-700 dark:text-gray-300"
            />
            <TextInput
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="btn w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition"
          >
            <FiLogIn /> Login
          </button>
        </form>
        <ExtraLogin />
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
