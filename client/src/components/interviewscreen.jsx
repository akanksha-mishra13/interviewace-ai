import "./interviewscreen.css";

function InterviewScreen({
  selectedRole,
  selectedQuestions,
  currentQuestionIndex,
  currentQuestion,
  currentAnswer,
  currentWordCount,
  canSubmitInterview,
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

        <button
          className="back-btn"
          onClick={handleBackToRoles}
        >
          Back to Roles
        </button>

        <p className="badge">
          {selectedRole} AI Interview
        </p>

        <h2>
          Question {currentQuestionIndex + 1} of {selectedQuestions.length}
        </h2>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${
                ((currentQuestionIndex + 1) /
                  selectedQuestions.length) *
                100
              }%`,
            }}
          ></div>

        </div>

        <div className="progress-info">

          <span>
            Progress
          </span>

          <span>
            {answeredCount}/{selectedQuestions.length} Answered
          </span>

        </div>

        <div className="question-box">

          <h3>
            Interview Question
          </h3>

          <p>{currentQuestion}</p>

        </div>

        <div className="answer-box">

          <label>
            Your Answer
          </label>

          <textarea
            placeholder="Write your detailed answer here..."
            value={currentAnswer}
            onChange={handleAnswerChange}
          />

          <div className="answer-helper">

            <p>
              Word Count :
              <strong> {currentWordCount}</strong>
            </p>

            {currentWordCount === 0 && (
              <p className="warning-text">
                Your answer is empty.
              </p>
            )}

            {currentWordCount > 0 &&
              currentWordCount < 15 && (
                <p className="warning-text">
                  Write at least 15 words for
                  better AI evaluation.
                </p>
              )}

            {currentWordCount >= 15 && (
              <p className="success-text">
                Great! Your answer has a good
                length.
              </p>
            )}

          </div>

        </div>

        <div className="question-actions">

          <button
            className="secondary-btn"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>

          {currentQuestionIndex ===
          selectedQuestions.length - 1 ? (
            <button
              className="primary-btn"
              onClick={handleSubmitInterview}
              disabled={!canSubmitInterview}
            >
              Submit Interview
            </button>
          ) : (
            <button
              className="primary-btn"
              onClick={handleNextQuestion}
            >
              Next Question
            </button>
          )}

        </div>

      </div>

    </section>
  );
}

export default InterviewScreen;