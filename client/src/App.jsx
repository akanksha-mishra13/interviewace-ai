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
import Dashboard from "./components/dashboard";

import { roles } from "./data/roles";
import { questions } from "./data/questions";

function AppContent() {
  const [selectedRole, setSelectedRole] = useState("");
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const [interviewHistory, setInterviewHistory] = useState(() => {
    const savedHistory = localStorage.getItem("interviewHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  const navigate = useNavigate();

  const selectedQuestions = selectedRole ? questions[selectedRole] || [] : [];
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestionIndex] || "";

  const currentWordCount =
    currentAnswer.trim() === "" ? 0 : currentAnswer.trim().split(/\s+/).length;

  const answeredCount = Object.values(answers).filter(
    (answer) => answer.trim() !== ""
  ).length;

  const totalQuestions = selectedQuestions.length;
  const unansweredCount = totalQuestions - answeredCount;

  const completionPercentage =
    totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  const canSubmitInterview = answeredCount > 0;

  const getAnswerFeedback = (answer) => {
    const cleanAnswer = answer.trim();

    if (cleanAnswer === "") {
      return {
        score: 0,
        feedback: "No answer provided.",
        suggestion:
          "Try to answer the question with at least 3-4 meaningful lines.",
      };
    }

    const wordCount = cleanAnswer.split(/\s+/).length;

    if (wordCount < 15) {
      return {
        score: 40,
        feedback: "Your answer is too short.",
        suggestion:
          "Add explanation, examples, and key points to make it stronger.",
      };
    }

    if (wordCount < 35) {
      return {
        score: 70,
        feedback: "Good answer, but it can be improved.",
        suggestion: "Add one real example or project-related explanation.",
      };
    }

    return {
      score: 90,
      feedback: "Strong answer with good detail.",
      suggestion: "Keep your answer structured and confident.",
    };
  };

  const answerFeedback = selectedQuestions.map((question, index) => {
    const answer = answers[index] || "";
    const result = getAnswerFeedback(answer);

    return {
      question,
      answer,
      score: result.score,
      feedback: result.feedback,
      suggestion: result.suggestion,
    };
  });

  const overallScore =
    totalQuestions > 0
      ? Math.round(
          answerFeedback.reduce((sum, item) => sum + item.score, 0) /
            totalQuestions
        )
      : 0;

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
    const newInterview = {
      id: Date.now(),
      role: selectedRole,
      totalQuestions: totalQuestions,
      answeredCount: answeredCount,
      unansweredCount: unansweredCount,
      completionPercentage: completionPercentage,
      overallScore: overallScore,
      date: new Date().toLocaleString(),
    };

    const updatedHistory = [newInterview, ...interviewHistory];

    setInterviewHistory(updatedHistory);
    localStorage.setItem("interviewHistory", JSON.stringify(updatedHistory));

    navigate("/result");
  };

  const handleRetakeInterview = () => {
    setInterviewStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers({});
    navigate("/interview");
  };

  const handleClearHistory = () => {
    setInterviewHistory([]);
    localStorage.removeItem("interviewHistory");
  };

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
                currentWordCount={currentWordCount}
                canSubmitInterview={canSubmitInterview}
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
                answerFeedback={answerFeedback}
                overallScore={overallScore}
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
              interviewHistory={interviewHistory}
              handleClearHistory={handleClearHistory}
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