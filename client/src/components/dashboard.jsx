import "./dashboard.css";

function Dashboard({
  roles,
  selectedRole,
  totalQuestions,
  answeredCount,
  interviewHistory,
  handleClearHistory,
}) {
  const totalAttempts = interviewHistory.length;

  const averageScore =
    totalAttempts > 0
      ? Math.round(
          interviewHistory.reduce(
            (sum, interview) => sum + (interview.overallScore || 0),
            0
          ) / totalAttempts
        )
      : 0;

  const bestInterview =
    totalAttempts > 0
      ? interviewHistory.reduce((best, current) =>
          (current.overallScore || 0) >
          (best.overallScore || 0)
            ? current
            : best
        )
      : null;

  const bestScore = bestInterview
    ? bestInterview.overallScore || 0
    : 0;

  const bestRole = bestInterview
    ? bestInterview.role
    : "None";

  return (
    <section className="dashboard-section">

      <div className="dashboard-header">

        <p className="badge">
          Performance Dashboard
        </p>

        <h1>
          Track Your Interview Journey
        </h1>

        <p>
          Analyze your interview performance, monitor your
          progress, and identify areas for improvement through
          AI-powered insights.
        </p>

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>{roles.length}</h3>
          <p>Available Roles</p>
        </div>

        <div className="dashboard-card">
          <h3>{totalAttempts}</h3>
          <p>Interview Attempts</p>
        </div>

        <div className="dashboard-card">
          <h3>{averageScore}%</h3>
          <p>Average Score</p>
        </div>

        <div className="dashboard-card">
          <h3>{bestScore}%</h3>
          <p>Best Performance</p>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>{selectedRole || "None"}</h3>
          <p>Current Role</p>
        </div>

        <div className="dashboard-card">
          <h3>{totalQuestions}</h3>
          <p>Total Questions</p>
        </div>

        <div className="dashboard-card">
          <h3>{answeredCount}</h3>
          <p>Questions Answered</p>
        </div>

        <div className="dashboard-card">
          <h3>{bestRole}</h3>
          <p>Best Performing Role</p>
        </div>

      </div>

      <div className="dashboard-panel">

        <div className="history-header">

          <h2>
            Interview History
          </h2>

          {interviewHistory.length > 0 && (
            <button
              className="secondary-btn"
              onClick={handleClearHistory}
            >
              Clear History
            </button>
          )}

        </div>

        {interviewHistory.length === 0 ? (

          <p className="empty-history">
            No interview attempts yet.

            Complete your first mock interview to unlock
            detailed analytics and personalized AI feedback.
          </p>

        ) : (

          <div className="history-list">

            {interviewHistory.map((interview) => (

              <div
                className="history-card"
                key={interview.id}
              >

                <div className="history-card-top">

                  <h3>{interview.role}</h3>

                  <span>
                    {interview.overallScore || 0}%
                  </span>

                </div>

                <p>
                  <strong>Date:</strong> {interview.date}
                </p>

                <p>
                  <strong>Questions:</strong>{" "}
                  {interview.totalQuestions}
                </p>

                <p>
                  <strong>Answered:</strong>{" "}
                  {interview.answeredCount}
                </p>

                <p>
                  <strong>Skipped:</strong>{" "}
                  {interview.unansweredCount}
                </p>

                <p>
                  <strong>Completion:</strong>{" "}
                  {interview.completionPercentage}%
                </p>

                <div className="history-progress">

                  <div
                    className="history-progress-fill"
                    style={{
                      width: `${interview.overallScore || 0}%`,
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      <div className="dashboard-panel">

        <h2>
          AI Recommendations
        </h2>

        <div className="tip-list">

          <div className="tip-card">

            <h3>
              Improve Communication
            </h3>

            <p>
              Explain your approach clearly before giving the
              final answer. Structured communication creates a
              stronger impression.
            </p>

          </div>

          <div className="tip-card">

            <h3>
              Revise Fundamentals
            </h3>

            <p>
              Regularly practice DSA, OOP, DBMS, Operating
              Systems, Computer Networks, and project
              discussions.
            </p>

          </div>

          <div className="tip-card">

            <h3>
              Stay Consistent
            </h3>

            <p>
              Practice mock interviews frequently to improve
              confidence, speed, and overall interview
              performance.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;