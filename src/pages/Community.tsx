
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import ChatInterface from '@/components/community/ChatInterface';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MessageSquare, 
  Users, 
  BookOpen, 
  Calendar,
  ExternalLink,
  ThumbsUp,
  MessageCircle,
  Share2
} from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <div className="flex flex-col space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Community & Resources</h1>
            <p className="text-muted-foreground">
              Connect with experts, chat with AI, and access garden knowledge
            </p>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="ai-assistant">
            <TabsList className="w-full max-w-md">
              <TabsTrigger value="ai-assistant" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                AI Assistant
              </TabsTrigger>
              <TabsTrigger value="forum" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Forum
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Resources
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Events
              </TabsTrigger>
            </Tabs>
            
            <TabsContent value="ai-assistant" className="pt-6">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <ChatInterface />
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">How to Use the AI Assistant</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 text-sm">
                        <p>The SoilWise AI Assistant can help you with:</p>
                        <ul className="space-y-2">
                          <li className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>Interpreting soil test results</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>Identifying plant nutrient deficiencies</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>Recommending plants for your soil type</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>Providing organic soil amendment advice</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>Answering common gardening questions</span>
                          </li>
                        </ul>
                        <p className="text-muted-foreground">
                          Ask specific questions for the most helpful answers. The AI learns from your interactions to provide better recommendations over time.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Popular Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <Button variant="ghost" className="w-full justify-start font-normal text-left">
                          How do I improve clay soil?
                        </Button>
                        <Button variant="ghost" className="w-full justify-start font-normal text-left">
                          What plants grow well in acidic soil?
                        </Button>
                        <Button variant="ghost" className="w-full justify-start font-normal text-left">
                          How can I increase nitrogen naturally?
                        </Button>
                        <Button variant="ghost" className="w-full justify-start font-normal text-left">
                          When should I fertilize my garden?
                        </Button>
                        <Button variant="ghost" className="w-full justify-start font-normal text-left">
                          How often should I test my soil?
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="forum" className="pt-6">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-x-2">
                    <Button variant="outline">Latest</Button>
                    <Button variant="ghost">Popular</Button>
                    <Button variant="ghost">Unanswered</Button>
                  </div>
                  <Button>Start New Discussion</Button>
                </div>
                
                <div className="space-y-4">
                  {/* Forum post cards */}
                  {[1, 2, 3].map((index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="border-b border-border p-4">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback>GG</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">Garden Guru</p>
                              <p className="text-xs text-muted-foreground">3 hours ago</p>
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            <span className="bg-muted px-2 py-1 rounded">Soil Health</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-medium mt-2">
                          {index === 1 ? "Battling persistent clay soil issues - help needed!" : 
                           index === 2 ? "Best cover crops for improving nitrogen levels?" :
                           "How to interpret conflicting soil test results?"}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {index === 1 ? "I've been adding compost to my clay soil for two seasons but still having drainage issues. The plants show signs of root rot despite my efforts. What am I missing?" : 
                           index === 2 ? "Looking for recommendations on the most effective cover crops to boost nitrogen in my vegetable garden. Has anyone had success with specific varieties?" :
                           "I got my soil tested by two different labs and they're showing quite different results for pH and phosphorus levels. How do I know which one to trust?"}
                        </p>
                      </div>
                      
                      <div className="bg-muted/30 px-4 py-2 flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm">
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{index * 5 + 3}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{index * 3 + 2}</span>
                          </span>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Share2 className="h-4 w-4" />
                          <span className="sr-only sm:not-sr-only sm:inline">Share</span>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <Button variant="outline">Load More Discussions</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="pt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-muted" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Soil Testing Guide</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Learn the proper techniques for collecting soil samples and interpreting test results.
                    </p>
                    <Button variant="outline" className="w-full mt-2 gap-1">
                      Read Guide
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-muted" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Organic Fertilizers 101</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Comprehensive overview of organic fertilizer options and their benefits for different soil types.
                    </p>
                    <Button variant="outline" className="w-full mt-2 gap-1">
                      Read Guide
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-muted" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Companion Planting Chart</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Maximize garden productivity with this comprehensive companion planting reference guide.
                    </p>
                    <Button variant="outline" className="w-full mt-2 gap-1">
                      View Chart
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-muted" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Seasonal Growing Calendar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Month-by-month planting guide customized for your climate zone and soil conditions.
                    </p>
                    <Button variant="outline" className="w-full mt-2 gap-1">
                      View Calendar
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-muted" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Soil Remediation Techniques</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Expert methods for correcting common soil issues including compaction, pH imbalance, and nutrient deficiencies.
                    </p>
                    <Button variant="outline" className="w-full mt-2 gap-1">
                      Read Guide
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-muted" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Water Conservation Strategies</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Smart irrigation methods and water-saving techniques for efficient garden management.
                    </p>
                    <Button variant="outline" className="w-full mt-2 gap-1">
                      Read Guide
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="pt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Upcoming Events & Webinars</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 text-primary rounded-lg p-3 text-center w-16">
                            <div className="text-sm font-medium">MAY</div>
                            <div className="text-2xl font-bold">15</div>
                          </div>
                          <div>
                            <h3 className="font-medium">Webinar: Advanced Soil Testing Techniques</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Join soil scientist Dr. Emily Chen for an in-depth look at professional soil testing methods.
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-sm">
                              <span className="text-muted-foreground">2:00 PM - 3:30 PM EST</span>
                              <span className="text-muted-foreground">Online</span>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2">
                              Register
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 text-primary rounded-lg p-3 text-center w-16">
                            <div className="text-sm font-medium">MAY</div>
                            <div className="text-2xl font-bold">22</div>
                          </div>
                          <div>
                            <h3 className="font-medium">Workshop: Organic Fertilizer Making</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Hands-on workshop teaching techniques for creating your own organic fertilizers from household waste.
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-sm">
                              <span className="text-muted-foreground">10:00 AM - 12:00 PM EST</span>
                              <span className="text-muted-foreground">Botanical Gardens</span>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2">
                              Register
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 text-primary rounded-lg p-3 text-center w-16">
                            <div className="text-sm font-medium">JUN</div>
                            <div className="text-2xl font-bold">05</div>
                          </div>
                          <div>
                            <h3 className="font-medium">Expert Q&A: Summer Garden Planning</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Live Q&A session with master gardeners discussing optimal summer crops for different soil types.
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-sm">
                              <span className="text-muted-foreground">7:00 PM - 8:00 PM EST</span>
                              <span className="text-muted-foreground">Online</span>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2">
                              Register
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Community;
