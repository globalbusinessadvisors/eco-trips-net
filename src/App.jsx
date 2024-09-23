import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import CarRentals from "./pages/CarRentals";
import EcoTours from "./pages/EcoTours";
import Restaurants from "./pages/Restaurants";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="sticky top-0 z-50">
            <Header />
          </div>
          <main className="flex-grow">
            <Routes>
              {navItems.map(({ to, page }) => (
                <Route key={to} path={to} element={page} />
              ))}
              <Route path="/flights" element={<Flights />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/car-rentals" element={<CarRentals />} />
              <Route path="/eco-tours" element={<EcoTours />} />
              <Route path="/restaurants" element={<Restaurants />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
