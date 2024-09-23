import React from 'react';
import { Button } from "@/components/ui/button";

const flightDeals = [
  {
    id: 1,
    from: 'Kitchener',
    to: 'Calgary',
    departDate: 'Sun, Dec 1',
    returnDate: 'Tue, Dec 3',
    price: 416,
    airline: 'Flair Airlines'
  },
  {
    id: 2,
    from: 'Toronto',
    to: 'Calgary',
    departDate: 'Sat, Nov 9',
    returnDate: 'Mon, Nov 25',
    price: 464,
    airline: 'Flair Airlines'
  },
];

const FlightDeals = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Cheapest flights from Toronto</h2>
      <p className="text-sm text-gray-600 mb-4">
        These prices were available within the past 7 days. Prices quoted are per person, return, for the period specified. Prices and availability are subject to change. Additional terms apply.
      </p>
      <div className="flex space-x-4 mb-4">
        <Button variant="outline">All deals</Button>
        <Button variant="outline">One way</Button>
        <Button variant="default">Roundtrip</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {flightDeals.map((deal) => (
          <div key={deal.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-semibold">{deal.from} → {deal.to}</p>
                <p className="text-sm text-gray-600">{deal.airline}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm">{deal.departDate}</p>
              <p className="text-sm">{deal.returnDate}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">Roundtrip</p>
              <Button variant="outline">Find deals from CA ${deal.price}</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightDeals;
