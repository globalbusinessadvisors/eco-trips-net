import React from 'react';
import FlightSearch from '../components/FlightSearch';
import FeaturedAirlines from '../components/FeaturedAirlines';
import FlightDeals from '../components/FlightDeals';

const Flights = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">CA $52 Cheap Flights from Toronto</h1>
      <FlightSearch />
      <FeaturedAirlines />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="col-span-1 md:col-span-3">
          <h2 className="text-2xl font-semibold mb-4">Plan, book, fly with confidence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Be in the know</h3>
              <p>Get real-time flight status updates</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Book smarter</h3>
              <p>See up to 30% off select hotels when you book a flight</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Earn twice</h3>
              <p>Get points on your airline miles when you book</p>
            </div>
          </div>
        </div>
      </div>
      <FlightDeals />
    </div>
  );
};

export default Flights;
