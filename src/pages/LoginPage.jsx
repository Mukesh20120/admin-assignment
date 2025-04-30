import React from "react";
import {Link} from 'react-router'
import logo from "../assets/logo.png";
import backgroundImage from "../assets/backgroundImage.jpg";
const LoginPage = () => {
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

        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email address:
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              placeholder="e.g., user@example.com"
            />
            <Link to="/forget" className="text-blue-500 text-sm float-right mt-1">
              Forget Password?
            </Link>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border rounded placeholder-gray-400"
              placeholder="••••••••"
            />
          </div>
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700 text-sm">
                Remember Password
              </span>
            </label>
          </div>
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
