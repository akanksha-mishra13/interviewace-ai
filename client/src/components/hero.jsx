function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="badge">AI Mock Interview Platform</p>

        <h1>
          Practice interviews with <span>AI-powered feedback</span>
        </h1>

        <p className="hero-text">
          Select your target role, answer real interview questions, and get
          instant AI-based scores, feedback, and improvement tips to prepare
          better for placements.
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
  );
}

export default Hero;