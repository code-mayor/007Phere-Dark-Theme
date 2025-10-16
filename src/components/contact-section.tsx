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
  Heart,
  ArrowRight,
  Loader2,
  AlertCircle,
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
    ageVerification: false,
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [allSelected, setAllSelected] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const services = [
    'General Inquiry',
    'Matrimonial Intelligence',
    'Counselling & Care',
    'Honeymoon Planning',
    'Love Arbitration',
    'Astrology & Compatibility',
    'Litigation Support',
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error message when user starts typing
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' });
    }
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Client-side validation
      if (selectedServices.length === 0) {
        throw new Error('Please select at least one service');
      }

      if (!formData.consent) {
        throw new Error('Please provide your consent to proceed');
      }

      if (!formData.ageVerification) {
        throw new Error('Age verification is required');
      }

      // Submit to API
      const response = await fetch(import.meta.env.VITE_API_URL || 'https://007phere-api.007phere.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedServices,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      // Success
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for contacting us! We have sent a confirmation email. Our team will reach out to you within 24-48 hours.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
        ageVerification: false,
      });
      setSelectedServices([]);
      setAllSelected(false);

      // Scroll to success message
      setTimeout(() => {
        const successElement = document.getElementById('success-message');
        successElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);

    } catch (error: any) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'An error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
            Begin with a confidential consultation. Your privacy is protected from
            the very first contact.
          </p>
        </div>

        {/* Success/Error Message */}
        {submitStatus.type && (
          <div
            id="success-message"
            className={`max-w-3xl mx-auto mb-8 p-6 rounded-xl border ${submitStatus.type === 'success'
              ? 'bg-green-50 border-green-200'
              : 'bg-red-50 border-red-200'
              }`}
          >
            <div className="flex items-start space-x-3">
              {submitStatus.type === 'success' ? (
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              )}
              <div>
                <h3
                  className={`font-semibold mb-1 ${submitStatus.type === 'success'
                    ? 'text-green-900'
                    : 'text-red-900'
                    }`}
                >
                  {submitStatus.type === 'success' ? 'Success!' : 'Error'}
                </h3>
                <p
                  className={
                    submitStatus.type === 'success'
                      ? 'text-green-700'
                      : 'text-red-700'
                  }
                >
                  {submitStatus.message}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border border-border bg-card shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-foreground">
                  Contact Information
                </CardTitle>
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
                    <p className="text-sm text-muted-foreground">
                      hello@007phere.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" strokeWidth={0.5} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Private Offices</p>
                    <p className="text-sm text-muted-foreground">
                      Mumbai • Delhi • Bangalore
                    </p>
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
                  'End-to-end encryption',
                  'Strict confidentiality protocols',
                  'No data retention policy',
                  'Anonymous consultation options',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle
                      className="w-4 h-4 text-primary flex-shrink-0"
                      strokeWidth={0.5}
                    />
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
                <p className="text-muted-foreground">
                  All information is encrypted and protected
                </p>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange('name', e.target.value)
                        }
                        placeholder="Your full name"
                        required
                        className="bg-secondary/50 border-border focus:border-primary rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange('email', e.target.value)
                        }
                        placeholder="your.email@example.com"
                        required
                        className="bg-secondary/50 border-border focus:border-primary rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange('phone', e.target.value)
                      }
                      placeholder="+91 98765 43210"
                      required
                      className="bg-secondary/50 border-border focus:border-primary rounded-xl"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      Service of Interest *
                    </label>
                    <div className="grid md:grid-cols-2 gap-3 mt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={allSelected}
                          onCheckedChange={toggleAll}
                        />
                        <label className="text-sm cursor-pointer">All Services</label>
                      </div>

                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            checked={selectedServices.includes(service)}
                            onCheckedChange={() => toggleService(service)}
                          />
                          <label className="text-sm cursor-pointer">{service}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      How can we help?
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange('message', e.target.value)
                      }
                      placeholder="Please share your requirements or concerns..."
                      className="bg-secondary/50 border-border focus:border-primary rounded-xl min-h-[120px]"
                    />
                  </div>

                  {/* Age Verification */}
                  <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                    <div className="flex items-start space-x-3 mb-4">
                      <Checkbox
                        id="age-verification"
                        checked={formData.ageVerification}
                        onCheckedChange={(checked: boolean) =>
                          handleInputChange('ageVerification', checked)
                        }
                        className="mt-0.5"
                      />
                      <label
                        htmlFor="age-verification"
                        className="text-sm text-foreground cursor-pointer"
                      >
                        <strong>Age Verification: *</strong> I confirm that I am 18 years
                        of age or older and am legally able to enter into this
                        consultation.
                      </label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked: boolean) =>
                          handleInputChange('consent', checked)
                        }
                        className="mt-0.5"
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-foreground cursor-pointer"
                      >
                        <strong>Consent & Privacy: *</strong> I willingly consent to
                        007Phere contacting me regarding matrimonial services. I understand
                        that all communications will be confidential and protected under
                        strict privacy protocols. 007Phere assures that my information will
                        never be shared with third parties or compromised.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !formData.consent ||
                      !formData.ageVerification ||
                      !formData.name ||
                      !formData.email ||
                      selectedServices.length === 0
                    }
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5 mr-2" strokeWidth={0.5} />
                        <span>Send Secure Message</span>
                        <ArrowRight
                          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                          strokeWidth={0.5}
                        />
                      </>
                    )}
                  </Button>
                </form>
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
                <h3 className="text-xl font-semibold text-foreground font-serif">
                  Our Promise to You
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Every interaction with 007Phere is protected by the highest standards
                of confidentiality. Your trust is sacred to us, and your privacy is
                our foundation. We're here to support you with dignity, discretion,
                and care.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;