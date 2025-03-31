
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import SoilDataForm from '@/components/soil-analysis/SoilDataForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Beaker, History, Droplet, FileText, PieChart } from 'lucide-react';

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
              Test your soil composition and get detailed reports on its health
            </p>
          </div>
          
          {/* Analysis Options */}
          <Tabs defaultValue="input">
            <TabsList className="w-full max-w-md">
              <TabsTrigger value="input" className="flex items-center gap-2">
                <Beaker className="h-4 w-4" />
                Input Data
              </TabsTrigger>
              <TabsTrigger value="results" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                Results
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center gap-2">
                <History className="h-4 w-4" />
                History
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="input" className="pt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <SoilDataForm />
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Analysis Process
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-2">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Input Soil Data</p>
                          <p className="text-sm text-muted-foreground">
                            Enter your soil test results or upload images for AI analysis
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                          2
                        </div>
                        <div>
                          <p className="font-medium">AI Processing</p>
                          <p className="text-sm text-muted-foreground">
                            Our AI analyzes your data and compares it with optimal ranges
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Get Detailed Results</p>
                          <p className="text-sm text-muted-foreground">
                            Receive comprehensive soil health report and recommendations
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Droplet className="h-5 w-5 text-soil-blue" />
                        Soil Testing Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Test soil when it's neither too wet nor too dry</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Take samples from multiple locations in your garden</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Sample at root depth (usually 4-6 inches deep)</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>For container gardens, sample from the middle of the pot</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Allow soil to dry before packaging for lab tests</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Test at the same time each year for consistent results</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="results" className="pt-6">
              <Card className="p-6 text-center">
                <PieChart className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-xl font-semibold">No Results Yet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Submit soil data to see analysis results and personalized recommendations
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="history" className="pt-6">
              <Card className="p-6 text-center">
                <History className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-xl font-semibold">No Analysis History</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your past soil analysis results will appear here once you've completed tests
                </p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default SoilAnalysis;
