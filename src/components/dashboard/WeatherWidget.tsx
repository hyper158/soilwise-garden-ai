
import React from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface WeatherWidgetProps {
  location: string;
  currentTemp: number;
  conditions: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'stormy';
  highTemp: number;
  lowTemp: number;
  precipitation: number;
  humidity: number;
}

const WeatherWidget = ({
  location,
  currentTemp,
  conditions,
  highTemp,
  lowTemp,
  precipitation,
  humidity
}: WeatherWidgetProps) => {
  
  const renderWeatherIcon = () => {
    switch (conditions) {
      case 'sunny':
        return <Sun className="h-10 w-10 text-amber-500" />;
      case 'cloudy':
        return <Cloud className="h-10 w-10 text-gray-400" />;
      case 'rainy':
        return <CloudRain className="h-10 w-10 text-soil-blue" />;
      case 'snowy':
        return <CloudSnow className="h-10 w-10 text-gray-300" />;
      case 'stormy':
        return <CloudLightning className="h-10 w-10 text-soil-blue-dark" />;
      default:
        return <Sun className="h-10 w-10 text-amber-500" />;
    }
  };

  const conditionText = conditions.charAt(0).toUpperCase() + conditions.slice(1);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Current Weather</CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {renderWeatherIcon()}
            <div>
              <div className="text-3xl font-bold">{currentTemp}°C</div>
              <div className="text-sm text-muted-foreground">{conditionText}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex gap-2 text-sm">
              <span className="text-red-500">H: {highTemp}°</span>
              <span className="text-blue-500">L: {lowTemp}°</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Precip: {precipitation}% • Humidity: {humidity}%
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
