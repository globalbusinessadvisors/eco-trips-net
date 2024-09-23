import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, BellIcon, UserIcon, MapPinIcon } from 'lucide-react';
import { navItems } from '../nav-items';

const Header = () => {
  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2">
          <Link to="/" className="text-2xl font-bold text-green-500">EcoTravel Rewards</Link>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for eco-friendly deals..."
                className="pl-10 pr-4 py-2 rounded-full border-green-500 focus:border-green-600"
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 text-gray-500" />
              <span>Location</span>
            </div>
            <Button variant="ghost">
              <BellIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost">
              <UserIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Navigation bar */}
        <nav className="py-2 border-t">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="flex items-center text-sm hover:text-green-500">
                  {item.icon}
                  <span className="ml-1">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
