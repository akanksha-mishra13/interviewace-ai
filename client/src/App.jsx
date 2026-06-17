import { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import RoleSelection from "./components/roleselection";
import InterviewScreen from "./components/interviewscreen";
import ResultPage from "./components/resultpage";
import { roles } from "./data/roles";
import { questions } from "./data/questions";

function App() {
  const [selectedRole, setSelectedRole] = useState("");
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [interviewSubmitted, setInterviewSubmitted] = useState(false);

  
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

  const handleRetakeInterview = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setInterviewSubmitted(false);
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

      {!interviewStarted && (
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
      )}

      {interviewStarted && !interviewSubmitted && (
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
      )}

      {interviewStarted && interviewSubmitted && (
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
      )}
    </div>
  );
}

export default App;