import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginUser(formData);

      login(data.user, data.token);

      navigate("/");
    } catch (err) {
      alert(err.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">

      <div className="auth-left">

        <div className="auth-overlay">

          <p className="badge">
            AI Powered Interview Platform
          </p>

          <h1>
            Crack Your Next
            <span> Technical Interview</span>
          </h1>

          <p>
            Practice with AI-generated interview questions,
            receive instant feedback, improve your confidence,
            and land your dream job.
          </p>

          <div className="auth-features">

            <div>AI Mock Interviews</div>
            <div>Instant Feedback</div>
            <div>Progress Tracking</div>

          </div>

        </div>

      </div>

      <div className="auth-right">

        <form
          className="auth-card"
          onSubmit={handleSubmit}
        >

          <h2>
            Welcome Back
          </h2>

          <p>
            Sign in to continue your interview preparation.
          </p>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            className="primary-btn auth-btn"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Login"}
          </button>

          <p className="auth-switch">

            Don't have an account?

            <Link to="/register">
              Register
            </Link>

          </p>

        </form>

      </div>

    </section>
  );
};

export default Login;