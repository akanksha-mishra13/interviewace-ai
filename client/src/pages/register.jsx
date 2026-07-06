import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
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

  // --- FIXED: Google Login Handler ---
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setLoading(true);
      
      const { data } = await axios.post("http://localhost:5001/api/auth/google", {
        token: credentialResponse.credential,
      });

      if (data.success) {
        // 1. ACTUALLY save the token and user data to the browser
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        
        alert("Google Login Successful!");
        
        // 2. Teleport the user straight into the app!
        // We use window.location.href to force the whole app to refresh
        // so your AuthContext immediately sees the new localStorage data.
        window.location.href = "/"; 
      }
    } catch (error) {
      console.error("Google login failed", error);
      alert(error.response?.data?.message || "Google Login Failed");
    } finally {
      setLoading(false);
    }
  };

  // --- Standard Form Handler ---
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
        // For normal registration, sending them to login makes sense
        // so they can use their new password for the first time.
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
          <p className="badge">Join InterviewAce AI</p>
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
        <form className="auth-card" onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <p>Start your interview preparation journey.</p>

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
            placeholder="Password (min. 6 characters)"
            value={formData.password}
            onChange={handleChange}
            minLength={6}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength={6}
            required
          />

          <button className="primary-btn auth-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Register"}
          </button>

          {/* --- Google Login Button --- */}
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => {
                console.log('Google Login Failed');
                alert('Failed to connect to Google');
              }}
            />
          </div>

          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;