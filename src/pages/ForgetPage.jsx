import React from "react";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/backgroundImage.jpg";
const ForgetPage = () => {
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
            <h2 className="text-2xl font-bold">Forget Password</h2>
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
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              New Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border rounded placeholder-gray-400"
              placeholder="••••••••"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-3 border rounded placeholder-gray-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="block w-4/5 mx-auto bg-teal-500 text-white p-2 rounded hover:bg-teal-600"
          >
            Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPage;
