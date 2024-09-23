import React from 'react';

const airlines = [
  { name: 'Air Canada', logo: '/airline-logos/air-canada.png' },
  { name: 'WestJet', logo: '/airline-logos/westjet.png' },
  { name: 'Delta', logo: '/airline-logos/delta.png' },
  { name: 'Porter', logo: '/airline-logos/porter.png' },
  { name: 'Air Transat', logo: '/airline-logos/air-transat.png' },
  { name: 'United', logo: '/airline-logos/united.png' },
  { name: 'American Airlines', logo: '/airline-logos/american-airlines.png' },
  { name: 'Lufthansa', logo: '/airline-logos/lufthansa.png' },
];

const FeaturedAirlines = () => {
  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-4">Featured airlines</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {airlines.map((airline) => (
          <div key={airline.name} className="flex flex-col items-center">
            <img src={airline.logo} alt={airline.name} className="h-8 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAirlines;