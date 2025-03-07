import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./../firebase/firebase.config";
import Loading from "../components/Loading";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);

      setLoading(false);

      axios
        .get(`http://localhost:5000/users?email=${currentUser.email}`)
        .then((res) => {
          setUser(res.data);
        });
    });

    return () => unsubscribe();
  }, []);

  const handleSignUp = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Sign up done");
      return userCredential.user;
    } catch (err) {
      setAuthError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogIn = async (email, password) => {
    setLoading(true);
    setAuthError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);

      // fetch user data according to user email
      const response = await axios.get(
        `http://localhost:5000/users?email=${user.email}`
      );

      return { success: true, user: userCredential.user };
    } catch (err) {
      console.log("Error: ", err.message);
      setAuthError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      console.log("User signed out.");
    } catch (error) {
      console.error("Logout error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password should contain capital letters.";
    }
    if (!/[\d\W]/.test(password)) {
      return "Password should contain numbers or special characters.";
    }
    return null;
  };

  // resources related stuffes

  const authInfo = {
    user,
    setUser,
    loading,
    authError,
    setAuthError,
    validatePassword,
    handleSignUp,
    handleLogIn,
    handleGoogleLogin,
    handleLogout,
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
