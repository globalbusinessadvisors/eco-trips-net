import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";

const FlightSearch = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Tabs defaultValue="roundtrip">
        <TabsList>
          <TabsTrigger value="roundtrip">Round trip</TabsTrigger>
          <TabsTrigger value="oneway">One-way</TabsTrigger>
          <TabsTrigger value="multicity">Multi-city</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <Input placeholder="Leaving from" />
        <Input placeholder="Going to" />
        <Calendar />
        <Calendar />
      </div>
      <div className="flex items-center mt-4">
        <Checkbox id="directFlights" />
        <label htmlFor="directFlights" className="ml-2">Direct flights only</label>
      </div>
      <Button className="mt-4 w-full">Search</Button>
    </div>
  );
};

export default FlightSearch;