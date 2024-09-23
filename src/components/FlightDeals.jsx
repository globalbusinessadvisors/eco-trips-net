import React from 'react';
import { Button } from "@/components/ui/button";

const flightDeals = [
  {
    from: 'Kitchener',
    to: 'Calgary',
    departDate: 'Sun., Dec. 1',
    returnDate: 'Tue., Dec. 3',
    price: 416,
  },
  {
    from: 'Toronto',
    to: 'Calgary',
    departDate: 'Sat., Nov. 9',
    returnDate: 'Mon., Nov. 25',
    price: 464,
  },
  {
    from: 'Kitchener',
    to: 'Vancouver',
    departDate: 'Mon., Jan. 27',
    returnDate: 'Wed., Feb. 5',
    price: 497,
  },
  {
    from: 'Toronto',
    to: 'Abbotsford',
    departDate: 'Mon., Jan. 13',
    returnDate: 'Tue., Jan. 21',
    price: 497,
  },
];

const FlightDeals = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Cheapest flights from Toronto</h2>
      <p className="mb-4">These prices were available within the past 7 days. Prices quoted are per person, return, for the period specified. Prices and availability are subject to change. Additional terms apply.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {flightDeals.map((deal, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between mb-2">
              <div>
                <p className="font-bold">{deal.from} → {deal.to}</p>
                <p className="text-sm text-gray-600">YKF - YYC with WestJet</p>
              </div>
              <div className="text-right">
                <p>{deal.departDate}</p>
                <p>{deal.returnDate}</p>
              </div>
            </div>
            <Button className="w-full">Find deals from CA ${deal.price}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightDeals;