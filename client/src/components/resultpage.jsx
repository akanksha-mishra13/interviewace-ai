import "./resultpage.css";

function ResultPage({
  selectedRole,
  selectedQuestions = [],
  answers = {},
  totalQuestions = 0,
  answeredCount = 0,
  unansweredCount = 0,
  completionPercentage = 0,
  answerFeedback = [],
  overallScore = 0,
  handleRetakeInterview,
  handleBackToRoles,
}) {
  const safeFeedbackList =
    Array.isArray(answerFeedback) && answerFeedback.length > 0
      ? answerFeedback
      : selectedQuestions.map((question, index) => ({
          question,
          answer: answers[index] || "",
          score: 0,
          feedback: "Feedback not available.",
          suggestion: "Please submit the interview again.",
        }));

  const getScoreMessage = (score) => {
    score = Number(score) || 0;

    if (score >= 90) return "Outstanding";
    if (score >= 80) return "Excellent";
    if (score >= 70) return "Very Good";
    if (score >= 60) return "Good";
    if (score >= 40) return "Needs Improvement";
    return "Keep Practicing";
  };

  const getScoreClass = (score) => {
    score = Number(score) || 0;

    if (score >= 80) return "score-excellent";
    if (score >= 60) return "score-good";
    if (score >= 40) return "score-average";
    return "score-poor";
  };

  return (
    <section className="result-page">
      <div className="result-container">

        <div className="result-header">

          <p className="section-label">
            AI Performance Report
          </p>

          <h1>{selectedRole} Interview Analysis</h1>

          <p>
            Your interview has been evaluated by InterviewAce AI.
            Review your performance, understand your strengths,
            and identify improvement opportunities.
          </p>

        </div>

        <div className="result-summary">

          <div className="summary-card main-score-card">

            <p>Overall Performance</p>

            <h2 className={getScoreClass(overallScore)}>
              {overallScore || 0}%
            </h2>

            <span>
              {getScoreMessage(overallScore)}
            </span>

          </div>

          <div className="summary-card">
            <p>Total Questions</p>
            <h2>{totalQuestions}</h2>
          </div>

          <div className="summary-card">
            <p>Answered</p>
            <h2>{answeredCount}</h2>
          </div>

          <div className="summary-card">
            <p>Skipped</p>
            <h2>{unansweredCount}</h2>
          </div>

          <div className="summary-card">
            <p>Completion</p>
            <h2>{completionPercentage}%</h2>
          </div>

        </div>

        <div className="feedback-section">

          <h2>Question-wise Analysis</h2>

          {safeFeedbackList.map((item, index) => {

            const question =
              item.question || selectedQuestions[index] || "";

            const answer =
              item.answer || "";

            const score =
              item.score || 0;

            return (

              <div
                className="feedback-card"
                key={index}
              >

                <div className="feedback-top">

                  <h3>
                    Question {index + 1}
                  </h3>

                  <span
                    className={`question-score ${getScoreClass(score)}`}
                  >
                    {score}/100
                  </span>

                </div>

                <div className="question-box">

                  <h4>Question</h4>

                  <p>{question}</p>

                </div>

                <div className="answer-box">

                  <h4>Your Answer</h4>

                  <p>
                    {answer.trim() !== ""
                      ? answer
                      : "No answer submitted."}
                  </p>

                </div>

                <div className="ai-feedback-box">

                  <h4>AI Feedback</h4>

                  <p>
                    {item.feedback}
                  </p>

                </div>

                <div className="suggestion-box">

                  <h4>Recommendation</h4>

                  <p>
                    {item.suggestion}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

        <div className="result-actions">

          <button
            className="secondary-btn"
            onClick={handleBackToRoles}
          >
            Choose Another Role
          </button>

          <button
            className="primary-btn"
            onClick={handleRetakeInterview}
          >
            Retake Interview
          </button>

        </div>

      </div>
    </section>
  );
}

export default ResultPage;