import React from "react";
import "./Signup.scss";
import logo from "../../assets/gd-logo.svg"; // Adjust path based on your folder structure
import googleLogo from "../../assets/google-icon-logo-svgrepo-com.svg";
import githubLogo from "../../assets/github-142-svgrepo-com.svg";

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="icon">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <h2>Create Account</h2>

        <form className="signup-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Create Password" />
          <input type="password" placeholder="Confirm Password" />
          <button className="btn signup">Sign Up</button>
        </form>

        <div className="footer">
          <p>
            Already have an account? <a href="/login">Sign in</a>
          </p>

          <div className="or">Or continue with</div>
          <div className="social-icons auth-icon-group">
            <a href="/auth/google">
              <img src={googleLogo} alt="Google" />
            </a>
            <a href="/auth/github">
              <img src={githubLogo} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
