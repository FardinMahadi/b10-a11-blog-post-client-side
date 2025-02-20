import { Link } from "react-router-dom";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex justify-center items-center bg-background-light dark:bg-background-dark py-20">
      <div className="bg-background-secondary-light dark:bg-background-secondary-dark p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-text-light dark:text-text-dark mb-4">
          Welcome Back to{" "}
          <span className="text-primary-light dark:text-primary-dark">
            TechTrail
          </span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-text-light dark:text-secondary-dark">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded bg-background-light dark:bg-background-secondary-dark text-text-light dark:text-text-dark"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded bg-background-light dark:bg-background-secondary-dark text-text-light dark:text-text-dark"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link
            to="/forgot-password"
            className="text-primary-light dark:text-primary-dark hover:underline"
          >
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary-light  hover:bg-primary-dark dark:text-text-dark p-2 rounded-lg transition"
          >
            <FiLogIn /> Login
          </button>
        </form>
        <p className="text-center text-sm text-text-light dark:text-text-dark mt-4">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-primary-light dark:text-primary-dark hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
