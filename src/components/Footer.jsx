import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-7">
          <Logo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
              About
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              A tech blog exploring the latest innovations, programming
              insights, and digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
                >
                  All Posts
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
              Categories
            </h3>
            <ul className="space-y-2">
              <li className="text-text-secondary-light dark:text-text-secondary-dark">
                Technology
              </li>
              <li className="text-text-secondary-light dark:text-text-secondary-dark">
                Programming
              </li>
              <li className="text-text-secondary-light dark:text-text-secondary-dark">
                AI & Machine Learning
              </li>
              <li className="text-text-secondary-light dark:text-text-secondary-dark">
                Web Development
              </li>
            </ul>
          </div>

          {/* Contact/Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary-light dark:text-text-secondary-dark hover:text-[#1DA1F2] transition-all transform hover:scale-110"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary-light dark:text-text-secondary-dark hover:text-[#333] dark:hover:text-white transition-all transform hover:scale-110"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary-light dark:text-text-secondary-dark hover:text-[#0A66C2] transition-all transform hover:scale-110"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border-light dark:border-border-dark text-center text-text-secondary-light dark:text-text-secondary-dark">
          <p>© {new Date().getFullYear()} Tech Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
