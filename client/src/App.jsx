import { useState } from "react";
import "./App.css";

function App() {
  const [selectedRole, setSelectedRole] = useState("");
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [interviewSubmitted, setInterviewSubmitted] = useState(false);

  const roles = [
    {
      name: "SDE",
      description:
        "Practice DSA, OOP, DBMS, OS, CN, and coding interview questions.",
    },
    {
      name: "Frontend Developer",
      description:
        "Practice HTML, CSS, JavaScript, React, UI design, and web concepts.",
    },
    {
      name: "Backend Developer",
      description:
        "Practice Node.js, Express, APIs, databases, authentication, and server logic.",
    },
    {
      name: "Data Analyst",
      description:
        "Practice SQL, Excel, Python, statistics, dashboards, and data interpretation.",
    },
    {
      name: "HR Round",
      description:
        "Practice introduction, strengths, weaknesses, goals, and behavioral questions.",
    },
  ];

  const questions = {
    SDE: [
      "Tell me about yourself.",
      "Explain object-oriented programming concepts.",
      "What is time complexity? Explain with an example.",
      "What is the difference between an array and a linked list?",
      "Explain DBMS normalization.",
    ],
    "Frontend Developer": [
      "What is the difference between HTML, CSS, and JavaScript?",
      "What are React components?",
      "What is useState in React?",
      "What is the difference between props and state?",
      "How do you make a website responsive?",
    ],
    "Backend Developer": [
      "What is Node.js?",
      "What is Express.js?",
      "What is REST API?",
      "What is middleware in Express?",
      "What is authentication and authorization?",
    ],
    "Data Analyst": [
      "What is data cleaning?",
      "Explain different types of SQL joins.",
      "What is the difference between mean, median, and mode?",
      "What is data visualization?",
      "How would you handle missing data?",
    ],
    "HR Round": [
      "Tell me about yourself.",
      "What are your strengths?",
      "What are your weaknesses?",
      "Why should we hire you?",
      "Where do you see yourself in five years?",
    ],
  };

  const handleRoleSelect = (roleName) => {
    setSelectedRole(roleName);
    setInterviewStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setInterviewSubmitted(false);
  };

  const handleStartInterview = () => {
    if (selectedRole) {
      setInterviewStarted(true);
      setCurrentQuestionIndex(0);
      setAnswers({});
      setInterviewSubmitted(false);
    }
  };

  const handleAnswerChange = (event) => {
    const answerText = event.target.value;

    setAnswers({
      ...answers,
      [currentQuestionIndex]: answerText,
    });
  };

  const handleNextQuestion = () => {
    const totalQuestions = questions[selectedRole].length;

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleBackToRoles = () => {
    setInterviewStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setInterviewSubmitted(false);
  };

  const handleSubmitInterview = () => {
    setInterviewSubmitted(true);
  };

  const selectedQuestions = selectedRole ? questions[selectedRole] : [];
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestionIndex] || "";
  const answeredCount = Object.values(answers).filter(
    (answer) => answer.trim() !== ""
  ).length;

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

      {!interviewStarted ? (
        <>
          <section className="hero">
            <div className="hero-content">
              <p className="badge">AI Mock Interview Platform</p>

              <h1>
                Practice interviews with <span>AI-powered feedback</span>
              </h1>

              <p className="hero-text">
                Select your target role, answer real interview questions, and
                get instant AI-based scores, feedback, and improvement tips to
                prepare better for placements.
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
                  Get answer scores, strengths, weaknesses, improved answers,
                  and personalized tips after every response.
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
                  Track previous mock interviews, average scores, weak topics,
                  and improvement over time.
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
                    selectedRole === role.name
                      ? "role-card selected"
                      : "role-card"
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

                <button className="primary-btn" onClick={handleStartInterview}>
                  Start {selectedRole} Interview
                </button>
              </div>
            )}
          </section>
        </>
      ) : (
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
                    ((currentQuestionIndex + 1) / selectedQuestions.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>

            <p className="answered-count">
              Answered {answeredCount} of {selectedQuestions.length} questions
            </p>

            {!interviewSubmitted ? (
              <>
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
                    <button
                      className="primary-btn"
                      onClick={handleSubmitInterview}
                    >
                      Submit Interview
                    </button>
                  ) : (
                    <button className="primary-btn" onClick={handleNextQuestion}>
                      Next
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="submission-box">
                <h2>Interview Submitted Successfully!</h2>

                <p>
                  You answered {answeredCount} out of{" "}
                  {selectedQuestions.length} questions.
                </p>

                <p>
                  In the next level, we will create a result page and show your
                  answers question-wise.
                </p>

                <button className="primary-btn" onClick={handleBackToRoles}>
                  Practice Another Role
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;