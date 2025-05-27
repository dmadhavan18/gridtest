import { useRef } from "react";
import "./Signup.scss";
import logo from "../../assets/GRID-LOGO.png"; // Adjust path based on your folder structure
import googleLogo from "../../assets/google-icon-logo-svgrepo-com.svg";
import githubLogo from "../../assets/github-142-svgrepo-com.svg";

const Signup = () => {
  const _name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const URL = "http://192.168.12.102:8080/api/auth/register";

  async function onSubmit(e) {
    e.preventDefault();

    const payLoad = {
      name: _name.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    if (payLoad.password !== confirmPassword.current.value) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payLoad),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="icon">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            width="32px"
            height="32px"
          />
        </div>

        <h2>Create Account</h2>

        {/* <p>Start automating your processes today</p> */}

        <form className="signup-form" onSubmit={onSubmit}>
          <input ref={_name} type="text" placeholder="Full Name" required />
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            ref={password}
            type="password"
            placeholder="Create Password"
            required
          />
          <input
            ref={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            required
          />
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
