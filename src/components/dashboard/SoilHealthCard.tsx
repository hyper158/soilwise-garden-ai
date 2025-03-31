
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Thermometer, Droplet, Beaker } from "lucide-react";

interface SoilHealthCardProps {
  title: string;
  value: number;
  unit: string;
  icon: 'moisture' | 'temperature' | 'ph';
  status: 'optimal' | 'warning' | 'critical';
  min?: number;
  max?: number;
}

const SoilHealthCard = ({ 
  title, 
  value, 
  unit, 
  icon, 
  status, 
  min = 0, 
  max = 100 
}: SoilHealthCardProps) => {
  const statusColors = {
    optimal: "text-green-600",
    warning: "text-amber-500",
    critical: "text-red-600"
  };
  
  const progressColors = {
    optimal: "bg-green-600",
    warning: "bg-amber-500",
    critical: "bg-red-600"
  };
  
  const normalizedValue = ((value - min) / (max - min)) * 100;
  
  const renderIcon = () => {
    switch (icon) {
      case 'moisture':
        return <Droplet className="h-6 w-6 text-soil-blue" />;
      case 'temperature':
        return <Thermometer className="h-6 w-6 text-soil-brown" />;
      case 'ph':
        return <Beaker className="h-6 w-6 text-soil-green" />;
      default:
        return <Droplet className="h-6 w-6" />;
    }
  };

  return (
    <div className="soil-dashboard-card">
      <div className="flex items-center justify-between">
        <div className="soil-icon-bg">
          {renderIcon()}
        </div>
        <span className={`font-medium ${statusColors[status]}`}>
          {status === 'optimal' ? 'Optimal' : status === 'warning' ? 'Warning' : 'Critical'}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold">{title}</h3>
      
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold">
          {value}
          <span className="ml-1 text-sm font-normal text-muted-foreground">{unit}</span>
        </div>
      </div>
      
      <Progress 
        value={normalizedValue} 
        className={`h-2 mt-2 ${progressColors[status]}`}
      />
      
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
};

export default SoilHealthCard;
