import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.png";
import { DashBoardSideBar } from "../components/DashboardSideBar";

function Dashboard() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-56 flex-shrink-0 flex flex-col">
        <div className="p-4">
          <img src={logo} alt="Free Shops Logo" className="h-12 mr-4" />
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <DashBoardSideBar />
        </div>
      </div>

      {/* Right content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="flex-shrink-0">
          <Navbar />
        </div>

        {/* Main content with its own scroll */}
        <div className="flex-1 overflow-y-auto bg-blue-50 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
