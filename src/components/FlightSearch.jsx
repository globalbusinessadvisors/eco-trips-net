import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPinIcon, CalendarIcon } from 'lucide-react';

const FlightSearch = () => {
  const [tripType, setTripType] = useState('roundtrip');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex space-x-4 mb-4">
        <Button 
          variant={tripType === 'roundtrip' ? 'default' : 'outline'}
          onClick={() => setTripType('roundtrip')}
        >
          Roundtrip
        </Button>
        <Button 
          variant={tripType === 'one-way' ? 'default' : 'outline'}
          onClick={() => setTripType('one-way')}
        >
          One-way
        </Button>
        <Button 
          variant={tripType === 'multi-city' ? 'default' : 'outline'}
          onClick={() => setTripType('multi-city')}
        >
          Multi-city
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="relative">
          <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="pl-10"
            placeholder="Leaving from"
          />
        </div>
        <div className="relative">
          <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="pl-10"
            placeholder="Going to"
          />
        </div>
        <div className="relative">
          <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="date"
            value={departDate}
            onChange={(e) => setDepartDate(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="relative">
          <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="addPlace" />
          <label htmlFor="addPlace">Add a place to stay</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="addCar" />
          <label htmlFor="addCar">Add a car</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="directOnly" />
          <label htmlFor="directOnly">Direct flights only</label>
        </div>
      </div>
      <Button className="w-full md:w-auto">Search</Button>
    </div>
  );
};

export default FlightSearch;
