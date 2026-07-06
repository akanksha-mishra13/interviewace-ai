import "./hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="badge">AI Powered Interview Preparation</p>

        <h1>
          Land Your <span>Dream Job</span> with Intelligent Mock Interviews
        </h1>

        <p className="hero-text">
          Practice company-level interview questions, receive instant AI
          feedback, detailed performance analysis, and personalized improvement
          tips to crack your next interview with confidence.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "35px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "rgba(200,217,230,0.08)",
              border: "1px solid rgba(200,217,230,0.18)",
              padding: "10px 18px",
              borderRadius: "999px",
              color: "#C8D9E6",
              fontWeight: "600",
            }}
          >
            🎤 500+ Interview Questions
          </div>

          <div
            style={{
              background: "rgba(200,217,230,0.08)",
              border: "1px solid rgba(200,217,230,0.18)",
              padding: "10px 18px",
              borderRadius: "999px",
              color: "#C8D9E6",
              fontWeight: "600",
            }}
          >
            🤖 AI Evaluation
          </div>

          <div
            style={{
              background: "rgba(200,217,230,0.08)",
              border: "1px solid rgba(200,217,230,0.18)",
              padding: "10px 18px",
              borderRadius: "999px",
              color: "#C8D9E6",
              fontWeight: "600",
            }}
          >
            📈 Progress Tracking
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#roles" className="primary-btn">
            🚀 Start Interview
          </a>

          <button className="secondary-btn">
            📊 Dashboard
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "45px",
            marginTop: "55px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2
              style={{
                color: "#C8D9E6",
                fontSize: "38px",
              }}
            >
              1000+
            </h2>

            <p style={{ color: "#b7c3cf" }}>
              Interviews Practiced
            </p>
          </div>

          <div>
            <h2
              style={{
                color: "#C8D9E6",
                fontSize: "38px",
              }}
            >
              25+
            </h2>

            <p style={{ color: "#b7c3cf" }}>
              Job Roles
            </p>
          </div>

          <div>
            <h2
              style={{
                color: "#C8D9E6",
                fontSize: "38px",
              }}
            >
              AI
            </h2>

            <p style={{ color: "#b7c3cf" }}>
              Instant Feedback
            </p>
          </div>
        </div>
      </div>

      <div className="hero-card">
        <h3>AI Performance Report</h3>

        <div className="score-circle">92%</div>

        <div
          style={{
            marginTop: "20px",
            textAlign: "left",
          }}
        >
          <p>✅ Technical Knowledge</p>
          <p>✅ Communication Skills</p>
          <p>✅ Confidence Level</p>
          <p>⚡ Problem Solving</p>
          <p>📈 Personalized Suggestions</p>
        </div>

        <div
          style={{
            marginTop: "30px",
            padding: "18px",
            borderRadius: "15px",
            background: "rgba(200,217,230,0.08)",
          }}
        >
          <h4
            style={{
              marginBottom: "10px",
              color: "#C8D9E6",
            }}
          >
            AI Recommendation
          </h4>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.7",
            }}
          >
            You have strong technical knowledge. Focus more on explaining your
            projects with real-world examples to increase interview confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;