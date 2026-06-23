const API_BASE_URL = "http://localhost:5001/api";

export const saveInterview = async (interviewData) => {
  const response = await fetch(`${API_BASE_URL}/interviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(interviewData),
  });

  return response.json();
};

export const getInterviewHistory = async () => {
  const response = await fetch(`${API_BASE_URL}/interviews`);
  return response.json();
};

export const clearInterviewHistory = async () => {
  const response = await fetch(`${API_BASE_URL}/interviews`, {
    method: "DELETE",
  });

  return response.json();
};
