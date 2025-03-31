
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from 'lucide-react';

interface SoilQualityIndexProps {
  score: number;
  lastUpdated: string;
}

const SoilQualityIndex = ({ score, lastUpdated }: SoilQualityIndexProps) => {
  // Helper function to determine status color based on score
  const getScoreColor = () => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-lime-500";
    if (score >= 40) return "text-amber-500";
    if (score >= 20) return "text-orange-500";
    return "text-red-600";
  };
  
  // Helper function to determine status text based on score
  const getScoreStatus = () => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Fair";
    if (score >= 20) return "Poor";
    return "Critical";
  };

  // Calculate the dash offset for the circular progress
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (score / 100) * circumference;

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-soil-green" />
          AI Soil Quality Index
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-36 w-36">
            {/* Background circle */}
            <svg className="absolute h-full w-full" viewBox="0 0 150 150">
              <circle
                cx="75"
                cy="75"
                r={radius}
                fill="none"
                strokeWidth="12"
                className="stroke-muted"
              />
            </svg>
            
            {/* Progress circle */}
            <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 150 150">
              <circle
                cx="75"
                cy="75"
                r={radius}
                fill="none"
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-in-out stroke-primary"
              />
            </svg>
            
            {/* Score display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-3xl font-bold ${getScoreColor()}`}>{score}</span>
              <span className="text-sm font-medium text-muted-foreground">out of 100</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className={`text-lg font-semibold ${getScoreColor()}`}>
              {getScoreStatus()}
            </p>
            <p className="text-xs text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SoilQualityIndex;
