import {
    Sidebar,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
  } from "flowbite-react";
  import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiShoppingBag,
    HiTable,
    HiUser,
    HiViewBoards,
  } from "react-icons/hi";
  import { FaAngleDown } from "react-icons/fa6";
  
  // Sidebar menu config
  const sidebarLinks = [
    { label: "Dashboard", href: "#", icon: HiChartPie },
    { label: "Kanban", href: "#", icon: HiViewBoards, labelIcon: <FaAngleDown /> },
    { label: "Inbox", href: "#", icon: HiInbox, badge: "3" },
    { label: "Users", href: "#", icon: HiUser },
    { label: "Products", href: "#", icon: HiShoppingBag },
    { label: "Sign In", href: "#", icon: HiArrowSmRight },
    { label: "Sign Up", href: "#", icon: HiTable },
  ];
  
  export function DashBoardSideBar() {
    return (
      <Sidebar aria-label="Dashboard Sidebar" className="bg-white">
        <SidebarItems>
          <SidebarItemGroup>
            {sidebarLinks.map(({ label, href, icon, badge, labelIcon }) => (
              <SidebarItem
                key={label}
                href={href}
                icon={icon}
                label={badge || labelIcon}
                labelColor={badge ? "dark" : undefined}
              >
                {label}
              </SidebarItem>
            ))}
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    );
  }
  