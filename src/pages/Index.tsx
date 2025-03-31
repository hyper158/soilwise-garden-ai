
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import SoilHealthCard from '@/components/dashboard/SoilHealthCard';
import SoilQualityIndex from '@/components/dashboard/SoilQualityIndex';
import WeatherWidget from '@/components/dashboard/WeatherWidget';
import RecommendationsCard from '@/components/dashboard/RecommendationsCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Leaf, 
  Droplet, 
  Bell, 
  BarChart, 
  ChevronRight,
  Thermometer,
  Beaker
} from 'lucide-react';

const mockRecommendations = [
  {
    type: 'crop' as const,
    title: 'Tomatoes',
    description: 'Ideal match for your soil pH and nutrient profile.'
  },
  {
    type: 'fertilizer' as const,
    title: 'Add Composted Manure',
    description: 'To improve soil structure and boost nitrogen levels.'
  },
  {
    type: 'irrigation' as const,
    title: 'Reduce Watering Frequency',
    description: 'Current moisture levels are higher than optimal.'
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <div className="flex flex-col space-y-8">
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full text-soil-green mb-4">
              <Leaf className="h-6 w-6 mr-2" />
              <span className="font-medium">AI-Powered Soil Analysis</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Smart Soil Solutions for <br className="hidden sm:inline" />
              <span className="text-primary">Healthier Gardens</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              Get real-time insights, personalized recommendations, and expert advice
              to optimize your soil health and grow thriving plants.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Beaker className="h-5 w-5" />
                Analyze Your Soil
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <BarChart className="h-5 w-5" />
                View Soil Reports
              </Button>
            </div>
          </section>
          
          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="soil-data">Soil Data</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <SoilQualityIndex score={78} lastUpdated="Today, 9:30 AM" />
                <WeatherWidget
                  location="Portland, OR"
                  currentTemp={24}
                  conditions="cloudy"
                  highTemp={26}
                  lowTemp={18}
                  precipitation={30}
                  humidity={65}
                />
                <div className="col-span-full md:col-span-2">
                  <RecommendationsCard recommendations={mockRecommendations} />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="soil-data" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <SoilHealthCard
                  title="Soil Moisture"
                  value={42}
                  unit="%"
                  icon="moisture"
                  status="optimal"
                  min={20}
                  max={60}
                />
                <SoilHealthCard
                  title="Soil pH"
                  value={6.2}
                  unit=""
                  icon="ph"
                  status="optimal"
                  min={0}
                  max={14}
                />
                <SoilHealthCard
                  title="Temperature"
                  value={23}
                  unit="°C"
                  icon="temperature"
                  status="warning"
                  min={10}
                  max={30}
                />
                <SoilHealthCard
                  title="Nitrogen (N)"
                  value={45}
                  unit=" mg/kg"
                  icon="ph"
                  status="warning"
                  min={0}
                  max={100}
                />
                <SoilHealthCard
                  title="Phosphorus (P)"
                  value={35}
                  unit=" mg/kg"
                  icon="ph"
                  status="optimal"
                  min={0}
                  max={100}
                />
                <SoilHealthCard
                  title="Potassium (K)"
                  value={70}
                  unit=" mg/kg"
                  icon="ph"
                  status="optimal"
                  min={0}
                  max={100}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="pt-6">
              <div className="rounded-lg border bg-card p-8 text-center">
                <BarChart className="mx-auto h-16 w-16 text-muted-foreground" />
                <h3 className="mt-4 text-xl font-semibold">Analytics Coming Soon</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced soil analytics and trend analysis features will be available soon.
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Recent Alerts Section */}
          <section className="rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Recent Alerts
              </h2>
              <Button variant="ghost" size="sm" className="text-muted-foreground gap-1">
                View All
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 rounded-lg bg-amber-50 border border-amber-200">
                <div className="rounded-full bg-amber-100 p-2 text-amber-600">
                  <Thermometer className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-amber-800">Temperature Warning</h3>
                  <p className="text-sm text-amber-700">
                    Soil temperature has increased above optimal level. Consider adding mulch.
                  </p>
                  <p className="text-xs text-amber-600 mt-1">Today, 2:15 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-3 rounded-lg bg-blue-50 border border-blue-200">
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                  <Droplet className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-800">Moisture Alert</h3>
                  <p className="text-sm text-blue-700">
                    Expected rainfall in the next 24 hours. Consider reducing irrigation.
                  </p>
                  <p className="text-xs text-blue-600 mt-1">Today, 10:30 AM</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
