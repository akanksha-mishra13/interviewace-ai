import "./footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>
            Interview<span>Ace</span> AI
          </h2>

          <p>
            Prepare smarter with AI-powered mock interviews,
            personalized feedback, and performance analytics designed
            to help students crack technical interviews.
          </p>

        </div>

        <div className="footer-column">

          <h3>Platform</h3>

          <a href="#features">Features</a>
          <a href="#roles">Roles</a>
          <a href="/dashboard">Dashboard</a>

        </div>

        <div className="footer-column">

          <h3>Technologies</h3>

          <p>React</p>
          <p>Node.js</p>
          <p>MongoDB</p>
          <p>Gemini AI</p>

        </div>

        <div className="footer-column">

          <h3>Built By</h3>

          <p>Akanksha Mishra</p>
          <p>B.Tech CSE Student</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 InterviewAce AI. All Rights Reserved.
        </p>

        <div className="footer-tags">

          <span>AI Interview</span>
          <span>Placement Prep</span>
          <span>Career Growth</span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;