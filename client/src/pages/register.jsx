import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";
import "./login.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.success) {
        alert("Registration Successful!");
        navigate("/login");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">

      <div className="auth-left">

        <div className="auth-overlay">

          <p className="badge">
            Join InterviewAce AI
          </p>

          <h1>
            Build Your
            <span> Dream Career</span>
          </h1>

          <p>
            Create your free account and prepare with AI-powered
            mock interviews, detailed feedback, and placement-focused
            practice sessions.
          </p>

          <div className="auth-features">

            <div>Unlimited Practice</div>

            <div>Detailed AI Analysis</div>

            <div>Track Progress</div>

          </div>

        </div>

      </div>

      <div className="auth-right">

        <form
          className="auth-card"
          onSubmit={handleSubmit}
        >

          <h2>Create Account</h2>

          <p>
            Start your interview preparation journey.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button
            className="primary-btn auth-btn"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          <p className="auth-switch">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </form>

      </div>

    </section>
  );
};

export default Register;