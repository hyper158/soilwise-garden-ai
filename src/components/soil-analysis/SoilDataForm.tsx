
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Droplet, Upload, FlaskConical } from 'lucide-react';
import { toast } from 'sonner';

const SoilDataForm = () => {
  const [soilData, setSoilData] = useState({
    moisture: 40,
    ph: 6.5,
    nitrogen: 50,
    phosphorus: 35,
    potassium: 45,
    temperature: 22,
    salinity: 20
  });
  
  const handleSliderChange = (name: string, value: number[]) => {
    setSoilData({
      ...soilData,
      [name]: value[0]
    });
  };
  
  const handleInputChange = (name: string, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setSoilData({
        ...soilData,
        [name]: numValue
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Soil data submitted successfully!');
    console.log('Submitted soil data:', soilData);
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      toast.success('Soil image uploaded for analysis');
      // In a real app, you would process the image here
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Soil Analysis Input</CardTitle>
        <CardDescription>
          Enter your soil data manually or upload images for AI analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="manual">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="manual" className="flex items-center gap-2">
              <FlaskConical className="h-4 w-4" />
              Manual Entry
            </TabsTrigger>
            <TabsTrigger value="image" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Image Upload
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="manual">
            <form onSubmit={handleSubmit} className="space-y-6 py-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="moisture">Soil Moisture (%)</Label>
                    <span className="text-sm">{soilData.moisture}%</span>
                  </div>
                  <Slider
                    id="moisture"
                    min={0}
                    max={100}
                    step={1}
                    value={[soilData.moisture]}
                    onValueChange={(value) => handleSliderChange('moisture', value)}
                    className="py-4"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="ph">Soil pH</Label>
                    <span className="text-sm">{soilData.ph}</span>
                  </div>
                  <Slider
                    id="ph"
                    min={0}
                    max={14}
                    step={0.1}
                    value={[soilData.ph]}
                    onValueChange={(value) => handleSliderChange('ph', value)}
                    className="py-4"
                  />
                </div>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="nitrogen">Nitrogen (mg/kg)</Label>
                    <Input
                      id="nitrogen"
                      type="number"
                      value={soilData.nitrogen}
                      onChange={(e) => handleInputChange('nitrogen', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phosphorus">Phosphorus (mg/kg)</Label>
                    <Input
                      id="phosphorus"
                      type="number"
                      value={soilData.phosphorus}
                      onChange={(e) => handleInputChange('phosphorus', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="potassium">Potassium (mg/kg)</Label>
                    <Input
                      id="potassium"
                      type="number"
                      value={soilData.potassium}
                      onChange={(e) => handleInputChange('potassium', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="temperature">Temperature (°C)</Label>
                    <Input
                      id="temperature"
                      type="number"
                      value={soilData.temperature}
                      onChange={(e) => handleInputChange('temperature', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salinity">Salinity (dS/m)</Label>
                    <Input
                      id="salinity"
                      type="number"
                      value={soilData.salinity}
                      onChange={(e) => handleInputChange('salinity', e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <Button type="submit" className="w-full">
                Analyze Soil Data
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="image">
            <div className="py-4 space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium">Upload Soil Images</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Drag and drop or click to upload soil images for AI analysis
                </p>
                <Input
                  id="soil-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <Button variant="outline" onClick={() => document.getElementById('soil-image')?.click()}>
                  Select Images
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p className="font-medium">Tips for better analysis:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Take clear, well-lit photos of the soil</li>
                  <li>Include different angles and depths</li>
                  <li>Avoid shadows and bright reflections</li>
                  <li>For best results, include a color reference card</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SoilDataForm;
