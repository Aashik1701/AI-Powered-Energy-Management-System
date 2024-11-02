import React from 'react';
import Card from '../shared/Card';
import Slider from '../ui/slider';
import Switch from '../ui/switch';
import Button from '../ui/button';
import { 
  Thermometer,
  Droplets,
  Wind,
  Power,
  Timer
} from 'lucide-react';

const HVACControl = () => {
  const [temperature, setTemperature] = React.useState(22);
  const [humidity, setHumidity] = React.useState(45);
  const [fanSpeed, setFanSpeed] = React.useState(2);
  const [isAuto, setIsAuto] = React.useState(true);
  const [schedule, setSchedule] = React.useState({
    start: '08:00',
    end: '18:00'
  });

  const zones = [
    { id: 1, name: 'Zone 1', status: 'active', temp: 22.5 },
    { id: 2, name: 'Zone 2', status: 'inactive', temp: 21.8 },
    { id: 3, name: 'Zone 3', status: 'active', temp: 23.1 },
    { id: 4, name: 'Zone 4', status: 'active', temp: 22.3 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Temperature</span>
            </div>
            <span className="text-2xl font-bold">{temperature}°C</span>
          </div>
          <Slider
            value={[temperature]}
            onValueChange={([value]) => setTemperature(value)}
            min={16}
            max={28}
            step={0.5}
          />
        </Card>

        <Card className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Droplets className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Humidity</span>
            </div>
            <span className="text-2xl font-bold">{humidity}%</span>
          </div>
          <Slider
            value={[humidity]}
            onValueChange={([value]) => setHumidity(value)}
            min={30}
            max={70}
            step={1}
          />
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wind className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Fan Speed</span>
            </div>
            <select
              value={fanSpeed}
              onChange={(e) => setFanSpeed(Number(e.target.value))}
              className="border rounded p-1"
            >
              <option value={1}>Low</option>
              <option value={2}>Medium</option>
              <option value={3}>High</option>
              <option value={4}>Auto</option>
            </select>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Power className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Auto Mode</span>
            </div>
            <Switch
              checked={isAuto}
              onCheckedChange={setIsAuto}
            />
          </div>
        </Card>
      </div>

      <Card className="p-4">
        <h3 className="font-medium mb-4">Zone Control</h3>
        <div className="grid grid-cols-2 gap-4">
          {zones.map((zone) => (
            <div key={zone.id} className="flex items-center justify-between p-2 border rounded">
              <div>
                <p className="font-medium">{zone.name}</p>
                <p className="text-sm text-gray-500">{zone.temp}°C</p>
              </div>
              <Switch
                checked={zone.status === 'active'}
                onCheckedChange={() => {}}
              />
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Timer className="h-5 w-5 text-blue-500" />
            <span className="font-medium">Schedule</span>
          </div>
          <Button variant="outline" size="sm" onClick={() => setSchedule({ start: '09:00', end: '17:00' })}>
            Edit Schedule
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Start Time</p>
            <p className="font-medium">{schedule.start}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">End Time</p>
            <p className="font-medium">{schedule.end}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HVACControl;