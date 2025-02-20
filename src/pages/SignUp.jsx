import { Link } from "react-router-dom";
import { useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { TextInput, Label } from "flowbite-react";
import ExtraLogin from "../components/ExtraLogin";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, confirmPassword });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Join <span className="text-blue-500">TechTrail</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label
              htmlFor="name"
              value="Full Name"
              className="text-gray-700 dark:text-gray-300"
            />
            <TextInput
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div>
            <Label
              htmlFor="confirm-password"
              value="Confirm Password"
              className="text-gray-700 dark:text-gray-300"
            />
            <TextInput
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition"
          >
            <FiUserPlus /> Sign Up
          </button>
        </form>
        <ExtraLogin />
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
