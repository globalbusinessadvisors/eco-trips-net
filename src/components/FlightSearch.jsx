import React, { useState } from 'react';
import { MapPinIcon, CalendarIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const FlightSearch = () => {
  const [searchParams, setSearchParams] = useState({
    from: 'Toronto, Ontario, Canada',
    to: '',
    departDate: '',
    returnDate: '',
    addNearbyAirports: false,
    addCar: false,
    directFlightsOnly: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name) => {
    setSearchParams(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search params:', searchParams);
    // Implement search functionality here
  };

  return (
    <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="relative">
          <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            name="from"
            value={searchParams.from}
            onChange={handleInputChange}
            className="pl-10"
            placeholder="Leaving from"
          />
        </div>
        <div className="relative">
          <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            name="to"
            value={searchParams.to}
            onChange={handleInputChange}
            className="pl-10"
            placeholder="Going to"
          />
        </div>
        <div className="relative">
          <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="date"
            name="departDate"
            value={searchParams.departDate}
            onChange={handleInputChange}
            className="pl-10"
          />
        </div>
        <div className="relative">
          <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="date"
            name="returnDate"
            value={searchParams.returnDate}
            onChange={handleInputChange}
            className="pl-10"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="addNearbyAirports"
            checked={searchParams.addNearbyAirports}
            onCheckedChange={() => handleCheckboxChange('addNearbyAirports')}
          />
          <label htmlFor="addNearbyAirports">Add nearby airports</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="addCar"
            checked={searchParams.addCar}
            onCheckedChange={() => handleCheckboxChange('addCar')}
          />
          <label htmlFor="addCar">Add a car</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="directFlightsOnly"
            checked={searchParams.directFlightsOnly}
            onCheckedChange={() => handleCheckboxChange('directFlightsOnly')}
          />
          <label htmlFor="directFlightsOnly">Direct flights only</label>
        </div>
      </div>
      <Button type="submit" className="w-full md:w-auto">Search</Button>
    </form>
  );
};

export default FlightSearch;
