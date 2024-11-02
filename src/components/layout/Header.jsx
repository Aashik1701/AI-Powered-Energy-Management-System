import React from 'react';
import { useState } from 'react';
import Button from '../shared/Button'; // Correct import for default export
import { Building, Bell, ChevronDown } from 'lucide-react';

// Header Component
const Header = () => {
  const [notifications] = useState([
    { id: 1, message: 'High energy usage detected in Zone A', type: 'warning' },
    { id: 2, message: 'HVAC maintenance required in Building 2', type: 'alert' }
  ]);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Building className="h-8 w-8 text-blue-600" />
            <h1 className="ml-2 text-xl font-semibold">Energy Management System</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </Button>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">AM</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;