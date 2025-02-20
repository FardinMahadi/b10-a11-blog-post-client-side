import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { BiErrorCircle } from "react-icons/bi"; // Error icon
import { CgSpinner } from "react-icons/cg"; // Loading spinner
import { TextInput, Label, Alert } from "flowbite-react"; // Alert for errors
import ExtraLogin from "../components/ExtraLogin";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const {
    setUser,
    loading,
    setLoading,
    authError,
    setAuthError,
    validatePassword,
    handleSignUp,
  } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError("");

    if (password !== confirmPassword) {
      setAuthError("Passwords do not match!");
      return;
    }

    const error = validatePassword(password);
    if (error) {
      setAuthError(error);
      return;
    }

    setLoading(true);

    try {
      await handleSignUp(email, password);
      setUser({ displayName: name, email, photoURL: null });
      console.log("User signed up successfully!");
      navigate("/");
    } catch (err) {
      setAuthError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Join <span className="text-blue-500">TechTrails</span>
        </h2>

        {/* Error Message */}
        {authError && (
          <Alert color="failure" icon={BiErrorCircle} className="mb-4">
            {authError}
          </Alert>
        )}

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

          {/* Sign-Up Button with Spinner */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition disabled:opacity-50"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <CgSpinner className="animate-spin" size={20} />
            ) : (
              <FiUserPlus />
            )}
            {loading ? "Signing Up..." : "Sign Up"}
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
