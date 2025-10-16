import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight, Shield, Heart, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center hero-bg justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-70 mix-blend-multiply"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 w-full max-w-full">
        <div className="max-w-4xl mx-auto text-center space-y-12">

          {/* Hero Text */}
          <div className="space-y-6">

            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-foreground leading-tight font-serif break-words">
              007Phere
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-primary font-normal mt-4 break-words">
                Love deserves protection
              </span>
            </h1>

            <p className="text-xl leading-relaxed max-w-2xl mx-auto text-foreground">
              India's first confidential matrimonial support firm.
              We protect trust, dignity, and truth in love.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border-0"
            >
              Begin Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={0.5} />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            {[
              { icon: Shield, title: "100% confidential", desc: "Your privacy is sacred" },
              { icon: Heart, title: "Dignity first", desc: "Compassionate approach" },
              { icon: Users, title: "Expert team", desc: "Legal & counseling professionals" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-muted transition-colors duration-300 border border-border/50">
                  <item.icon className="w-8 h-8 text-primary" strokeWidth={0.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements - Constrained to viewport */}
      <div className="absolute top-20 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-4 sm:right-16 w-24 sm:w-32 h-24 sm:h-32 bg-primary/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-4 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-primary/25 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;