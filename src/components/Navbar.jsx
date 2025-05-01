import { IoSearchOutline } from "react-icons/io5";
import avatarImg from "../assets/avatar.png";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { BsBellFill } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Articles", href: "/article" },
  { name: "Career", href: "/career" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user: currentUser, logout } = useAuth();
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate("/login");
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-lg z-50">
      <nav className="flex justify-between items-center py-3 px-6 w-full">
        {/* Logo */}
        <div className="p-2">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Search input */}
        <div className="relative text-center sm:w-72 w-40">
          <IoSearchOutline className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search here"
            className="bg-[#EAEAEA] w-full py-2 pl-10 pr-4 rounded-md focus:outline-none"
          />
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notification icon */}
          <div className="relative p-2 rounded-full bg-primary text-white">
            <BsBellFill className="text-lg" color="blue" />
            <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          {/* Avatar + Name + Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={avatarImg}
                alt=""
                className={`w-9 h-9 rounded-full object-cover ${
                  currentUser ? "ring-2 ring-blue-500" : ""
                }`}
              />
              <div>
                <p className="text-sm font-bold">{currentUser?.fullName || ""}</p>
                <p className="text-xs text-gray-400">{currentUser?.userType || ""}</p>
              </div>
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-12 w-48 bg-white shadow-lg rounded-md z-50">
                <ul>
                  {navigation.map((item) => (
                    <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
