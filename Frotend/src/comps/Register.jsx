import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Register Page
export default function Register() {
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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">Register to EmpowerHer</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold" htmlFor="username">
            Username <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={values.username}
            onChange={handleChange}
            id="username"
            name="username"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold" htmlFor="password">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          type="submit"
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? "Processing..." : "Sign Up"}
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-blue-500">Sign in</Link>
        </p>
      </form>
    </div>
  );
}
