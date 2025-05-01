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
    { label: "Dashboard", href: "#", Icon: HiChartPie },
    { label: "Article", href: "article", Icon: HiDocumentText },
    { label: "Auto Dealership", href: "#", Icon: HiShoppingBag },
    {
      label: "Blog",
      Icon: HiDocumentText,
      subItems: [
        { label: "Blog Category", href: "#" },
        { label: "Blog Page", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      label: "Career",
      Icon: HiBriefcase,
      subItems: [
        { label: "Career", href: "career" },
        { label: "Career Openings", href: "#" },
        { label: "Career Opening Category", href: "#" },
      ],
    },
    { label: "Country, State, City", href: "#", Icon: HiGlobeAlt },
    { label: "FAQ's", href: "#", Icon: HiQuestionMarkCircle },
    {
      label: "Free Shop News",
      Icon: HiNewspaper,
      subItems: [
        { label: "Free Shop News Category", href: "#" },
        { label: "Free Shop News", href: "#" },
      ],
    },
    {
      label: "Help Center",
      Icon: HiInformationCircle,
      subItems: [
        { label: "Category", href: "#" },
        { label: "Help Center Knowledge Base", href: "#" },
      ],
    },
    {
      label: "How It Works",
      Icon: HiDocumentText,
      subItems: [
        { label: "Add How Its Work", href: "#" },
        { label: "Add Bottom Data in HW", href: "#" },
      ],
    },
    {
      label: "Jobs",
      Icon: HiBriefcase,
      subItems: [
        { label: "Service Category", href: "#" },
        { label: "Jobs", href: "jobs" },
      ],
    },
    {
      label: "Press",
      Icon: HiNewspaper,
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
      Icon: HiCube,
      subItems: [
        { label: "Category", href: "#" },
        { label: "Subcategory", href: "#" },
        { label: "Conditions", href: "#" },
        { label: "Product", href: "#" },
        { label: "Brand", href: "#" },
        { label: "Model", href: "#" },
      ],
    },
    { label: "Privacy & Terms", href: "#", Icon: HiDocumentText },
    {
      label: "Trust & Safety",
      Icon: HiShieldCheck,
      subItems: [
        { label: "Add", href: "#" },
        { label: "Add Button Data", href: "#" },
        { label: "List", href: "#" },
      ],
    },
    { label: "User Management", href: "users", Icon: HiUser },
    { label: "Order", href: "#", Icon: HiShoppingBag },
    { label: "Settings", href: "#", Icon: HiCog },
  ];
  
  export default SideBarLinkData;
  