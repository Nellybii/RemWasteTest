import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@wewantwaste.co.uk</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Lowestoft, Suffolk</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-400" />
                <div>
                  <p>Mon - Fri: 8AM - 6PM</p>
                  <p>Sat: 8AM - 4PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Garden Waste Collection</li>
              <li>Construction Waste</li>
              <li>Household Clearance</li>
              <li>Commercial Waste</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Same day delivery</li>
              <li>✓ Competitive pricing</li>
              <li>✓ Fully licensed</li>
              <li>✓ Eco-friendly disposal</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 WeWantWaste. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
