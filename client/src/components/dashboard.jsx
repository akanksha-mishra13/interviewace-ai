function Dashboard({
  roles,
  selectedRole,
  totalQuestions,
  answeredCount,
  interviewHistory,
  handleClearHistory,
}) {
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
          <p>Current Questions</p>
        </div>

        <div className="dashboard-card">
          <h3>{answeredCount}</h3>
          <p>Current Answered</p>
        </div>
      </div>

      <div className="dashboard-panel">
        <div className="history-header">
          <h2>Interview History</h2>

          {interviewHistory.length > 0 && (
            <button className="secondary-btn" onClick={handleClearHistory}>
              Clear History
            </button>
          )}
        </div>

        {interviewHistory.length === 0 ? (
          <p className="empty-history">
            No interview history yet. Complete one mock interview to see your
            progress here.
          </p>
        ) : (
          <div className="history-list">
            {interviewHistory.map((interview) => (
              <div className="history-card" key={interview.id}>
                <h3>{interview.role}</h3>

                <p>Date: {interview.date}</p>
                <p>Total Questions: {interview.totalQuestions}</p>
                <p>Answered: {interview.answeredCount}</p>
                <p>Unanswered: {interview.unansweredCount}</p>
                <p>Overall Score: {interview.overallScore || 0}%</p>

                <div className="history-progress">
                  <div
                    className="history-progress-fill"
                    style={{ width: `${interview.completionPercentage}%` }}
                  ></div>
                </div>

                <strong>{interview.completionPercentage}% Completed</strong>
              </div>
            ))}
          </div>
        )}
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