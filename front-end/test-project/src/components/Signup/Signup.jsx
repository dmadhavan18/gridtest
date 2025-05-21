import React from "react";
import "./Signup.scss";

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-header">
        <div className="logo">
          
        </div>
        <div className="title">TestAutoPilot</div>
        <div className="subtitle">Intelligent Test Automation Platform</div>
        <div className="button-group">
          <button className="btn primary">Get Started</button>
          <button className="btn outline">Learn More</button>
        </div>
      </div>

      <div className="signup-card">
        <div className="icon">
         
        </div>
        <h2>Create Account</h2>
        <p>Sign up for a new TestAutoPilot account</p>

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
          <div className="social-icons">
            <button>
            </button>
            <button>
            </button>
            <button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
