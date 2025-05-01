import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import SideBarLinkData from "../utils/SideBarLinkData";
import { Link, useNavigate } from "react-router";

export function DashBoardSideBar() {
  const [openDropdown, setOpenDropdown] = useState(null); // which parent dropdown is open
  const [activeParent, setActiveParent] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const navigate = useNavigate();
  const handleParentClick = (label, hasSubItems, e, href) => {
    e.preventDefault();
    if (hasSubItems) {
      setOpenDropdown(openDropdown === label ? null : label);
    } else {
      setOpenDropdown(null);
      setActiveParent(label);
      setActiveSubItem(null);
      navigate(href)
    }
  };

  const handleSubItemClick = (parentLabel, subLabel) => {
    setActiveParent(parentLabel);
    setActiveSubItem(subLabel);
    setOpenDropdown(null);
  };

  return (
    <div className="py-2 px-2">
      {SideBarLinkData.map(({ label, href, Icon, subItems }) => (
        <div key={label} className="relative">
          <button
            onClick={(e) => handleParentClick(label, !!subItems, e, href)}
            className={`${
              activeParent === label ? "bg-[var(--hover-btn)] " : ""
            } flex justify-between items-center px-2 hover:bg-[var(--hover-btn)] cursor-pointer rounded-xl my-2 py-2 w-full text-left`}
          >
            <div className="flex items-center gap-3">
              {Icon && <Icon size={25} />}
              <p className="text-lg">{label}</p>
            </div>
            {subItems && (
              <div>
                {openDropdown === label ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            )}
          </button>

          {/* Submenu dropdown */}
          {subItems && openDropdown === label && (
            <div className="absolute w-full left-0 top-full bg-white rounded shadow z-50 py-1">
              {subItems.map((item) => (
                <a
                  key={item.label}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubItemClick(label, item.label);
                    navigate(item.href);
                  }}
                  className={`block px-4 py-2 cursor-pointer text-md hover:bg-gray-200 ${
                    activeSubItem === item.label
                      ? "bg-gray-200 font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
