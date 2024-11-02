import React from 'react';
import { useState, useContext } from 'react';
import { EnergyContext } from '../../context/EnergyContext';
import Button from '../shared/Button'; // Correct import for default export
import {
  Home,
  Activity,
  Users,
  AlertTriangle,
  History,
  Settings2,
  Menu,
  X,
  LogOut
} from 'lucide-react';

// Sidebar Component
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { selectedBuilding, setSelectedBuilding } = useContext(EnergyContext);

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Activity, label: 'Energy Usage', path: '/energy' },
    { icon: Users, label: 'Occupancy', path: '/occupancy' },
    { icon: AlertTriangle, label: 'Alerts', path: '/alerts' },
    { icon: History, label: 'History', path: '/history' },
    { icon: Settings2, label: 'Settings', path: '/settings' }
  ];

  const buildings = [
    { id: 'main-campus', name: 'Main Campus' },
    { id: 'building-a', name: 'Building A' },
    { id: 'building-b', name: 'Building B' }
  ];

  return (
    <aside 
      className={`bg-white border-r border-gray-200 transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="h-full flex flex-col">
        {/* Collapse Toggle */}
        <div className="p-4 flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <Menu className="h-5 w-5" />
            ) : (
              <X className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Building Selector */}
        {!isCollapsed && (
          <div className="px-4 mb-6">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Select Building
            </label>
            <select
              value={selectedBuilding}
              onChange={(e) => setSelectedBuilding(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 text-sm"
            >
              {buildings.map((building) => (
                <option key={building.id} value={building.id}>
                  {building.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="flex-1">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className={`w-full justify-start px-4 py-2 ${
                isCollapsed ? 'justify-center' : ''
              }`}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span className="ml-3">{item.label}</span>}
            </Button>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-200">
          <Button
            variant="ghost"
            className={`w-full justify-start ${
              isCollapsed ? 'justify-center' : ''
            }`}
          >
            <LogOut className="h-5 w-5" />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;