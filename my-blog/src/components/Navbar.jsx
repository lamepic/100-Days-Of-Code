import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="grid place-items-center p-5 border-b-2 border-black">
      <ul className="flex items-center space-x-5">
        <li className="mb-1 border-b border-white hover:border-black">
          <Link to="/">Home</Link>
        </li>
        <li className="mb-1 border-b border-white hover:border-black">
          <Link to="/about">About</Link>
        </li>
        <li className="mb-1 border-b border-white hover:border-black">
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
