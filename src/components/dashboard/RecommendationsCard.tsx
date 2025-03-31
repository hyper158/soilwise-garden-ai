
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles, Flower, Beaker } from 'lucide-react';

interface Recommendation {
  type: 'crop' | 'fertilizer' | 'irrigation';
  title: string;
  description: string;
}

interface RecommendationsCardProps {
  recommendations: Recommendation[];
}

const RecommendationsCard = ({ recommendations }: RecommendationsCardProps) => {
  // Helper function to render the appropriate icon for each recommendation type
  const renderIcon = (type: 'crop' | 'fertilizer' | 'irrigation') => {
    switch (type) {
      case 'crop':
        return <Flower className="h-5 w-5 text-soil-green" />;
      case 'fertilizer':
        return <Beaker className="h-5 w-5 text-soil-brown" />;
      case 'irrigation':
        return <Sparkles className="h-5 w-5 text-soil-blue" />;
      default:
        return <Sparkles className="h-5 w-5" />;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-soil-green" />
          AI Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="space-y-4">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="flex gap-3">
              <div className="soil-icon-bg shrink-0">
                {renderIcon(recommendation.type)}
              </div>
              <div>
                <h4 className="font-medium">{recommendation.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {recommendation.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button variant="outline" className="w-full" asChild>
          <a href="/recommendations">
            View All Recommendations
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecommendationsCard;
