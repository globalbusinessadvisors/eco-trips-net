import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, BellIcon, UserIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-green-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">EcoTravel Rewards</Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for eco-friendly deals..."
              className="pl-10 pr-4 py-2 rounded-full bg-white text-black"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Button variant="ghost">
            <BellIcon className="h-6 w-6" />
          </Button>
          <Button variant="ghost">
            <UserIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;