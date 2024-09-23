import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">EcoTravel Rewards</h3>
            <p>Incentivizing sustainable travel choices with cash back rewards.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-500">Home</Link></li>
              <li><Link to="/deals" className="hover:text-green-500">Eco Deals</Link></li>
              <li><Link to="/about" className="hover:text-green-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-green-500">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-green-500">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2023 EcoTravel Rewards. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;