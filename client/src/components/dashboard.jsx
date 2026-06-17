function Dashboard({ roles, selectedRole, totalQuestions, answeredCount }) {
  return (
    <section className="dashboard-section">
      <div className="dashboard-header">
        <p className="badge">Student Dashboard</p>
        <h1>Your Interview Preparation Dashboard</h1>
        <p>
          Track your mock interview practice, selected role, and preparation
          progress from one place.
        </p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>{roles.length}</h3>
          <p>Total Roles</p>
        </div>

        <div className="dashboard-card">
          <h3>{selectedRole || "None"}</h3>
          <p>Selected Role</p>
        </div>

        <div className="dashboard-card">
          <h3>{totalQuestions}</h3>
          <p>Total Questions</p>
        </div>

        <div className="dashboard-card">
          <h3>{answeredCount}</h3>
          <p>Answered Questions</p>
        </div>
      </div>

      <div className="dashboard-panel">
        <h2>Preparation Tips</h2>

        <div className="tip-list">
          <div className="tip-card">
            <h3>Practice Daily</h3>
            <p>
              Try to answer at least 5 interview questions every day to improve
              confidence.
            </p>
          </div>

          <div className="tip-card">
            <h3>Use Examples</h3>
            <p>
              Always support your answers with real examples from projects,
              internships, or academics.
            </p>
          </div>

          <div className="tip-card">
            <h3>Revise Core Subjects</h3>
            <p>
              For technical roles, revise DSA, DBMS, OS, CN, OOP, and project
              concepts regularly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;