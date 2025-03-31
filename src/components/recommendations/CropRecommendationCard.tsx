
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { InfoIcon, ThermometerIcon, DropletIcon, SunIcon, Sprout } from 'lucide-react';

interface CropRecommendationProps {
  name: string;
  image: string;
  soilCompatibility: number;
  waterRequirement: 'low' | 'medium' | 'high';
  idealTemperature: string;
  sunlight: 'full' | 'partial' | 'shade';
  growthPeriod: string;
  description: string;
}

const CropRecommendationCard = ({
  name,
  image,
  soilCompatibility,
  waterRequirement,
  idealTemperature,
  sunlight,
  growthPeriod,
  description
}: CropRecommendationProps) => {
  
  // Water requirement colors
  const waterColors = {
    low: "bg-amber-100 text-amber-800",
    medium: "bg-blue-100 text-blue-800",
    high: "bg-blue-500 text-white"
  };
  
  // Sunlight requirement colors
  const sunlightColors = {
    full: "bg-amber-500 text-white",
    partial: "bg-amber-200 text-amber-800",
    shade: "bg-slate-300 text-slate-800"
  };
  
  // Helper function to render compatibility bar
  const renderCompatibilityBar = (value: number) => {
    const percentage = Math.min(Math.max(value, 0), 100);
    
    let colorClass = "bg-red-500";
    if (percentage >= 80) colorClass = "bg-green-500";
    else if (percentage >= 60) colorClass = "bg-lime-500";
    else if (percentage >= 40) colorClass = "bg-amber-500";
    else if (percentage >= 20) colorClass = "bg-orange-500";
    
    return (
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${colorClass} transition-all duration-500 ease-in-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-white/80 text-primary hover:bg-white/90">
            {soilCompatibility}% Match
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Sprout className="h-5 w-5 text-soil-green" />
          {name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="py-2 flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-sm font-medium">Soil Compatibility</div>
            {renderCompatibilityBar(soilCompatibility)}
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <DropletIcon className="h-4 w-4 text-soil-blue" />
              <span className="text-sm">
                <Badge className={waterColors[waterRequirement]}>
                  {waterRequirement.charAt(0).toUpperCase() + waterRequirement.slice(1)} water
                </Badge>
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <ThermometerIcon className="h-4 w-4 text-soil-brown" />
              <span className="text-sm">{idealTemperature}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <SunIcon className="h-4 w-4 text-amber-500" />
              <span className="text-sm">
                <Badge className={sunlightColors[sunlight]}>
                  {sunlight.charAt(0).toUpperCase() + sunlight.slice(1)} sun
                </Badge>
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <InfoIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{growthPeriod}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button variant="outline" className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default CropRecommendationCard;
