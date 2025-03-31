
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="container flex max-w-md flex-col items-center text-center">
        <div className="text-soil-green mb-6">
          <Leaf className="h-20 w-20" />
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight">Page Not Found</h1>
        
        <p className="mt-4 text-muted-foreground">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Button variant="default" className="mt-8" asChild>
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
