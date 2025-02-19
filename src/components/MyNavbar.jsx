import { Link, useLocation } from "react-router-dom";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useContext, useState } from "react";
import { ThemeContext } from "./../provider/ThemeProvider";
import { AuthContext } from "../provider/AuthProvider";

const MyNavbar = () => {
  const { user } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar
      fluid
      rounded
      className="bg-background-secondary-light text-text-light dark:bg-background-secondary-dark dark:text-text-dark"
    >
      <Navbar.Brand href="/" className="flex items-center gap-2">
        <img src="/favicon.png" className="h-8 w-8" alt="Logo" />
        <span className="text-xl font-semibold">TechTrails</span>
      </Navbar.Brand>

      <div className="flex items-center gap-2 md:order-2">
        <DarkModeSwitch
          checked={theme === "dark"}
          onChange={toggleTheme}
          size={20}
        />
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
              className="h-10 aspect-square"
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/logout">
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle onClick={() => setIsOpen((prev) => !prev)} />
      </div>

      <Navbar.Collapse
        className={`${isOpen ? "block" : "hidden"} md:flex md:items-center`}
      >
        {[
          { to: "/", label: "Home" },
          ...(user ? [{ to: "/addBlog", label: "Add Blog" }] : []),
          { to: "/allBlogs", label: "All Blogs" },
          { to: "/featuredBlogs", label: "Featured Blogs" },
          ...(user ? [{ to: "/wishlist", label: "Wishlist" }] : []),
        ].map((item) => (
          <Navbar.Link
            key={item.to}
            as={Link}
            to={item.to}
            className={
              location.pathname === item.to
                ? "text-text-light dark:text-text-dark font-bold"
                : "text-text-secondary-light hover:text-text-light dark:text-text-secondary-dark dark:hover:text-text-dark"
            }
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
