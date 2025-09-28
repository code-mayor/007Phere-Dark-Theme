import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Shield, 
  FileText, 
  Search, 
  Users, 
  Gavel, 
  Star, 
  Heart, 
  MapPin, 
  Phone,
  Lock,
  CheckCircle,
  Eye,
  Clock,
  Scale
} from 'lucide-react';

const MatrimonialIntelligence: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-ivory to-cream">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl text-charcoal">Matrimonial Intelligence</h2>
            <p className="text-lg text-soft-gray leading-relaxed">
              Comprehensive pre-marriage verification services to ensure transparency and trust. 
              Our discreet investigations provide court-admissible documentation.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: FileText, title: "Identity & Document Verification", desc: "Complete background and credential validation" },
              { icon: Search, title: "Financial & Asset Mapping", desc: "Transparent financial disclosure and verification" },
              { icon: Shield, title: "Legal Checks & Social Footprint", desc: "Criminal history, litigation records, and social verification" },
              { icon: Eye, title: "Past Relationship Review", desc: "Discreet inquiry into previous relationships and commitments" }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
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

          <div className="bg-muted-lavender/50 rounded-lg p-6 border-l-4 border-rose-gold">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="w-5 h-5 text-rose-gold" />
              <span className="font-semibold text-charcoal">Chain-of-Custody Documentation</span>
            </div>
            <p className="text-sm text-soft-gray">
              All evidence collected follows legal protocols ensuring court admissibility and maintaining strict confidentiality.
            </p>
          </div>

          <Button className="bg-rose-gold hover:bg-rose-gold/90 text-charcoal">
            Request a Dossier
          </Button>
        </div>

        <div className="relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1731074803846-ac506947040d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMG1pbmltYWx8ZW58MXx8fHwxNzU3ODczNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Legal documents"
            className="rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-gold/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </div>
  </section>
);

const LoveArbitration: React.FC = () => (
  <section className="py-20 bg-blush/30">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl text-charcoal mb-4">The Love Arbitration</h2>
        <p className="text-lg text-soft-gray max-w-3xl mx-auto">
          When love encounters conflict, our unique arbitration process provides a confidential, 
          neutral forum combining legal framework with emotional healing.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {[
          { 
            icon: Lock, 
            title: "Confidential Process", 
            desc: "Private sessions with absolute discretion and NDA protection",
            color: "from-rose-gold to-silver-pink"
          },
          { 
            icon: Scale, 
            title: "Neutral & Legal", 
            desc: "Legally trained arbitrators ensure fair and enforceable resolutions",
            color: "from-silver-pink to-muted-lavender"
          },
          { 
            icon: Heart, 
            title: "Emotional Healing", 
            desc: "Counsellors and therapists support the emotional journey",
            color: "from-muted-lavender to-blush"
          }
        ].map((pillar, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center mx-auto mb-4`}>
                <pillar.icon className="w-8 h-8 text-charcoal" />
              </div>
              <CardTitle className="text-xl text-charcoal">{pillar.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-soft-gray">{pillar.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-cream rounded-2xl p-8 border border-rose-gold/20">
        <h3 className="text-2xl text-charcoal mb-6 text-center">Our Panel Includes</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { role: "Legal Arbitrator", desc: "Experienced matrimonial law expert", icon: Gavel },
            { role: "Licensed Counsellor", desc: "Relationship and family therapy specialist", icon: Heart },
            { role: "Cultural Advisor", desc: "Optional astrologer for traditional guidance", icon: Star }
          ].map((role, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-rose-gold/20 flex items-center justify-center mx-auto mb-3">
                <role.icon className="w-6 h-6 text-rose-gold" />
              </div>
              <h4 className="font-semibold text-charcoal mb-2">{role.role}</h4>
              <p className="text-sm text-soft-gray">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Button size="lg" className="bg-rose-gold hover:bg-rose-gold/90 text-charcoal">
          Book Arbitration Panel
        </Button>
      </div>
    </div>
  </section>
);

const LitigationSupport: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-ivory to-muted-lavender/20">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbHV4dXJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3ODczNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury legal office"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl text-charcoal">Litigation Support</h2>
            <p className="text-lg text-soft-gray leading-relaxed">
              Ethical, silent support for your legal counsel. We never replace your lawyer but strengthen 
              your case with professional evidence collection and documentation.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Evidence Collection", desc: "Systematic gathering of relevant documents and testimony" },
              { step: "02", title: "Affidavit Drafting", desc: "Professional documentation meeting court standards" },
              { step: "03", title: "Counsel Collaboration", desc: "Seamless coordination with your legal team" },
              { step: "04", title: "Court Submission", desc: "Proper filing and presentation of evidence" }
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-rose-gold text-charcoal flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  {step.step}
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">{step.title}</h4>
                  <p className="text-soft-gray text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blush/50 rounded-lg p-6 border border-rose-gold/30">
            <h4 className="font-semibold text-charcoal mb-2">Ethical Standards</h4>
            <p className="text-sm text-soft-gray">
              All our litigation support follows strict ethical guidelines, maintaining attorney-client privilege 
              and supporting the legal process with integrity.
            </p>
          </div>

          <Button className="bg-rose-gold hover:bg-rose-gold/90 text-charcoal">
            Strengthen Your Legal Case
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const AstrologyCompatibility: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-muted-lavender/30 to-blush/20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl text-charcoal mb-4">Astrology & Compatibility</h2>
        <p className="text-lg text-soft-gray max-w-3xl mx-auto">
          Traditional astrological guidance combined with modern compatibility analysis. 
          Advisory services to complement your decision-making process.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          { 
            icon: Star, 
            title: "Natal Chart Creation", 
            desc: "Detailed birth chart analysis and planetary positioning",
            features: ["Birth chart mapping", "Planetary influences", "Life path analysis"]
          },
          { 
            icon: Heart, 
            title: "Compatibility Assessment", 
            desc: "Relationship compatibility based on astrological factors",
            features: ["Partner matching", "Emotional compatibility", "Long-term prospects"]
          },
          { 
            icon: Shield, 
            title: "Cultural Insights", 
            desc: "Traditional guidance respecting family and cultural values",
            features: ["Family harmony", "Cultural alignment", "Traditional remedies"]
          }
        ].map((service, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-muted-lavender to-silver-pink flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-charcoal" />
              </div>
              <CardTitle className="text-xl text-charcoal">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-soft-gray text-center mb-4">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-rose-gold flex-shrink-0" />
                    <span className="text-soft-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-cream rounded-2xl p-8 border border-rose-gold/20 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-charcoal mb-4">Important Disclaimer</h3>
          <p className="text-soft-gray mb-6">
            Our astrological services are advisory only and not a substitute for legal or factual findings. 
            We combine traditional wisdom with modern relationship guidance.
          </p>
          <Button className="bg-rose-gold hover:bg-rose-gold/90 text-charcoal">
            Request Compatibility Session
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export { MatrimonialIntelligence, LoveArbitration, LitigationSupport, AstrologyCompatibility };