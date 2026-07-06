import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import your auth hook

function Navbar() {
  const { user, logout } = useAuth(); // Grab user status and logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login page immediately after logging out
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo">
          Interview<span>Ace</span> AI
        </Link>
      </div>

      <div className="nav-center">
        {/* These standard hash links work best on the home page */}
        <Link to="/">Features</Link>
        <Link to="/">Roles</Link>
        
        {/* Only show Dashboard link if user is logged in */}
        {user && <Link to="/dashboard">Dashboard</Link>}
      </div>

      <div className="nav-right">
        {user ? (
          <>
            {/* If logged in, show a greeting and a Logout button */}
            <span className="user-greeting">Hi, {user.name || "User"}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            {/* If logged out, show Login and Get Started */}
            <Link to="/login" className="login-btn">
              Login
            </Link>
            <Link to="/register" className="start-btn">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;