import React from 'react';
import FlightSearch from '../components/FlightSearch';
import FeaturedAirlines from '../components/FeaturedAirlines';
import FlightDeals from '../components/FlightDeals';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">CA $52 Cheap Flights from Toronto</h1>
      <FlightSearch />
      <FeaturedAirlines />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Plan, book, fly with confidence</h3>
          <p>Be in the know. Get alerted if flight prices change.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Book smarter</h3>
          <p>Save up to 20% on select flights when you book a flight + hotel together</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Earn twice</h3>
          <p>Earn points on top of airline miles when you book with Expedia Rewards</p>
        </div>
      </div>
      <FlightDeals />
    </div>
  );
};

export default Index;
