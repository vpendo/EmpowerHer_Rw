import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Login Page
export default function Login() {
  const [doneN, setDoneN] = useState(null);
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    if (!values.email || !values.password) {
      setDoneN("You can't leave empty fields");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/auth/login", {
        email: values.email,
        password: values.password
      });

      // Assuming successful login response contains a status message
      if (res.data.status == "Successfully logged in") {
        console.log(res.data.UserInfo)
        localStorage.setItem("UserInfo",JSON.stringify(res.data.UserInfo))
        localStorage.setItem("userRole", res.data.UserInfo.role.toLowerCase());
         window.location.href ="/studentdashboard";
      } else {
        setDoneN(res.data.Error || "Login failed. Please try again.");
        console.log(res.data.status)
      }
    } catch (err) {
      // Handle errors here
      if (err.response) {
        // The server responded with a status code other than 2xx
        if (err.response.data && err.response.data.detail) {
          // Directly display the error message from "detail"
          setDoneN(err.response.data.detail);
        } else if (err.response.status === 401) {
          setDoneN("Invalid email or password.");
        } else if (err.response.status === 422) {
          setDoneN("Email and password are required.");
        } else {
          setDoneN("An unexpected error occurred. Please try again.");
        }
      } else if (err.request) {
        // The request was made but no response was received
        setDoneN("Network error. Please check your connection.");
      } else {
        // Something happened in setting up the request
        setDoneN("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-400 to-violet-500">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent mb-8">
          Welcome Back!
        </h2>

        {doneN && (
          <div 
            onClick={() => setDoneN(null)} 
            className="bg-red-50 text-red-500 p-4 rounded-lg mb-6 cursor-pointer"
          >
            {doneN}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={values.password}
              onChange={handleChange}
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300"
          >
            Sign in
          </button>

          <div className="text-center space-y-3">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-indigo-500 hover:text-indigo-600 font-medium">
                Sign Up
              </Link>
            </p>
            
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
