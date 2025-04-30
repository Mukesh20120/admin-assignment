import {
    Sidebar,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
  } from "flowbite-react";
  import { FaAngleDown,FaAngleUp } from "react-icons/fa6";
  import { useState } from "react";
import SideBarLinkData from "../utils/SideBarLinkData";

  
  export function DashBoardSideBar() {
    const [openDropdown, setOpenDropdown] = useState(null); // which parent dropdown is open
    const [activeParent, setActiveParent] = useState(null);
    const [activeSubItem, setActiveSubItem] = useState(null);
  
    const handleParentClick = (label, hasSubItems, e) => {
      e.preventDefault();
      if (hasSubItems) {
        setOpenDropdown(openDropdown === label ? null : label);
      } else {
        setOpenDropdown(null);
        setActiveParent(label);
        setActiveSubItem(null);
      }
    };
  
    const handleSubItemClick = (parentLabel, subLabel) => {
      setActiveParent(parentLabel);
      setActiveSubItem(subLabel);
      setOpenDropdown(null);
    };
  
    return (
      <Sidebar aria-label="Dashboard Sidebar" className="bg-white relative">
        <SidebarItems>
          <SidebarItemGroup>
            {SideBarLinkData.map(({ label, href, icon, subItems }) => (
              <div key={label} className="relative">
                <SidebarItem
                  href={href}
                  icon={icon}
                  onClick={(e) => handleParentClick(label, !!subItems, e)}
                  className={`${
                    activeParent === label ? "bg-gray-200 font-semibold" : ""
                  }`}
                  label={subItems && (openDropdown?<FaAngleUp/>:<FaAngleDown />)}
                >
                  {label}
                </SidebarItem>
  
                {/* Submenu dropdown */}
                {subItems && openDropdown === label && (
                  <div className="absolute w-full left-0 top-full bg-white rounded shadow z-50 py-1">
                    {subItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubItemClick(label, item.label);
                        }}
                        className={`block px-4 py-2 text-sm hover:bg-gray-200 ${
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
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    );
  }
  