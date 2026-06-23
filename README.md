# InterviewAce AI
# InterviewAce AI

InterviewAce AI is a full-stack mock interview preparation platform that helps users practice role-based interview questions, submit answers, receive instant feedback, view scores, and track interview history through a dashboard.

## Live Demo

Frontend: https://interviewace-ai-gold.vercel.app
Backend: https://interviewace-ai-backend-76df.onrender.com

## Features

* Role-based interview practice
* Multiple interview questions for selected roles
* Answer writing interface
* Word count and submit validation
* AI-style feedback and scoring system
* Overall interview score calculation
* Interview result page
* Dashboard with interview history
* MongoDB-based interview history storage
* Clear interview history feature
* Fully deployed frontend and backend

## Tech Stack

### Frontend

* React.js
* Vite
* React Router
* CSS
* Vercel

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Render

### Database

* MongoDB Atlas

## Project Structure

```text
interviewace-ai/
├── client/
│   ├── src/
│   │   ├── api/
│   │   │   └── interviewApi.js
│   │   ├── components/
│   │   │   ├── navbar.jsx
│   │   │   ├── hero.jsx
│   │   │   ├── features.jsx
│   │   │   ├── roleselection.jsx
│   │   │   ├── interviewscreen.jsx
│   │   │   ├── resultpage.jsx
│   │   │   ├── dashboard.jsx
│   │   │   └── footer.jsx
│   │   ├── data/
│   │   │   ├── roles.js
│   │   │   └── questions.js
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── interviewController.js
│   ├── models/
│   │   └── Interview.js
│   ├── routes/
│   │   └── interviewRoutes.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

## API Endpoints

| Method | Endpoint          | Description                 |
| ------ | ----------------- | --------------------------- |
| GET    | `/api/health`     | Check backend API status    |
| POST   | `/api/interviews` | Save interview result       |
| GET    | `/api/interviews` | Fetch all interview history |
| DELETE | `/api/interviews` | Clear interview history     |

## How It Works

1. User selects an interview role.
2. The app displays questions based on the selected role.
3. User writes answers and submits the interview.
4. The system calculates answer-wise feedback and overall score.
5. Interview result is saved in MongoDB.
6. Dashboard fetches and displays interview history from the backend.

## Local Setup

### Clone the repository

```bash
git clone https://github.com/akanksha-mishra13/interviewace-ai.git
cd interviewace-ai
```

### Setup backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm run dev
```

Backend will run on:

```text
http://localhost:5001
```

### Setup frontend

Open another terminal:

```bash
cd client
npm install
```

Create a `.env` file inside the `client` folder:

```env
VITE_API_BASE_URL=http://localhost:5001/api
```

Run frontend:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

## Screenshots

### Home Page

Add screenshot here.

### Interview Page

Add screenshot here.

### Result Page

Add screenshot here.

### Dashboard Page

Add screenshot here.

## Future Improvements

* Add real AI feedback using Gemini or OpenAI API
* Add user authentication with login and signup
* Add personalized interview history per user
* Add resume-based interview question generation
* Add voice-based interview practice
* Add admin dashboard

## Author

Akanksha Mishra
B.Tech CSE Student
GitHub: https://github.com/akanksha-mishra13
