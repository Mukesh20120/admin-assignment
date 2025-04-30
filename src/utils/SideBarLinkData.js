import {
    HiChartPie,
    HiInbox,
    HiUser,
    HiViewBoards,
    HiShoppingBag,
    HiArrowSmRight,
    HiTable,
    HiShieldCheck,
    HiDocumentText,
    HiBriefcase,
    HiGlobeAlt,
    HiQuestionMarkCircle,
    HiInformationCircle,
    HiNewspaper,
    HiCube,
    HiCog,
  } from "react-icons/hi";
  
  const SideBarLinkData = [
    { label: "Dashboard", href: "#", icon: HiChartPie },
    { label: "Article", href: "#", icon: HiDocumentText },
    { label: "Auto Dealership", href: "#", icon: HiShoppingBag },
    {
      label: "Blog",
      icon: HiDocumentText,
      subItems: [
        { label: "Blog Category", href: "#" },
        { label: "Blog Page", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      label: "Career",
      icon: HiBriefcase,
      subItems: [
        { label: "Career", href: "#" },
        { label: "Career Openings", href: "#" },
        { label: "Career Opening Category", href: "#" },
      ],
    },
    { label: "Country, State, City", href: "#", icon: HiGlobeAlt },
    { label: "FAQ's", href: "#", icon: HiQuestionMarkCircle },
    {
      label: "Free Shop News",
      icon: HiNewspaper,
      subItems: [
        { label: "Free Shop News Category", href: "#" },
        { label: "Free Shop News", href: "#" },
      ],
    },
    {
      label: "Help Center",
      icon: HiInformationCircle,
      subItems: [
        { label: "Category", href: "#" },
        { label: "Help Center Knowledge Base", href: "#" },
      ],
    },
    {
      label: "How It Works",
      icon: HiDocumentText,
      subItems: [
        { label: "Add How Its Work", href: "#" },
        { label: "Add Bottom Data in HW", href: "#" },
      ],
    },
    {
      label: "Jobs",
      icon: HiBriefcase,
      subItems: [
        { label: "Service Category", href: "#" },
        { label: "Jobs", href: "#" },
      ],
    },
    {
      label: "Press",
      icon: HiNewspaper,
      subItems: [
        { label: "Press News Category", href: "#" },
        { label: "Press Topic", href: "#" },
        { label: "Press News", href: "#" },
        { label: "Press Offer Up News", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      label: "Product",
      icon: HiCube,
      subItems: [
        { label: "Category", href: "#" },
        { label: "Subcategory", href: "#" },
        { label: "Conditions", href: "#" },
        { label: "Product", href: "#" },
        { label: "Brand", href: "#" },
        { label: "Model", href: "#" },
      ],
    },
    { label: "Privacy & Terms", href: "#", icon: HiDocumentText },
    {
      label: "Trust & Safety",
      icon: HiShieldCheck,
      subItems: [
        { label: "Add", href: "#" },
        { label: "Add Button Data", href: "#" },
        { label: "List", href: "#" },
      ],
    },
    { label: "User Management", href: "#", icon: HiUser },
    { label: "Order", href: "#", icon: HiShoppingBag },
    { label: "Settings", href: "#", icon: HiCog },
  ];
  
  export default SideBarLinkData;
  