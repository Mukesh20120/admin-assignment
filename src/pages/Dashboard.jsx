import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.png";
import { DashBoardSideBar } from "../components/DashboardSideBar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-white w-screen flex">
      {/* Sidebar */}
      <div className="w-56 flex-shrink-0">
        <div className="p-4">
          <img src={logo} alt="Free Shops Logo" className="h-15 mr-4" />
        </div>
        <div className="ml-2 mr-1">
          <DashBoardSideBar />
        </div>
      </div>

      {/* Right content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        {/* Main content */}
        <div className="flex-1 bg-blue-50 p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
