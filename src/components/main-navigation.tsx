import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Logo from "../assets/logo.svg?react";

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const MainNavigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-6 w-full max-w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onSectionChange('home')}
          >
            <div className="min-w-0">
              <Logo className="block w-24" aria-label="007Phere Logo" />
              <p className="text-xs text-muted-foreground truncate hidden sm:block">Matrimonial Support</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`text-sm transition-colors duration-300 hover:text-primary ${currentSection === item.id
                  ? 'text-primary font-medium'
                  : 'text-foreground'
                  }`}
              >
                {item.label}
              </button>
            ))}

            <Button
              onClick={() => onSectionChange('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-current" strokeWidth={0.5} />
              Get started
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-muted">
                  <Menu className="w-6 h-6 text-foreground" strokeWidth={0.5} />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-card border-l border-border">
                <div className="flex flex-col space-y-8 mt-12">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSectionChange(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-left text-lg transition-colors duration-300 hover:text-primary ${currentSection === item.id
                        ? 'text-primary font-medium'
                        : 'text-foreground'
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => {
                      onSectionChange('contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full py-3 rounded-full"
                  >
                    <Phone className="w-4 h-4 mr-2" strokeWidth={0.5} />
                    Get started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;