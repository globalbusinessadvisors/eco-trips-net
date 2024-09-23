import { HomeIcon, PlaneIcon, HotelIcon, CarIcon, LeafIcon, UtensilsIcon } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Flights",
    to: "/flights",
    icon: <PlaneIcon className="h-4 w-4" />,
    page: <div>Eco-Friendly Flights</div>,
  },
  {
    title: "Hotels",
    to: "/hotels",
    icon: <HotelIcon className="h-4 w-4" />,
    page: <div>Sustainable Hotels</div>,
  },
  {
    title: "Car Rentals",
    to: "/car-rentals",
    icon: <CarIcon className="h-4 w-4" />,
    page: <div>Green Car Rentals</div>,
  },
  {
    title: "Eco Tours",
    to: "/eco-tours",
    icon: <LeafIcon className="h-4 w-4" />,
    page: <div>Eco-Friendly Tours</div>,
  },
  {
    title: "Restaurants",
    to: "/restaurants",
    icon: <UtensilsIcon className="h-4 w-4" />,
    page: <div>Sustainable Dining</div>,
  },
];
