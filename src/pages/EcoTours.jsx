import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPinIcon, CalendarIcon, UsersIcon } from 'lucide-react';

const EcoTours = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Eco-Friendly Tours</h1>
      <div className="mb-8">
        <img src="https://source.unsplash.com/random/1200x400?eco-tour" alt="Eco Tour" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="relative">
            <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Destination"
              className="pl-10"
            />
          </div>
          <div className="relative">
            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="date"
              placeholder="Start date"
              className="pl-10"
            />
          </div>
          <div className="relative">
            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="date"
              placeholder="End date"
              className="pl-10"
            />
          </div>
          <div className="relative">
            <UsersIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="number"
              placeholder="Number of travelers"
              className="pl-10"
            />
          </div>
        </div>
        <Button className="w-full md:w-auto">Search Tours</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={`https://source.unsplash.com/random/400x300?eco-tour&sig=${item}`} alt="Eco Tour" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Eco Adventure Tour {item}</h3>
              <p className="text-gray-600 mb-2">Explore nature responsibly with our guided eco-tours.</p>
              <div className="flex justify-between items-center">
                <span className="text-green-500 font-bold">From $299</span>
                <Button variant="outline">Book Tour</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoTours;
