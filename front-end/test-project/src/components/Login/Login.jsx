import "./Login.scss";
import GridLogo from "../../assets/GRID-LOGO.png";
import googleLogo from "../../assets/google-icon-logo-svgrepo-com.svg";
import githubLogo from "../../assets/github-142-svgrepo-com.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <img src={GridLogo} alt="logo" width="32px" height="32px" />
        <h2>Welcome Back</h2>
        <p>Sign in to your Grid-Test account</p>

        <form className="login-form">
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn signin">
            Sign In
          </button>
        </form>

        <div className="footer">
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
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

export default Login;
