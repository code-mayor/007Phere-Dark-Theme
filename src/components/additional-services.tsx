import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  MapPin, 
  Shield, 
  Heart, 
  Users, 
  CheckCircle, 
  Phone, 
  Calendar,
  Lock,
  FileCheck,
  Clock,
  UserCheck,
  Scale,
  BookOpen
} from 'lucide-react';

const HoneymoonPlanning: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-blush/20 to-ivory">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl text-charcoal">Honeymoon Planning</h2>
            <p className="text-lg text-soft-gray leading-relaxed">
              Curate your perfect honeymoon experience with our privacy-first approach. 
              We ensure complete discretion while creating unforgettable memories.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { 
                icon: Lock, 
                title: "Privacy-First Planning", 
                desc: "Complete confidentiality in all arrangements and communications",
                highlight: true
              },
              { 
                icon: UserCheck, 
                title: "Vetted Vendors", 
                desc: "Carefully selected and verified service providers and venues"
              },
              { 
                icon: Shield, 
                title: "Security Add-ons", 
                desc: "Optional security services for high-profile couples"
              },
              { 
                icon: MapPin, 
                title: "Bespoke Experiences", 
                desc: "Customized itineraries matching your preferences and privacy needs"
              }
            ].map((item, index) => (
              <div key={index} className={`flex items-start space-x-4 ${item.highlight ? 'bg-muted-lavender/30 rounded-lg p-4 border-l-4 border-rose-gold' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-rose-gold/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-rose-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">{item.title}</h4>
                  <p className="text-soft-gray text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-cream rounded-lg p-6 border border-rose-gold/20">
            <h4 className="font-semibold text-charcoal mb-3">Included Services</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Luxury accommodations",
                "Private transportation", 
                "Exclusive dining",
                "Cultural experiences",
                "Spa & wellness",
                "Photography services"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-rose-gold flex-shrink-0" />
                  <span className="text-sm text-soft-gray">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <Button className="bg-rose-gold hover:bg-rose-gold/90 text-charcoal">
            Curate My Experience
          </Button>
        </div>

        <div className="relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1739216906046-afc47ed589fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHJpbmdzJTIwbWluaW1hbHxlbnwxfHx8fDE3NTc4NzM2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Elegant wedding rings"
            className="rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-gold/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </div>
  </section>
);

const CounsellingAftercare: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-cream to-muted-lavender/20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl text-charcoal mb-4">Counselling & Aftercare</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-soft-gray mb-6">
            Professional guidance and support throughout your matrimonial journey. 
            Because marriage begins after the ceremony.
          </p>
          <div className="bg-blush/50 rounded-lg p-6 border-l-4 border-rose-gold">
            <p className="text-charcoal font-medium italic">"Marriage begins after the ceremony."</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Before Marriage */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center bg-gradient-to-br from-rose-gold/10 to-silver-pink/10">
            <div className="w-16 h-16 rounded-full bg-rose-gold/20 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-rose-gold" />
            </div>
            <CardTitle className="text-2xl text-charcoal">Before Marriage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="space-y-3">
              {[
                "Pre-marital counselling sessions",
                "Expectation alignment",
                "Communication skill building",
                "Conflict resolution training",
                "Family integration guidance"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-gold flex-shrink-0" />
                  <span className="text-soft-gray">{service}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* After Marriage */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center bg-gradient-to-br from-muted-lavender/10 to-blush/10">
            <div className="w-16 h-16 rounded-full bg-muted-lavender/30 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-charcoal" />
            </div>
            <CardTitle className="text-2xl text-charcoal">After Marriage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="space-y-3">
              {[
                "Ongoing relationship support",
                "Family dynamics counselling",
                "Crisis intervention",
                "Regular check-in sessions",
                "Long-term relationship health"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-gold flex-shrink-0" />
                  <span className="text-soft-gray">{service}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Service Highlights */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          { 
            icon: Heart, 
            title: "Reconciliation Support", 
            desc: "Helping couples work through challenges with empathy and professional guidance"
          },
          { 
            icon: Users, 
            title: "Family Dynamics", 
            desc: "Navigating extended family relationships and cultural expectations"
          },
          { 
            icon: Clock, 
            title: "Regular Check-ins", 
            desc: "Proactive support to maintain healthy relationship patterns"
          }
        ].map((highlight, index) => (
          <div key={index} className="text-center bg-cream rounded-xl p-6 border border-rose-gold/20">
            <div className="w-12 h-12 rounded-full bg-rose-gold/20 flex items-center justify-center mx-auto mb-4">
              <highlight.icon className="w-6 h-6 text-rose-gold" />
            </div>
            <h4 className="font-semibold text-charcoal mb-2">{highlight.title}</h4>
            <p className="text-sm text-soft-gray">{highlight.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-rose-gold hover:bg-rose-gold/90 text-charcoal">
          Book a Counsellor
        </Button>
      </div>
    </div>
  </section>
);

const LegalCompliance: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-ivory to-cream">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl text-charcoal">Legal & Compliance</h2>
            <p className="text-lg text-soft-gray leading-relaxed">
              Our operations are built on the foundation of legal excellence and ethical standards. 
              Every service we provide adheres to the highest standards of professional conduct.
            </p>
          </div>

          {/* Compliance Areas */}
          <div className="space-y-4">
            {[
              { 
                title: "Consent-first Operations", 
                desc: "All services require explicit consent from all parties involved",
                icon: CheckCircle
              },
              { 
                title: "NDA & Engagement Letters", 
                desc: "Comprehensive confidentiality agreements protect all stakeholders",
                icon: FileCheck
              },
              { 
                title: "Data Minimization", 
                desc: "We collect only necessary information and secure it rigorously",
                icon: Lock
              },
              { 
                title: "Chain-of-Custody", 
                desc: "Evidence handling follows strict legal protocols",
                icon: Scale
              },
              { 
                title: "Privacy Policies", 
                desc: "Transparent data handling and protection protocols",
                icon: Shield
              },
              { 
                title: "Jurisdictional Handling", 
                desc: "Services adapted to local legal requirements and cultural norms",
                icon: BookOpen
              }
            ].map((item, index) => (
              <div key={index} className="bg-cream rounded-lg p-4 border border-rose-gold/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-rose-gold/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-rose-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">{item.title}</h4>
                    <p className="text-sm text-soft-gray">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-rose-gold/10 to-silver-pink/10 rounded-2xl p-8 border border-rose-gold/30">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-rose-gold flex items-center justify-center">
                <Shield className="w-6 h-6 text-charcoal" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal">Trust Badge</h3>
                <p className="text-sm text-soft-gray">100% Court-Admissible Documentation</p>
              </div>
            </div>
            <p className="text-charcoal">
              All evidence and documentation we provide meets legal standards for court admissibility, 
              ensuring your investment in our services translates to legally viable outcomes.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-muted-lavender/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-charcoal mb-6">Trust Marks</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, label: "Legal Compliance" },
                { icon: UserCheck, label: "Licensed Experts" },
                { icon: Lock, label: "NDA Secured" },
                { icon: Scale, label: "Court Admissible" }
              ].map((mark, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <mark.icon className="w-8 h-8 text-rose-gold" />
                  </div>
                  <p className="text-sm font-medium text-charcoal">{mark.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blush/50 rounded-xl p-6 text-center border border-rose-gold/20">
            <h4 className="font-semibold text-charcoal mb-2">Professional Standards</h4>
            <p className="text-sm text-soft-gray mb-4">
              Our team consists of licensed legal professionals, certified counsellors, 
              and trained investigators who maintain the highest ethical standards.
            </p>
            <div className="flex justify-center space-x-4 text-xs text-soft-gray">
              <span>• Bar Certified</span>
              <span>• Licensed Therapists</span>
              <span>• Trained Investigators</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { HoneymoonPlanning, CounsellingAftercare, LegalCompliance };