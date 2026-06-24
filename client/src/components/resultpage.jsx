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
: selectedQuestions.map((question, index) => {
return {
question: question,
answer: answers[index] || "",
score: 0,
feedback: "Feedback not available.",
suggestion: "Please submit the interview again.",
};
});

const getScoreMessage = (score) => {
const numericScore = Number(score) || 0;


if (numericScore >= 80) {
  return "Excellent";
}

if (numericScore >= 60) {
  return "Good";
}

if (numericScore >= 40) {
  return "Needs Improvement";
}

return "Poor";


};

const getScoreClass = (score) => {
const numericScore = Number(score) || 0;


if (numericScore >= 80) {
  return "score-excellent";
}

if (numericScore >= 60) {
  return "score-good";
}

if (numericScore >= 40) {
  return "score-average";
}

return "score-poor";


};

return ( <section className="result-page"> <div className="result-container"> <div className="result-header"> <p className="section-label">Interview Result</p> <h1>Your {selectedRole} Interview Report</h1> <p>
Here is your performance summary with feedback for every answer. </p> </div>

```
    <div className="result-summary">
      <div className="summary-card main-score-card">
        <p>Overall Score</p>
        <h2 className={getScoreClass(overallScore)}>
          {Number(overallScore) || 0}%
        </h2>
        <span>{getScoreMessage(overallScore)}</span>
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
        <p>Unanswered</p>
        <h2>{unansweredCount}</h2>
      </div>

      <div className="summary-card">
        <p>Completion</p>
        <h2>{completionPercentage}%</h2>
      </div>
    </div>

    <div className="feedback-section">
      <h2>AI Feedback</h2>

      {safeFeedbackList.map((item, index) => {
        const questionText = item.question || selectedQuestions[index] || "";
        const answerText = String(item.answer || "");
        const score = Number(item.score) || 0;
        const feedbackText = item.feedback || "Feedback not available.";
        const suggestionText =
          item.suggestion || "Try to give a more complete answer.";

        return (
          <div className="feedback-card" key={index}>
            <div className="feedback-top">
              <h3>
                Q{index + 1}. {questionText}
              </h3>

              <span className={`question-score ${getScoreClass(score)}`}>
                {score}/100
              </span>
            </div>

            <div className="answer-box">
              <h4>Your Answer</h4>
              <p>
                {answerText.trim() !== ""
                  ? answerText
                  : "No answer provided."}
              </p>
            </div>

            <div className="ai-feedback-box">
              <h4>Feedback</h4>
              <p>{feedbackText}</p>
            </div>

            <div className="suggestion-box">
              <h4>Suggestion</h4>
              <p>{suggestionText}</p>
            </div>
          </div>
        );
      })}
    </div>

    <div className="result-actions">
      <button className="secondary-btn" onClick={handleBackToRoles}>
        Back to Roles
      </button>

      <button className="primary-btn" onClick={handleRetakeInterview}>
        Retake Interview
      </button>
    </div>
  </div>
</section>


);
}

export default ResultPage;
