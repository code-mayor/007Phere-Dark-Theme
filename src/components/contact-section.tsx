import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import {
  Phone,
  Mail,
  MapPin,
  Lock,
  Shield,
  CheckCircle,
  Clock,
  MessageSquare,
  Heart,
  ArrowRight
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // const services = [
  //   'Matrimonial Intelligence',
  //   'Love Arbitration',
  //   'Counselling & Care',
  //   'Astrology & Compatibility',
  //   'Honeymoon Planning',
  //   'Litigation Support',
  //   'General Inquiry'
  // ];

  const services = [
    "General Inquiry",
    "Matrimonial Intelligence",
    "Counselling & Care",
    "Honeymoon Planning",
    "Love Arbitration",
    "Astrology & Compatibility",
    "Litigation Support",
  ];

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [allSelected, setAllSelected] = useState(false);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
      setAllSelected(false);
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const toggleAll = () => {
    if (allSelected) {
      setSelectedServices([]);
      setAllSelected(false);
    } else {
      setSelectedServices([...services]);
      setAllSelected(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with:", {
      selectedServices,
      // TODO: capture other fields and send to backend
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full text-primary text-sm font-medium mb-6">
            <Heart className="w-4 h-4" strokeWidth={0.5} />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-foreground mb-6 font-serif">
            Start Your Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Begin with a confidential consultation. Your privacy is protected from the very first contact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border border-border bg-card shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" strokeWidth={0.5} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">24/7 Confidential</p>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" strokeWidth={0.5} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Secure Email</p>
                    <p className="text-sm text-muted-foreground">hello@007phere.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" strokeWidth={0.5} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Private Offices</p>
                    <p className="text-sm text-muted-foreground">Mumbai • Delhi • Bangalore</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-gradient-to-br from-secondary/50 to-card shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="w-5 h-5 text-primary" strokeWidth={0.5} />
                  <span className="font-medium text-foreground">Privacy Promise</span>
                </div>
                {[
                  "End-to-end encryption",
                  "Strict confidentiality protocols",
                  "No data retention policy",
                  "Anonymous consultation options"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={0.5} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-border bg-card shadow-xl">
              <CardHeader className="bg-gradient-to-r from-secondary to-muted border-b border-border">
                <CardTitle className="text-2xl text-foreground flex items-center space-x-3 font-serif">
                  <Lock className="w-6 h-6 text-primary" strokeWidth={0.5} />
                  <span>Confidential Consultation</span>
                </CardTitle>
                <p className="text-muted-foreground">All information is encrypted and protected</p>
              </CardHeader>

              <CardContent className="p-8 space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      className="bg-secondary/50 border-border focus:border-primary rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="bg-secondary/50 border-border focus:border-primary rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="bg-secondary/50 border-border focus:border-primary rounded-xl"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">Service of Interest</label>
                  {/* <div className="grid md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label key={service} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          checked={formData.service === service}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                          className="w-4 h-4 text-primary border-border focus:ring-primary bg-secondary"
                        />
                        <span className="text-sm text-foreground">{service}</span>
                      </label>
                    ))}
                  </div> */}
                  <div className="grid md:grid-cols-2 gap-3 mt-2">
                    {/* All Services */}
                    <div className="flex items-center space-x-2">
                      <Checkbox checked={allSelected} onCheckedChange={toggleAll} />
                      <label>All Services</label>
                    </div>

                    {/* Individual Services */}
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          checked={selectedServices.includes(service)}
                          onCheckedChange={() => toggleService(service)}
                        />
                        <label>{service}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">How can we help?</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Please share your requirements or concerns..."
                    className="bg-secondary/50 border-border focus:border-primary rounded-xl min-h-[120px]"
                  />
                </div>

                {/* Consent */}
                <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked: boolean) => handleInputChange('consent', checked)}
                      className="mt-0.5"
                    />
                    <label htmlFor="consent" className="text-sm text-foreground cursor-pointer">
                      I consent to 007Phere contacting me regarding matrimonial services and understand
                      that all communications will be confidential and protected under strict privacy protocols.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  disabled={!formData.consent || !formData.name || !formData.email}
                >
                  <Lock className="w-5 h-5 mr-2" strokeWidth={0.5} />
                  <span>Send Secure Message</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={0.5} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final Promise */}
        <div className="mt-20 text-center">
          <Card className="max-w-3xl mx-auto border border-border bg-gradient-to-r from-card to-secondary/50 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-primary" strokeWidth={0.5} />
                <h3 className="text-xl font-semibold text-foreground font-serif">Our Promise to You</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Every interaction with 007Phere is protected by the highest standards of confidentiality.
                Your trust is sacred to us, and your privacy is our foundation. We're here to support you
                with dignity, discretion, and care.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;