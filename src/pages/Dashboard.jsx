import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { DashBoardSideBar } from "../components/DashboardSideBar";

function Dashboard() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      {/* Navbar at the top */}
     
        <Navbar />
    

      {/* Main area: sidebar + content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-56 flex-shrink-0 flex flex-col shadow-[2px_0_10px_rgba(0,0,0,0.3)] bg-white overflow-y-auto scrollbar-hide">
          <DashBoardSideBar />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-y-auto px-6 py-4 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
