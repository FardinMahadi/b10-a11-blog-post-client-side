import { Link } from "react-router-dom";
import { Navbar as FlowbiteNavbar } from "flowbite-react";

const MyNavbar = () => {
  return (
    <div className="container mx-auto">
      <FlowbiteNavbar fluid rounded>
        <FlowbiteNavbar.Brand as={Link} to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </FlowbiteNavbar.Brand>
        <FlowbiteNavbar.Toggle />
        <FlowbiteNavbar.Collapse>
          <FlowbiteNavbar.Link as={Link} to="/" active>
            Home
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link as={Link} to="/about">
            Add Blog
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link as={Link} to="/services">
            All blogs
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link as={Link} to="/pricing">
            Featured Blogs
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link as={Link} to="/contact">
            Wishlist
          </FlowbiteNavbar.Link>
        </FlowbiteNavbar.Collapse>
      </FlowbiteNavbar>
    </div>
  );
};

export default MyNavbar;
