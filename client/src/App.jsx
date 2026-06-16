import { useState } from "react";
import "./App.css";

function App() {
  const [selectedRole, setSelectedRole] = useState("");

  const roles = [
    {
      name: "SDE",
      description: "Practice DSA, OOP, DBMS, OS, CN, and coding interview questions.",
    },
    {
      name: "Frontend Developer",
      description: "Practice HTML, CSS, JavaScript, React, UI design, and web concepts.",
    },
    {
      name: "Backend Developer",
      description: "Practice Node.js, Express, APIs, databases, authentication, and server logic.",
    },
    {
      name: "Data Analyst",
      description: "Practice SQL, Excel, Python, statistics, dashboards, and data interpretation.",
    },
    {
      name: "HR Round",
      description: "Practice introduction, strengths, weaknesses, goals, and behavioral questions.",
    },
  ];

  const handleRoleSelect = (roleName) => {
    setSelectedRole(roleName);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">InterviewAce AI</h2>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#roles">Roles</a>
          <button className="nav-btn">Dashboard</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="badge">AI Mock Interview Platform</p>

          <h1>
            Practice interviews with <span>AI-powered feedback</span>
          </h1>

          <p className="hero-text">
            Select your target role, answer real interview questions, and get
            instant AI-based scores, feedback, and improvement tips to prepare
            better for placements.
          </p>

          <div className="hero-buttons">
            <a href="#roles" className="primary-btn">
              Start Interview
            </a>
            <button className="secondary-btn">View Progress</button>
          </div>
        </div>

        <div className="hero-card">
          <h3>Mock Interview Score</h3>

          <div className="score-circle">85%</div>

          <p>Strong answer structure</p>
          <p>Improve confidence and examples</p>
          <p>Good technical clarity</p>
        </div>
      </section>

      <section className="features" id="features">
        <h2>What InterviewAce AI Will Do</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Role-Based Questions</h3>
            <p>
              Practice for SDE, Frontend Developer, Backend Developer, Data
              Analyst, and HR interview rounds.
            </p>
          </div>

          <div className="feature-card">
            <h3>AI Feedback</h3>
            <p>
              Get answer scores, strengths, weaknesses, improved answers, and
              personalized tips after every response.
            </p>
          </div>

          <div className="feature-card">
            <h3>Voice Practice</h3>
            <p>
              Record your answers, convert speech to text, and evaluate your
              spoken interview responses.
            </p>
          </div>

          <div className="feature-card">
            <h3>Progress Tracking</h3>
            <p>
              Track previous mock interviews, average scores, weak topics, and
              improvement over time.
            </p>
          </div>
        </div>
      </section>

      <section className="roles" id="roles">
        <h2>Choose Your Interview Role</h2>

        <p className="roles-subtitle">
          Select one role to begin your mock interview preparation.
        </p>

        <div className="role-grid">
          {roles.map((role) => (
            <div
              key={role.name}
              className={
                selectedRole === role.name ? "role-card selected" : "role-card"
              }
              onClick={() => handleRoleSelect(role.name)}
            >
              <h3>{role.name}</h3>
              <p>{role.description}</p>
            </div>
          ))}
        </div>

        {selectedRole && (
          <div className="selected-role-box">
            <p>
              Selected Role: <span>{selectedRole}</span>
            </p>

            <button className="primary-btn">
              Start {selectedRole} Interview
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;