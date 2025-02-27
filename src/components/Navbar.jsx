import React, { useContext, useState } from "react";
import { Sun, Moon, User, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ThemeContext } from "../provider/ThemeProvider";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { FiLogIn } from "react-icons/fi";
import { Avatar } from "flowbite-react";
import Logo from "./Logo";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", to: "/" },
    ...(user ? [{ name: "Add Blog", to: "/addBlog" }] : []),
    { name: "All Blogs", to: "/allBlogs" },
    { name: "Featured Blogs", to: "/featuredBlogs" },
    ...(user ? [{ name: "Wishlist", to: "/wishlist" }] : []),
  ];

  return (
    <nav
      className={`w-full p-4 shadow-md bg-background-secondary-light dark:bg-background-secondary-dark py-7`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Center Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={
                location.pathname === link.to
                  ? "text-text-light dark:text-text-dark font-bold"
                  : "text-text-secondary-light hover:text-text-light dark:text-text-secondary-dark dark:hover:text-text-dark"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side - Theme Toggle + Auth */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <DarkModeSwitch
            checked={theme === "dark"}
            onChange={toggleTheme}
            size={20}
          />

          {/* Login Button or User Menu */}
          {!user ? (
            <Link
              to="/auth/login"
              className={`flex items-center gap-1 ${
                theme === "dark"
                  ? "hover:text-text-secondary-dark"
                  : "hover:text-text-secondary-light"
              }`}
            >
              <FiLogIn /> Login
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className={`p-1 rounded-full ${
                  user.photoURL || "border-2 border-gray-300"
                }`}
              >
                {user.photoURL ? (
                  <Avatar
                    alt="User settings"
                    img={user.photoURL}
                    rounded
                    className="h-10 aspect-square"
                  />
                ) : (
                  <User size={20} />
                )}
              </button>

              {/* User Dropdown Menu */}
              {showUserMenu && (
                <div
                  className={`absolute right-0 mt-2 w-48 py-2 rounded-md shadow-lg text-text-light dark:text-text-dark dark:bg-background-secondary-dark border`}
                >
                  <div className="px-4 py-2 border-b">
                    <p className="font-medium">{user.displayName}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button - Only visible on small screens */}
        <div className="flex items-center md:hidden">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <DarkModeSwitch
              checked={theme === "dark"}
              onChange={toggleTheme}
              size={20}
            />
          </button>

          {/* User Auth - Mobile Version */}
          {!user ? (
            <Link
              to="/auth/login"
              className={`flex items-center gap-1 ${
                theme === "dark"
                  ? "hover:text-text-secondary-dark"
                  : "hover:text-text-secondary-light"
              }`}
            >
              <FiLogIn /> Login
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className={`p-1 rounded-full ${
                  user.photoURL || "border-2 border-gray-300"
                }`}
              >
                {user.photoURL ? (
                  <Avatar
                    alt="User settings"
                    img={user.photoURL}
                    rounded
                    className="h-10 aspect-square"
                  />
                ) : (
                  <User size={20} />
                )}
              </button>

              {/* User Dropdown Menu */}
              {showUserMenu && (
                <div
                  className={`absolute right-0 mt-2 w-48 py-2 rounded-md shadow-lg bg-background-light dark:bg-background-dark`}
                >
                  <div className="px-4 py-2 border-b">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Hamburger Menu */}
          <button onClick={toggleMobileMenu} className="p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden mt-4 py-2 bg-background-secondary-light dark:bg-background-secondary-dark text-text-light dark:text-text-secondary-dark`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.to}
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
