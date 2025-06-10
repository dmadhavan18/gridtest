import GridLogo from "../assets/GRID-LOGO.png";
import Cover from "../assets/software.avif";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="navbar flex justify-between items-center gap-3 p-8 bg-white shadow-md h-32 font-normal text-[1.6rem]">
        <div className="logo text-red-600">
          <img src={GridLogo} alt="Grid Logo" className="gridLogo " /> Grid-Test
        </div>
        <nav className="nav-links">
          <a href="#">Features</a>
          <a href="#">How it Works</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
        </nav>
        <div className="auth-buttons">
          <button className="btn outline ">
            <Link to="/signup">Signup</Link>
          </button>
          <button className="btn primary">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </header>

      <main className="hero">
        <div className="hero-text">
          <h1>
            <span>AI-Powered</span> Test Case Generation & Smart Reports for
            Websites
          </h1>
          <p>
            Instantly generate robust test cases and insightful reports for your
            websites using advanced AI. Simplify QA, boost reliability, and
            accelerate releases.
          </p>
          <div className="input-group">
            <input type="text" placeholder="Enter your website URL" />
            <button className="btn primary">Get Started</button>
          </div>
          <ul className="features">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              No code required
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Works with any site
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Ease of Use
            </li>
          </ul>
        </div>
        <div className="hero-image">
          <img src={Cover} alt="Dashboard" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
