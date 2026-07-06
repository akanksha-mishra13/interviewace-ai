import "./features.css";

function Features() {
  return (
    <section className="features" id="features">

      <div className="section-heading">
        <p className="badge">Why Choose InterviewAce AI</p>

        <h2>Everything You Need to Ace Your Next Interview</h2>

        <p className="section-subtitle">
          Experience realistic AI-powered mock interviews with detailed
          feedback, performance tracking, and role-specific preparation in one
          platform.
        </p>
      </div>

      <div className="feature-grid">

        <div className="feature-card">
          <div className="feature-number">01</div>

          <h3>Role-Specific Interviews</h3>

          <p>
            Practice curated interview questions for Software Engineer,
            Frontend, Backend, Full Stack, Data Analyst, HR, and many more
            career paths.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-number">02</div>

          <h3>AI Performance Review</h3>

          <p>
            Receive intelligent feedback on answer quality, communication,
            technical depth, confidence level, and suggestions for improvement.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-number">03</div>

          <h3>Voice Interview Practice</h3>

          <p>
            Answer naturally using your voice. Speech is converted into text and
            evaluated to simulate a real interview experience.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-number">04</div>

          <h3>Progress Analytics</h3>

          <p>
            Monitor interview history, identify weak areas, compare previous
            scores, and visualize your preparation journey over time.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;