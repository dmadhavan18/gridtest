import "./Login.scss";

const Login = () => {
  return (
    <div className="login-page">
      <header className="login-header">
        <div className="logo">🤖</div>
        <h1 className="title">TestAutoPilot</h1>
        <p className="subtitle">Intelligent Test Automation Platform</p>
        <div className="button-group">
          <button className="btn primary">Get Started</button>
          <button className="btn outline">Learn More</button>
        </div>
      </header>

      <div className="login-card">
        <div className="icon">🤖</div>
        <h2>Welcome Back</h2>
        <p>Sign in to your TestAutoPilot account</p>

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
            Don't have an account? <a href="#">Create an account</a>
          </p>
          <div className="or">Or continue with</div>
          <div className="social-icons">
            <button>G</button>
            <button>?</button>
            <button>≡</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
