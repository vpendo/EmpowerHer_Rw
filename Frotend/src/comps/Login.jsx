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
         window.location.href ="/dashboard";
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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">Login to EmpowerHer</h2>

        {doneN && (
          <div onClick={() => setDoneN(null)} className="text-red-500 bg-red-50 p-2 mb-2">
            {doneN}
          </div>
        )}

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
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Sign in
        </button>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/register" className="text-blue-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
