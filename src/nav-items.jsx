import { HomeIcon, TagIcon, InfoIcon, PhoneIcon } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Eco Deals",
    to: "/deals",
    icon: <TagIcon className="h-4 w-4" />,
    page: <Index />, // This would be replaced with a Deals component
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <div>About Page</div>, // This would be replaced with an About component
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <PhoneIcon className="h-4 w-4" />,
    page: <div>Contact Page</div>, // This would be replaced with a Contact component
  },
];
