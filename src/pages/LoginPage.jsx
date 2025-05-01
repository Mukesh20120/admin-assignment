import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/backgroundImage.jpg";
import { useAuth } from "../context/AuthContext";
import { getBaseUrl } from "../utils/getBaseUrl";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      const response = await fetch(`${getBaseUrl()}/api/v1/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Login failed, please try again.");
        return;
      }
      const data = await response.json();
      if (data?.data) {
        const {
          fullName = "",
          firstName = "",
          lastName = "",
          email = "",
          phone = "",
          userType = "",
        } = data.data;
  
        const userData = {
          fullName,
          firstName,
          lastName,
          email,
          phone,
          userType,
        };
        login(userData, data.accessToken); 
        navigate('/dashboard')
      } else {
        setError("Invalid response from server.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.",error.message);
    }
  };

  return (
    <div
      className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-white px-6 py-10 rounded-lg shadow-lg w-lg">
        <div className="flex items-center justify-start mb-4">
          <img src={logo} alt="Free Shops Logo" className="h-30 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Login to Account</h2>
            <p className="text-xs text-gray-600">
              Please enter your email and password to continue
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email address:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="e.g., user@example.com"
            />
            <Link to="/forget" className="text-blue-500 text-sm float-right mt-1">
              Forget Password?
            </Link>
          </div>

          {/* Password input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded placeholder-gray-400"
              placeholder="••••••••"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-xs">{error}</p>}

          {/* Remember password checkbox */}
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700 text-sm">
                Remember Password
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="block w-4/5 mx-auto bg-teal-500 text-white p-2 rounded hover:bg-teal-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
