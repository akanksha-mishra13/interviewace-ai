import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router";

import "./App.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import RoleSelection from "./components/roleselection";
import InterviewScreen from "./components/interviewscreen";
import ResultPage from "./components/resultpage";

import { roles } from "./data/roles";
import { questions } from "./data/questions";
import Dashboard from "./components/dashboard";

function AppContent() {
  const [selectedRole, setSelectedRole] = useState("");
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const navigate = useNavigate();

  const handleRoleSelect = (roleName) => {
    setSelectedRole(roleName);
    setInterviewStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleStartInterview = () => {
    if (selectedRole) {
      setInterviewStarted(true);
      setCurrentQuestionIndex(0);
      setAnswers({});
      navigate("/interview");
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
    setSelectedRole("");
    setInterviewStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    navigate("/");
  };

  const handleSubmitInterview = () => {
    navigate("/result");
  };

  const handleRetakeInterview = () => {
    setInterviewStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers({});
    navigate("/interview");
  };

  const selectedQuestions = selectedRole ? questions[selectedRole] : [];
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestionIndex] || "";

  const answeredCount = Object.values(answers).filter(
    (answer) => answer.trim() !== ""
  ).length;

  const totalQuestions = selectedQuestions.length;
  const unansweredCount = totalQuestions - answeredCount;

  const completionPercentage =
    totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />

              <RoleSelection
                roles={roles}
                selectedRole={selectedRole}
                handleRoleSelect={handleRoleSelect}
                handleStartInterview={handleStartInterview}
              />
            </>
          }
        />

        <Route
          path="/interview"
          element={
            selectedRole && interviewStarted ? (
              <InterviewScreen
                selectedRole={selectedRole}
                selectedQuestions={selectedQuestions}
                currentQuestionIndex={currentQuestionIndex}
                currentQuestion={currentQuestion}
                currentAnswer={currentAnswer}
                answeredCount={answeredCount}
                handleBackToRoles={handleBackToRoles}
                handlePreviousQuestion={handlePreviousQuestion}
                handleNextQuestion={handleNextQuestion}
                handleAnswerChange={handleAnswerChange}
                handleSubmitInterview={handleSubmitInterview}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/result"
          element={
            selectedRole ? (
              <ResultPage
                selectedRole={selectedRole}
                selectedQuestions={selectedQuestions}
                answers={answers}
                totalQuestions={totalQuestions}
                answeredCount={answeredCount}
                unansweredCount={unansweredCount}
                completionPercentage={completionPercentage}
                handleRetakeInterview={handleRetakeInterview}
                handleBackToRoles={handleBackToRoles}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
  path="/dashboard"
  element={
    <Dashboard
      roles={roles}
      selectedRole={selectedRole}
      totalQuestions={totalQuestions}
      answeredCount={answeredCount}
    />
  }
/>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;