import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        InterviewAce AI
      </Link>

      <div className="nav-links">
        <Link to="/#features">Features</Link>
        <Link to="/#roles">Roles</Link>
        <Link to="/dashboard" className="nav-btn">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;