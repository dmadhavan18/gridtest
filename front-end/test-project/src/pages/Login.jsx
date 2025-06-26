import GridLogo from "../assets/GRID-LOGO.png";
import googleLogo from "../assets/google-icon-logo-svgrepo-com.svg";
import githubLogo from "../assets/github-142-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const URL = "http://192.168.12.102:8080/api/auth/login";

  async function onSubmitHandle(e) {
    e.preventDefault();
    const payLoad = {
      email: email.current.value,
      password: password.current.value,
    };
    // test

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

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <img
          src={GridLogo}
          alt="logo"
          width="32px"
          height="32px"
          className="mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">
          Sign in to your Grid-Test account
        </p>

        <form className="space-y-4" onSubmit={onSubmitHandle}>
          <input
            ref={email}
            type="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            ref={password}
            type="password"
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="mb-2">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-gray-400 text-sm">Or continue with</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="/auth/google"
              className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition"
            >
              <img src={googleLogo} alt="Google" className="w-6 h-6" />
            </a>
            <a
              href="/auth/github"
              className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition"
            >
              <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
