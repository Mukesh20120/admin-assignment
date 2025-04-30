import { IoSearchOutline } from "react-icons/io5";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { Link } from "react-router";
import { BsBellFill } from "react-icons/bs";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = true;

  const handleLogOut = () => {
    console.log("logout");
  };

  return (
    <header className="w-full shadow-xl">
      <nav className="flex justify-between items-center py-3 px-6 w-full">
        <div></div>
        {/* search input */}
        <div className="relative text-center sm:w-72 w-40 space-x-2">
          <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />

          <input
            type="text"
            placeholder="Search here"
            className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
          />
        </div>

        {/* rigth side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div className="relative p-1 flex items-center rounded-sm bg-primary text-white mr-8">
            <BsBellFill className="text-lg" color="blue" />
            <span className="absolute -top-1 -right-0.5 bg-red-500 text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          <div
            className="flex justify-between items-center gap-3"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              src={avatarImg}
              alt=""
              className={`size-9 rounded-full ${
                currentUser ? "ring-2 ring-blue-500" : ""
              }`}
            />
            <div>
              <p className="text-sm font-bold">Kalyani kumari</p>
              <p className="text-sm text-gray-300">Admin</p>
            </div>
          </div>
          {/* show dropdowns */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
              <ul className="py-2">
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
      </nav>
    </header>
  );
};

export default Navbar;
