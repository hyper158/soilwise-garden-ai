
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import SoilDataForm from '@/components/soil-analysis/SoilDataForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  FileBarChart, 
  History, 
  LineChart, 
  FlaskConical, 
  Leaf 
} from 'lucide-react';

const SoilAnalysis = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <div className="flex flex-col space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Soil Analysis</h1>
            <p className="text-muted-foreground">
              Enter soil data manually or upload images for AI-powered analysis
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Left Column: Input Form */}
            <div className="md:col-span-2">
              <SoilDataForm />
            </div>
            
            {/* Right Column: Information */}
            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    How It Works
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="flex gap-2">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        1
                      </div>
                      <p>Enter soil test results manually or upload soil images</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        2
                      </div>
                      <p>Our AI analyzes your data using advanced models</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        3
                      </div>
                      <p>Get personalized soil health insights and recommendations</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        4
                      </div>
                      <p>Track your soil health progress over time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Leaf className="h-5 w-5 text-soil-green" />
                    Optimal Ranges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>pH Level:</span>
                      <span className="font-medium">6.0 - 7.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nitrogen (N):</span>
                      <span className="font-medium">40 - 80 mg/kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Phosphorus (P):</span>
                      <span className="font-medium">25 - 50 mg/kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Potassium (K):</span>
                      <span className="font-medium">40 - 80 mg/kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Moisture:</span>
                      <span className="font-medium">30% - 60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Temperature:</span>
                      <span className="font-medium">18°C - 24°C</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Results Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Analysis Results</h2>
            
            <Tabs defaultValue="current">
              <TabsList>
                <TabsTrigger value="current" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Current Analysis
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center gap-2">
                  <History className="h-4 w-4" />
                  Historical Data
                </TabsTrigger>
                <TabsTrigger value="trends" className="flex items-center gap-2">
                  <LineChart className="h-4 w-4" />
                  Trends
                </TabsTrigger>
                <TabsTrigger value="reports" className="flex items-center gap-2">
                  <FileBarChart className="h-4 w-4" />
                  Reports
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="current" className="py-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-md">
                      <div className="text-center">
                        <BarChart3 className="h-10 w-10 mx-auto text-muted-foreground" />
                        <h3 className="mt-2 font-medium">No Current Analysis</h3>
                        <p className="text-sm text-muted-foreground">
                          Submit soil data to see your analysis results
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="history" className="py-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-md">
                      <div className="text-center">
                        <History className="h-10 w-10 mx-auto text-muted-foreground" />
                        <h3 className="mt-2 font-medium">No Historical Data</h3>
                        <p className="text-sm text-muted-foreground">
                          Your historical soil data will appear here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="trends" className="py-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-md">
                      <div className="text-center">
                        <LineChart className="h-10 w-10 mx-auto text-muted-foreground" />
                        <h3 className="mt-2 font-medium">No Trend Data</h3>
                        <p className="text-sm text-muted-foreground">
                          Soil health trends will be displayed here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports" className="py-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-md">
                      <div className="text-center">
                        <FileBarChart className="h-10 w-10 mx-auto text-muted-foreground" />
                        <h3 className="mt-2 font-medium">No Reports Generated</h3>
                        <p className="text-sm text-muted-foreground">
                          Your soil analysis reports will appear here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SoilAnalysis;
