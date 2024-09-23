import React from 'react';
import FlightSearch from '../components/FlightSearch';
import FeaturedAirlines from '../components/FeaturedAirlines';
import PlanBookFly from '../components/PlanBookFly';
import FlightDeals from '../components/FlightDeals';

const Flights = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Eco-Friendly Flights</h1>
      <FlightSearch />
      <FeaturedAirlines />
      <PlanBookFly />
      <FlightDeals />
    </div>
  );
};

export default Flights;
