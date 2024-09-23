import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fetchEcoDeals = async () => {
  // This would be replaced with an actual API call to your backend
  return [
    { id: 1, title: "Eco-friendly Resort Stay", location: "Costa Rica", price: 299, cashback: 30, image: "https://example.com/eco-resort.jpg" },
    { id: 2, title: "Sustainable Wildlife Tour", location: "Kenya", price: 499, cashback: 50, image: "https://example.com/wildlife-tour.jpg" },
    { id: 3, title: "Green City Bike Tour", location: "Amsterdam", price: 59, cashback: 10, image: "https://example.com/bike-tour.jpg" },
  ];
};

const Index = () => {
  const { data: ecoDeals, isLoading, error } = useQuery({
    queryKey: ['ecoDeals'],
    queryFn: fetchEcoDeals,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Eco-Friendly Travel Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecoDeals.map((deal) => (
          <Card key={deal.id} className="overflow-hidden">
            <img src={deal.image} alt={deal.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{deal.title}</CardTitle>
              <CardDescription>{deal.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${deal.price}</p>
              <p className="text-green-500">Earn ${deal.cashback} cash back</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Deal</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
