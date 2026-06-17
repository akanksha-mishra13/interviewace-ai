function InterviewScreen({
  selectedRole,
  selectedQuestions,
  currentQuestionIndex,
  currentQuestion,
  currentAnswer,
  answeredCount,
  handleBackToRoles,
  handlePreviousQuestion,
  handleNextQuestion,
  handleAnswerChange,
  handleSubmitInterview,
}) {
  return (
    <section className="interview-section">
      <div className="interview-card">
        <button className="back-btn" onClick={handleBackToRoles}>
          ← Back to Roles
        </button>

        <p className="badge">{selectedRole} Mock Interview</p>

        <h2>
          Question {currentQuestionIndex + 1} of {selectedQuestions.length}
        </h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / selectedQuestions.length) * 100
              }%`,
            }}
          ></div>
        </div>

        <p className="answered-count">
          Answered {answeredCount} of {selectedQuestions.length} questions
        </p>

        <div className="question-box">
          <p>{currentQuestion}</p>
        </div>

        <div className="answer-box">
          <label>Your Answer</label>

          <textarea
            placeholder="Type your answer here..."
            value={currentAnswer}
            onChange={handleAnswerChange}
          ></textarea>
        </div>

        <div className="question-actions">
          <button
            className="secondary-btn"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>

          {currentQuestionIndex === selectedQuestions.length - 1 ? (
            <button className="primary-btn" onClick={handleSubmitInterview}>
              Submit Interview
            </button>
          ) : (
            <button className="primary-btn" onClick={handleNextQuestion}>
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default InterviewScreen;