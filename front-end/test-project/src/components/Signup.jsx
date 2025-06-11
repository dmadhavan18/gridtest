import { useRef } from "react";
import logo from "../assets/GRID-LOGO.png"; // Adjust path based on your folder structure
import googleLogo from "../assets/google-icon-logo-svgrepo-com.svg";
import githubLogo from "../assets/github-142-svgrepo-com.svg";

const Signup = () => {
  const _name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const URL = "http://192.168.29.152:8081/api/auth/register";

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
    <div className="h-dvh flex flex-col items-center justify-center overflow-auto">
      <div className="max-h-max flex flex-col items-center justify-between p-8  rounded-2xl shadow-lg w-full max-w-md gap-8">
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

        <form className="flex flex-col gap-4 w-72 justify-center" onSubmit={onSubmit}>
          <input
            ref={_name}
            type="text"
            placeholder="Full Name"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-violet-600 text-gray-600 text-base "
          />
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-violet-600 text-gray-600 text-base "
          />
          <input
            ref={password}
            type="password"
            placeholder="Create Password"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-violet-600 text-gray-600 text-base "
          />
          <input
            ref={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-violet-600 text-gray-600 text-base "
          />
          <button className="border border-gray-300 p-2 rounded-md bg-violet-600 w-32">
            Sign Up
          </button>
        </form>

        <div className="footer items-center flex flex-col gap-4">
          <p className="text-sm text-gray-600">
            By signing up, you agree to our{" "}
            <a href="/terms" className="text-blue-600">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600">
              Privacy Policy
            </a>
            . Already have an account? <a href="/login">Sign in</a>
          </p>

          <div className="or">Or continue with</div>
          <div className="flex gap-4">
            <a href="/auth/google">
              <img src={googleLogo} alt="Google" width="48px" height="48px" />
            </a>
            <a href="/auth/github">
              <img src={githubLogo} alt="GitHub" width="48px" height="48px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
