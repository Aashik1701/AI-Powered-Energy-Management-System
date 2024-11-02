import React from 'react';
import Button from '../shared/Button'; // Correct import for default export
// Footer Component
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2024 Energy Management System. All rights reserved.
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Button variant="link" size="sm">Privacy Policy</Button>
            <Button variant="link" size="sm">Terms of Service</Button>
            <Button variant="link" size="sm">Support</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;