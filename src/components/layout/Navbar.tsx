
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plant, Droplets, Leaf, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Plant className="h-6 w-6 text-soil-green" />
          <span className="hidden sm:inline">SoilWise</span>
          <span className="text-soil-green sm:hidden">SW</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <Link to="/soil-analysis" className="text-foreground/80 hover:text-foreground transition-colors">
            Soil Analysis
          </Link>
          <Link to="/recommendations" className="text-foreground/80 hover:text-foreground transition-colors">
            Recommendations
          </Link>
          <Link to="/community" className="text-foreground/80 hover:text-foreground transition-colors">
            Community
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Toggle theme">
            <Droplets className="h-5 w-5 text-soil-blue" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Leaf className="h-5 w-5 text-soil-green" />
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 py-6">
                <Link to="/" className="flex items-center gap-2 font-bold text-xl">
                  <Plant className="h-6 w-6 text-soil-green" />
                  <span>SoilWise</span>
                </Link>
                <nav className="grid gap-4">
                  <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                    Dashboard
                  </Link>
                  <Link to="/soil-analysis" className="text-foreground/80 hover:text-foreground transition-colors">
                    Soil Analysis
                  </Link>
                  <Link to="/recommendations" className="text-foreground/80 hover:text-foreground transition-colors">
                    Recommendations
                  </Link>
                  <Link to="/community" className="text-foreground/80 hover:text-foreground transition-colors">
                    Community
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
