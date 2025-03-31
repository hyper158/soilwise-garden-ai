
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import CropRecommendationCard from '@/components/recommendations/CropRecommendationCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  SeedlingIcon, 
  Flask, 
  Droplet,
  Filter, 
  SlidersHorizontal, 
  RefreshCw
} from 'lucide-react';

const mockCrops = [
  {
    name: 'Tomatoes',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    soilCompatibility: 85,
    waterRequirement: 'medium' as const,
    idealTemperature: '18°C - 24°C',
    sunlight: 'full' as const,
    growthPeriod: '70-80 days',
    description: 'Tomatoes thrive in your current soil conditions. The pH and nutrient levels are ideal for healthy growth and fruit production.'
  },
  {
    name: 'Bell Peppers',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    soilCompatibility: 78,
    waterRequirement: 'medium' as const,
    idealTemperature: '18°C - 26°C',
    sunlight: 'full' as const,
    growthPeriod: '60-90 days',
    description: 'Bell peppers would grow well in your garden. The warm soil temperature and good drainage support healthy root development.'
  },
  {
    name: 'Carrots',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    soilCompatibility: 65,
    waterRequirement: 'medium' as const,
    idealTemperature: '15°C - 20°C',
    sunlight: 'full' as const,
    growthPeriod: '70-80 days',
    description: 'Carrots can grow in your soil, but consider improving soil structure by adding sand for better root development.'
  },
  {
    name: 'Lettuce',
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80',
    soilCompatibility: 75,
    waterRequirement: 'high' as const,
    idealTemperature: '10°C - 20°C',
    sunlight: 'partial' as const,
    growthPeriod: '45-60 days',
    description: 'Lettuce would grow well with your soil moisture levels. Quick-growing and perfect for cooler areas of your garden.'
  },
  {
    name: 'Basil',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    soilCompatibility: 82,
    waterRequirement: 'medium' as const,
    idealTemperature: '18°C - 25°C',
    sunlight: 'full' as const,
    growthPeriod: '30-60 days',
    description: 'Basil is highly compatible with your soil. The good drainage and organic matter content support aromatic herb growth.'
  },
  {
    name: 'Zucchini',
    image: 'https://images.unsplash.com/photo-1583687355032-89b902b7335f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    soilCompatibility: 70,
    waterRequirement: 'medium' as const,
    idealTemperature: '18°C - 24°C',
    sunlight: 'full' as const,
    growthPeriod: '40-60 days',
    description: 'Zucchini would grow adequately in your soil. Consider adding compost to boost fertility for higher yields.'
  }
];

const Recommendations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <div className="flex flex-col space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">AI Recommendations</h1>
            <p className="text-muted-foreground">
              Personalized suggestions based on your soil analysis and environmental conditions
            </p>
          </div>
          
          {/* Recommendation Types */}
          <Tabs defaultValue="crops">
            <TabsList className="w-full max-w-md">
              <TabsTrigger value="crops" className="flex items-center gap-2">
                <SeedlingIcon className="h-4 w-4" />
                Crops
              </TabsTrigger>
              <TabsTrigger value="fertilizers" className="flex items-center gap-2">
                <Flask className="h-4 w-4" />
                Fertilizers
              </TabsTrigger>
              <TabsTrigger value="irrigation" className="flex items-center gap-2">
                <Droplet className="h-4 w-4" />
                Irrigation
              </TabsTrigger>
            </Tabs>
            
            <TabsContent value="crops" className="pt-6">
              {/* Filters */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filters:</span>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    Growing Season
                    <SlidersHorizontal className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    Water Usage
                    <SlidersHorizontal className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    Compatibility
                    <SlidersHorizontal className="h-3 w-3" />
                  </Button>
                </div>
                
                <Button variant="ghost" size="sm" className="h-8 gap-1">
                  <RefreshCw className="h-3 w-3" />
                  Refresh
                </Button>
              </div>
              
              {/* Crop Recommendations */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {mockCrops.map((crop, index) => (
                  <CropRecommendationCard
                    key={index}
                    name={crop.name}
                    image={crop.image}
                    soilCompatibility={crop.soilCompatibility}
                    waterRequirement={crop.waterRequirement}
                    idealTemperature={crop.idealTemperature}
                    sunlight={crop.sunlight}
                    growthPeriod={crop.growthPeriod}
                    description={crop.description}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="fertilizers" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flask className="h-5 w-5 text-soil-brown" />
                    Fertilizer Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg bg-muted/50">
                      <div className="flex items-start gap-4">
                        <div className="soil-icon-bg">
                          <Flask className="h-5 w-5 text-soil-brown" />
                        </div>
                        <div>
                          <h3 className="font-medium">Nitrogen-Rich Compost</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Your soil analysis indicates nitrogen deficiency. Adding compost or well-rotted manure 
                            will improve soil structure and increase nitrogen levels naturally.
                          </p>
                          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="font-medium">Application Rate:</span> 
                              <span className="ml-1 text-muted-foreground">2-3 inches layer</span>
                            </div>
                            <div>
                              <span className="font-medium">Frequency:</span> 
                              <span className="ml-1 text-muted-foreground">Once per season</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="mt-3">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg bg-muted/50">
                      <div className="flex items-start gap-4">
                        <div className="soil-icon-bg">
                          <Flask className="h-5 w-5 text-soil-brown" />
                        </div>
                        <div>
                          <h3 className="font-medium">Bone Meal</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Phosphorus levels are below optimal. Bone meal is an excellent organic source 
                            of phosphorus that promotes root development and flowering.
                          </p>
                          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="font-medium">Application Rate:</span> 
                              <span className="ml-1 text-muted-foreground">3-4 kg per 100 m²</span>
                            </div>
                            <div>
                              <span className="font-medium">Frequency:</span> 
                              <span className="ml-1 text-muted-foreground">Every 4-6 weeks</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="mt-3">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg bg-muted/50">
                      <div className="flex items-start gap-4">
                        <div className="soil-icon-bg">
                          <Flask className="h-5 w-5 text-soil-brown" />
                        </div>
                        <div>
                          <h3 className="font-medium">Dolomite Lime</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Your soil pH is slightly acidic. Adding dolomite lime will raise the pH 
                            while providing calcium and magnesium for better nutrient availability.
                          </p>
                          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="font-medium">Application Rate:</span> 
                              <span className="ml-1 text-muted-foreground">5-7 kg per 100 m²</span>
                            </div>
                            <div>
                              <span className="font-medium">Frequency:</span> 
                              <span className="ml-1 text-muted-foreground">Once every 1-2 years</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="mt-3">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="irrigation" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplet className="h-5 w-5 text-soil-blue" />
                    Irrigation Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border rounded-xl overflow-hidden">
                      <div className="bg-primary/10 p-4">
                        <h3 className="text-lg font-medium flex items-center gap-2">
                          <Droplet className="h-5 w-5 text-soil-blue" />
                          Optimal Watering Schedule
                        </h3>
                      </div>
                      <div className="p-4">
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Based on your soil moisture levels, current weather conditions, and crop selection, 
                            we recommend the following watering schedule:
                          </p>
                          
                          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="border rounded-lg p-3">
                              <h4 className="font-medium">Morning Watering</h4>
                              <p className="text-sm text-muted-foreground">
                                Water deeply twice a week, early morning
                              </p>
                              <p className="text-xs text-primary font-medium mt-1">
                                Recommended: 6:00 AM - 8:00 AM
                              </p>
                            </div>
                            
                            <div className="border rounded-lg p-3">
                              <h4 className="font-medium">Water Volume</h4>
                              <p className="text-sm text-muted-foreground">
                                Apply approximately 1 inch of water per session
                              </p>
                              <p className="text-xs text-primary font-medium mt-1">
                                2.5 gallons per square meter
                              </p>
                            </div>
                            
                            <div className="border rounded-lg p-3">
                              <h4 className="font-medium">Soil Coverage</h4>
                              <p className="text-sm text-muted-foreground">
                                Add 2-inch organic mulch layer to retain moisture
                              </p>
                              <p className="text-xs text-primary font-medium mt-1">
                                Reduces water needs by up to 30%
                              </p>
                            </div>
                          </div>
                          
                          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-4">
                            <h4 className="font-medium text-blue-800">Weather Advisory</h4>
                            <p className="text-sm text-blue-700 mt-1">
                              Rain is forecasted in the next 48 hours. Consider skipping your next scheduled 
                              watering and adjust based on actual rainfall amounts.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-xl overflow-hidden">
                      <div className="bg-primary/10 p-4">
                        <h3 className="text-lg font-medium flex items-center gap-2">
                          <Droplet className="h-5 w-5 text-soil-blue" />
                          Water Conservation Tips
                        </h3>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="bg-soil-blue text-white rounded-full h-5 w-5 flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                            <p>Use drip irrigation or soaker hoses to deliver water directly to plant roots.</p>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="bg-soil-blue text-white rounded-full h-5 w-5 flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                            <p>Water deeply but less frequently to encourage deeper root growth.</p>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="bg-soil-blue text-white rounded-full h-5 w-5 flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                            <p>Collect rainwater in barrels for garden irrigation.</p>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="bg-soil-blue text-white rounded-full h-5 w-5 flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
                            <p>Apply organic mulch to reduce evaporation and suppress weeds.</p>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="bg-soil-blue text-white rounded-full h-5 w-5 flex items-center justify-center text-xs shrink-0 mt-0.5">5</span>
                            <p>Group plants with similar water needs together in your garden layout.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Recommendations;
