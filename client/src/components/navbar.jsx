function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">InterviewAce AI</h2>

      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#roles">Roles</a>
        <button className="nav-btn">Dashboard</button>
      </div>
    </nav>
  );
}

export default Navbar;