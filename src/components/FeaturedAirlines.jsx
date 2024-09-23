import React from 'react';

const airlines = [
  { name: 'Air Canada', logo: 'https://picsum.photos/seed/aircanada/100/40' },
  { name: 'WestJet', logo: 'https://picsum.photos/seed/westjet/100/40' },
  { name: 'Delta', logo: 'https://picsum.photos/seed/delta/100/40' },
  { name: 'Porter', logo: 'https://picsum.photos/seed/porter/100/40' },
  { name: 'Air Transat', logo: 'https://picsum.photos/seed/airtransat/100/40' },
  { name: 'United', logo: 'https://picsum.photos/seed/united/100/40' },
  { name: 'Lufthansa', logo: 'https://picsum.photos/seed/lufthansa/100/40' },
];

const FeaturedAirlines = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Featured airlines</h2>
      <div className="flex flex-wrap gap-4">
        {airlines.map((airline) => (
          <img
            key={airline.name}
            src={airline.logo}
            alt={airline.name}
            className="h-10 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedAirlines;