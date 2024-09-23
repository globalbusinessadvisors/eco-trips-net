import { HomeIcon, PlaneIcon, HotelIcon, CarIcon, LeafIcon, UtensilsIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Flights from "./pages/Flights.jsx";
import Hotels from "./pages/Hotels.jsx";
import CarRentals from "./pages/CarRentals.jsx";
import EcoTours from "./pages/EcoTours.jsx";
import Restaurants from "./pages/Restaurants.jsx";

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
    page: <Flights />,
  },
  {
    title: "Hotels",
    to: "/hotels",
    icon: <HotelIcon className="h-4 w-4" />,
    page: <Hotels />,
  },
  {
    title: "Car Rentals",
    to: "/car-rentals",
    icon: <CarIcon className="h-4 w-4" />,
    page: <CarRentals />,
  },
  {
    title: "Eco Tours",
    to: "/eco-tours",
    icon: <LeafIcon className="h-4 w-4" />,
    page: <EcoTours />,
  },
  {
    title: "Restaurants",
    to: "/restaurants",
    icon: <UtensilsIcon className="h-4 w-4" />,
    page: <Restaurants />,
  },
];
