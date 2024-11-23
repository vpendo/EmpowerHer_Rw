import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Register Page
export default function Register() {
  const [page, setPage] = useState(1);
  const [values, setValues] = useState({
    username: "",  // Added username field
    email: "",
    password: "",
    role: "student" // Default role set to "student"
  });

  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(""); // Track error messages
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validate form data
    if (!values.username || !values.email || !values.password) {
      setError("All fields are required.");
      return;
    }

    setIsLoading(true);
    setError(""); // Reset any previous error

    try {
      const res = await axios.post("http://localhost:8000/auth/register", values);

      // Check if registration is successful
      if (res.data.status === "Successfully Registered") {
        navigate("/login");
      } else {
        setError(res.data.error || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during registration:", err);

      // Error handling for API responses
      if (err.response) {
        // Check if the error response contains a "detail" field with specific error message
        if (err.response.data && err.response.data.detail) {
          setError(err.response.data.detail);  // Directly display the error message from "detail"
        } else if (err.response.status === 400) {
          // Handle specific status codes like 400 (Bad Request)
          setError("Bad request. Please check your input.");
        } else if (err.response.status === 500) {
          // Handle server errors
          setError("Server error. Please try again later.");
        } else {
          setError("An error occurred. Please try again later.");
        }
      } else if (err.request) {
        // Handle no response from server
        setError("No response from server. Please check your connection.");
      } else {
        // General error
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-violet-500">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Welcome Content */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent mb-4">
                Dream. Code. Rise.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your journey to tech excellence starts here
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Code</h3>
                    <p className="text-gray-600">Master modern tech skills</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-violet-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Connect</h3>
                    <p className="text-gray-600">Learn from the best</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Thrive</h3>
                    <p className="text-gray-600">Launch your tech career</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center space-y-2">
                <p className="text-gray-600">
                  Already a member?{' '}
                  <Link to="/login" className="text-indigo-500 hover:text-indigo-600">Sign in</Link>
                </p>
                <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm">
                  ← Back to Home
                </Link>
              </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="md:w-1/2 bg-gradient-to-br from-indigo-500 to-violet-500 p-12 text-white relative">
              <h2 className="text-2xl font-bold mb-6">Join EmpowerHer</h2>
              
              {error && (
                <div className="bg-white/10 text-white p-4 rounded-lg mb-6 backdrop-blur-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Username <span className="text-pink-200">*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 backdrop-blur-sm"
                    placeholder="Enter your username"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email <span className="text-pink-200">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 backdrop-blur-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Password <span className="text-pink-200">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 backdrop-blur-sm"
                    placeholder="Create a password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white text-indigo-500 py-3 rounded-lg hover:bg-white/90 transition-all duration-300 disabled:opacity-50 font-medium"
                >
                  {isLoading ? "Processing..." : "Create Account"}
                </button>
              </form>

              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
