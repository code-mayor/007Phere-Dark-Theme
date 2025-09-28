import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { 
  Shield, 
  Gavel, 
  Heart, 
  Star, 
  MapPin, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: "Matrimonial intelligence",
      description: "Comprehensive pre-marriage verification and background research",
      features: ["Identity verification", "Financial transparency", "Legal background checks"],
      color: "from-lavender-100 to-lavender-200"
    },
    {
      icon: Gavel,
      title: "Love arbitration",
      description: "Confidential dispute resolution combining legal and emotional support",
      features: ["Private mediation", "Legal framework", "Emotional healing"],
      color: "from-lavender-200 to-lavender-300"
    },
    {
      icon: Users,
      title: "Counselling & care",
      description: "Professional guidance throughout your matrimonial journey",
      features: ["Pre-marriage counselling", "Relationship support", "Family mediation"],
      color: "from-lavender-100 to-lavender-200"
    },
    {
      icon: Star,
      title: "Astrology & compatibility",
      description: "Traditional guidance combined with modern relationship insights",
      features: ["Compatibility analysis", "Cultural insights", "Traditional remedies"],
      color: "from-lavender-200 to-lavender-300"
    },
    {
      icon: MapPin,
      title: "Honeymoon planning",
      description: "Privacy-first luxury experiences for your special moments",
      features: ["Discreet planning", "Vetted vendors", "Security options"],
      color: "from-lavender-100 to-lavender-200"
    },
    {
      icon: Heart,
      title: "Litigation support",
      description: "Ethical evidence collection and legal documentation support",
      features: ["Court-admissible docs", "Evidence collection", "Legal coordination"],
      color: "from-lavender-200 to-lavender-300"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full text-primary text-sm font-medium mb-6">
            <Heart className="w-4 h-4" strokeWidth={0.5} />
            <span>Our services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-foreground mb-6">
            Complete matrimonial care
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intelligence gathering to post-marriage support, we provide comprehensive, 
            confidential services at every stage of your matrimonial journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group border border-border bg-card shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-primary" strokeWidth={0.5} />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-primary/80 hover:bg-muted p-0 h-auto group/btn"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-secondary to-muted rounded-3xl p-12 text-center border border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Why 007Phere?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Legal Excellence", desc: "All documentation is court-admissible" },
              { title: "Absolute Discretion", desc: "Your privacy is our highest priority" },
              { title: "Holistic Approach", desc: "Combining legal, emotional, and cultural care" }
            ].map((pillar, index) => (
              <div key={index} className="space-y-3">
                <div className="w-12 h-12 mx-auto bg-primary/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">{pillar.title}</h4>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;