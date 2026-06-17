
# InterviewAce AI

InterviewAce AI is a React-based AI Mock Interview Preparation Platform built to help students practice role-based interview questions, write answers, receive basic AI-style feedback, track scores, and monitor interview progress through a dashboard.

## Features

* Home page with modern landing UI
* Role-based interview preparation
* Roles included:

  * SDE
  * Frontend Developer
  * Backend Developer
  * Data Analyst
  * HR Round
* Interview question flow
* Answer writing area
* Word count validation
* Basic AI-style feedback
* Question-wise scoring
* Overall interview score
* Result summary page
* Dashboard page
* Interview history using localStorage
* Dashboard statistics:

  * Total attempts
  * Average score
  * Best score
  * Best role
* React Router navigation
* Reusable component structure
* Responsive UI
* Footer and polished layout

## Tech Stack

* React
* Vite
* JavaScript
* React Router
* CSS
* LocalStorage
* Git and GitHub

## Project Structure

```text
interviewace-ai/
├── client/
│   ├── src/
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
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── README.md
└── .gitignore
```

## How to Run Locally

```bash
cd client
npm install
npm run dev
```

Open the app in browser:

```text
http://localhost:5173/
```

## Current Status

Frontend version is completed.

Completed frontend modules:

```text
Level 0  - Project setup
Level 1  - Home page UI
Level 2  - Role selection
Level 3  - Interview question flow
Level 4  - Answer input
Level 5  - Result summary page
Level 6  - Reusable components
Level 7  - Separate data files
Level 8  - React Router navigation
Level 9  - Dashboard page
Level 10 - LocalStorage interview history
Level 11 - Basic feedback and scoring
Level 12 - Word count and submit validation
Level 13 - Footer and UI polish
Level 14 - Dashboard statistics
Level 15 - Final frontend cleanup
```

## Future Improvements

* Add real AI feedback using Gemini/OpenAI API
* Add backend using Node.js and Express
* Store interview history in MongoDB
* Add login and signup authentication
* Add voice answer recording
* Add speech-to-text interview practice
* Deploy frontend on Vercel
* Deploy backend on Render

