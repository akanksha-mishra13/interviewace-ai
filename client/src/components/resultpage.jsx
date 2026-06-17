function ResultPage({
  selectedRole,
  selectedQuestions,
  answers,
  totalQuestions,
  answeredCount,
  unansweredCount,
  completionPercentage,
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
            <h3>Your Answers</h3>

            {selectedQuestions.map((question, index) => (
              <div className="summary-card" key={index}>
                <h4>
                  Question {index + 1}: {question}
                </h4>

                <p>
                  {answers[index] && answers[index].trim() !== ""
                    ? answers[index]
                    : "No answer provided."}
                </p>
              </div>
            ))}
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