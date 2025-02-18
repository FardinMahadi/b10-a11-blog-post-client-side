import { Link, useLocation } from "react-router-dom";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./../provider/ThemeProvider";

const MyNavbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <Navbar
      fluid
      rounded
      className="bg-background-secondary-light text-text-light dark:bg-background-secondary-dark dark:text-text-dark"
    >
      <div className="flex justify-between w-full items-center">
        <Navbar.Brand href="/" className="flex items-center">
          <img src="/favicon.png" className="h-8 w-8" alt="Logo" />
          <span className="text-xl font-semibold">
            {theme ? "Dark Mode" : "Light Mode"}
          </span>
        </Navbar.Brand>

        <Navbar.Collapse className="hidden md:flex flex-row">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/pricing", label: "Pricing" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Navbar.Link
              key={item.to}
              as={Link}
              to={item.to}
              className={
                location.pathname === item.to
                  ? "text-text-light dark:text-text-dark  font-bold"
                  : "text-text-secondary-light hover:text-text-light dark:text-text-secondary-dark dark:hover:text-text-dark"
              }
            >
              {item.label}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>

        <div className="flex items-center gap-4">
          <DarkModeSwitch
            checked={theme == "dark"}
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
          <Navbar.Toggle className="md:hidden" />
        </div>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
