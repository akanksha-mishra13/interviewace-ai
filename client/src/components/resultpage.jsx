function ResultPage({
  selectedRole,
  totalQuestions,
  answeredCount,
  unansweredCount,
  completionPercentage,
  answerFeedback = [],
  overallScore = 0,
  handleRetakeInterview,
  handleBackToRoles,
}) {
  return (
    <section className="interview-section">
      <div className="interview-card">
        <div className="result-box">
          <h2>Interview Result</h2>

          <p className="result-role">
            Role: <span>{selectedRole}</span>
          </p>

          <div className="overall-score-box">
            <h3>{overallScore}%</h3>
            <p>Overall Interview Score</p>
          </div>

          <div className="result-stats">
            <div className="result-card">
              <h3>{totalQuestions}</h3>
              <p>Total Questions</p>
            </div>

            <div className="result-card">
              <h3>{answeredCount}</h3>
              <p>Answered</p>
            </div>

            <div className="result-card">
              <h3>{unansweredCount}</h3>
              <p>Unanswered</p>
            </div>

            <div className="result-card">
              <h3>{completionPercentage}%</h3>
              <p>Completion</p>
            </div>
          </div>

          <div className="answer-summary">
            <h3>AI-Style Feedback</h3>

            {answerFeedback.length === 0 ? (
              <p>No feedback available.</p>
            ) : (
              answerFeedback.map((item, index) => (
                <div className="summary-card" key={index}>
                  <h4>
                    Question {index + 1}: {item.question}
                  </h4>

                  <p>
                    <strong>Your Answer:</strong>{" "}
                    {item.answer && item.answer.trim() !== ""
                      ? item.answer
                      : "No answer provided."}
                  </p>

                  <p>
                    <strong>Score:</strong> {item.score}%
                  </p>

                  <p>
                    <strong>Feedback:</strong> {item.feedback}
                  </p>

                  <p>
                    <strong>Suggestion:</strong> {item.suggestion}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="result-actions">
            <button className="secondary-btn" onClick={handleRetakeInterview}>
              Retake Same Role
            </button>

            <button className="primary-btn" onClick={handleBackToRoles}>
              Practice Another Role
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResultPage;