import GridLogo from "../assets/GRID-LOGO.png";
import Cover from "../assets/software.avif";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <header className="flex justify-between items-center px-10 py-6 bg-white shadow-md h-28">
        <div className="flex items-center gap-3 text-2xl font-bold text-red-600">
          <img src={GridLogo} alt="Grid Logo" className="h-12 w-12 object-contain" />
          Grid-Test
        </div>
        <nav className="flex gap-8 text-gray-700 font-medium text-lg">
          <a href="#" className="hover:text-blue-600 transition">Features</a>
          <a href="#" className="hover:text-blue-600 transition">How it Works</a>
          <a href="#" className="hover:text-blue-600 transition">Pricing</a>
          <a href="#" className="hover:text-blue-600 transition">FAQ</a>
        </nav>
        <div className="flex gap-4">
          <Link to="/signup">
            <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">Signup</button>
          </Link>
          <Link to="/login">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Login</button>
          </Link>
        </div>
      </header>

      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-24 py-16 gap-12">
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
            <span className="text-blue-600">AI-Powered</span> Test Case Generation &amp; Smart Reports for Websites
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Instantly generate robust test cases and insightful reports for your websites using advanced AI. Simplify QA, boost reliability, and accelerate releases.
          </p>
          <div className="flex gap-3 mb-8">
            <input
              type="text"
              placeholder="Enter your website URL"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-800 text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              No code required
            </li>
            <li className="flex items-center gap-2 text-gray-800 text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              Works with any site
            </li>
            <li className="flex items-center gap-2 text-gray-800 text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              Ease of Use
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={Cover} alt="Dashboard" className="rounded-2xl shadow-lg w-full max-w-md object-cover" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
