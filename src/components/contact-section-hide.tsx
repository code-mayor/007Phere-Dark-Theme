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
  FileCheck,
  Heart
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false,
    confidentiality: false
  });

  const [formStep, setFormStep] = useState(1);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // const services = [
  //   'Matrimonial Intelligence',
  //   'Love Arbitration',
  //   'Litigation Support',
  //   'Astrology & Compatibility',
  //   'Honeymoon Planning',
  //   'Counselling & Aftercare',
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
      setSelectedServices(selectedServices.filter(s => s !== service));
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


  return (
    <section className="py-20 bg-gradient-to-b from-cream to-muted-lavender/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-charcoal mb-4">Contact & Confidential Intake</h2>
          <p className="text-lg text-soft-gray max-w-3xl mx-auto">
            Begin your journey with complete confidence. Our secure intake process ensures
            your privacy from the very first contact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center bg-gradient-to-br from-rose-gold/10 to-silver-pink/10">
                <CardTitle className="text-xl text-charcoal">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-rose-gold/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-rose-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Confidential Hotline</p>
                    <p className="text-sm text-soft-gray">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-rose-gold/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-rose-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Secure Email</p>
                    <p className="text-sm text-soft-gray">intake@007phere.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-rose-gold/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-rose-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Discreet Offices</p>
                    <p className="text-sm text-soft-gray">Mumbai • Delhi • Bangalore</p>
                  </div>
                </div>

                <div className="bg-blush/50 rounded-lg p-4 border-l-4 border-rose-gold">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-rose-gold" />
                    <span className="font-medium text-charcoal text-sm">24/7 Emergency Support</span>
                  </div>
                  <p className="text-xs text-soft-gray">
                    Crisis intervention and urgent consultation available round the clock
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-charcoal flex items-center justify-center space-x-2">
                  <Shield className="w-5 h-5 text-rose-gold" />
                  <span>Security Promise</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {[
                  "End-to-end encryption",
                  "No data retention policy",
                  "Anonymous consultation options",
                  "Secure communication channels"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-rose-gold flex-shrink-0" />
                    <span className="text-sm text-soft-gray">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Intake Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-rose-gold/10 to-muted-lavender/10">
                <CardTitle className="text-2xl text-charcoal flex items-center space-x-3">
                  <Lock className="w-6 h-6 text-rose-gold" />
                  <span>Confidential Intake Form</span>
                </CardTitle>
                {/* <div className="flex items-center space-x-4 mt-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center space-x-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${formStep >= step
                        ? 'bg-rose-gold text-charcoal'
                        : 'bg-silver-pink/30 text-soft-gray'
                        }`}>
                        {formStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                      </div>
                      <span className="text-sm text-soft-gray">
                        {step === 1 ? 'Details' : step === 2 ? 'Service' : 'Consent'}
                      </span>
                      {step < 3 && <div className="h-px bg-silver-pink w-8"></div>}
                    </div>
                  ))}
                </div> */}
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={toggleAll}
                      className="form-checkbox"
                    />
                    <span>All Services</span>
                  </label>

                  {services.map(service => (
                    <label key={service} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                        className="form-checkbox"
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>

              </CardHeader>

              <CardContent className="p-8">
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-charcoal mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-charcoal mb-2 block">Full Name</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          className="bg-cream border-rose-gold/30 focus:border-rose-gold"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-charcoal mb-2 block">Email Address</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          className="bg-cream border-rose-gold/30 focus:border-rose-gold"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-charcoal mb-2 block">Phone Number</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        className="bg-cream border-rose-gold/30 focus:border-rose-gold"
                      />
                    </div>
                    <Button
                      onClick={() => setFormStep(2)}
                      className="bg-rose-gold hover:bg-rose-gold/90 text-charcoal w-full"
                      disabled={!formData.name || !formData.email || !formData.phone}
                    >
                      Next Step
                    </Button>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-charcoal mb-4">Service Selection</h3>
                    <div>
                      <label className="text-sm font-medium text-charcoal mb-3 block">Which service interests you?</label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <label key={service} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="service"
                              value={service}
                              checked={formData.service === service}
                              onChange={(e) => handleInputChange('service', e.target.value)}
                              className="w-4 h-4 text-rose-gold"
                            />
                            <span className="text-sm text-charcoal">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-charcoal mb-2 block">Additional Details</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please share any specific requirements or concerns..."
                        className="bg-cream border-rose-gold/30 focus:border-rose-gold min-h-[120px]"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        onClick={() => setFormStep(1)}
                        className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-charcoal"
                      >
                        Previous
                      </Button>
                      <Button
                        onClick={() => setFormStep(3)}
                        className="bg-rose-gold hover:bg-rose-gold/90 text-charcoal flex-1"
                        disabled={!formData.service}
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-charcoal mb-4">Consent & Confidentiality</h3>

                    <div className="space-y-4">
                      <div className="bg-blush/30 rounded-lg p-6 border border-rose-gold/20">
                        <h4 className="font-semibold text-charcoal mb-3">Privacy Notice</h4>
                        <p className="text-sm text-soft-gray leading-relaxed">
                          Your information is protected under our strict confidentiality protocols.
                          We will never share your details without explicit consent, except as required by law.
                        </p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked: boolean | undefined) => handleInputChange('consent', checked as boolean)}
                          className="mt-0.5"
                        />
                        <label htmlFor="consent" className="text-sm text-charcoal leading-relaxed cursor-pointer">
                          I consent to 007Phere contacting me regarding matrimonial services and understand
                          that all communications will be confidential.
                        </label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="confidentiality"
                          checked={formData.confidentiality}
                          onCheckedChange={(checked: boolean | undefined) => handleInputChange('confidentiality', checked as boolean)}
                          className="mt-0.5"
                        />
                        <label htmlFor="confidentiality" className="text-sm text-charcoal leading-relaxed cursor-pointer">
                          I acknowledge that 007Phere operates under strict confidentiality agreements
                          and agree to the terms of service.
                        </label>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        onClick={() => setFormStep(2)}
                        className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-charcoal"
                      >
                        Previous
                      </Button>
                      <Button
                        className="bg-rose-gold hover:bg-rose-gold/90 text-charcoal flex-1 flex items-center space-x-2"
                        disabled={!formData.consent || !formData.confidentiality}
                      >
                        <Lock className="w-4 h-4" />
                        <span>Submit Encrypted Form</span>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Button
                size="lg"
                className="bg-charcoal hover:bg-charcoal/90 text-cream h-16 flex items-center space-x-3"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Schedule a Callback</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-charcoal h-16 flex items-center space-x-3"
              >
                <Phone className="w-5 h-5" />
                <span>Emergency Consultation</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-16 text-center">
          <div className="bg-cream rounded-2xl p-8 border border-rose-gold/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Heart className="w-6 h-6 text-rose-gold" />
              <h3 className="text-xl font-semibold text-charcoal">Client Confidentiality Commitment</h3>
            </div>
            <p className="text-soft-gray leading-relaxed">
              Every interaction with 007Phere is protected by attorney-client privilege principles,
              non-disclosure agreements, and our unwavering commitment to your privacy.
              Your trust is the foundation of our service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;