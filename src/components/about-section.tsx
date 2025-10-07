import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import {
  Heart,
  Shield,
  Scale,
  Users,
  CheckCircle,
  Award,
  Lock,
  Clock
} from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full text-primary text-sm font-medium">
                <Heart className="w-4 h-4" strokeWidth={0.5} />
                <span>About 007Phere</span>
              </div>

              <h2 className="text-4xl lg:text-5xl text-foreground leading-tight font-serif">
                India's First
                <span className="block text-primary">Matrimonial Support Firm</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a specialized firm dedicated to protecting
                trust, dignity, and legal truth in matrimony through confidential intelligence services
                and compassionate support.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Absolute confidentiality in all operations",
                "Court-admissible documentation standards",
                "Licensed legal and counseling professionals"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={0.5} />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-secondary/50 rounded-2xl p-6 border-l-4 border-primary">
              <h4 className="font-semibold text-primary mb-2">Our Mission</h4>
              <p className="text-muted-foreground italic">
                "To create a world where love thrives on truth, trust, and dignity —
                providing the intelligence and support needed for healthy, lasting marriages."
              </p>
            </div>
          </div>

          <div className="relative">
            <img src={`${import.meta.env.BASE_URL}images/about-2.jpg`} alt="About Us" className="rounded-3xl shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: Shield,
              title: "Privacy First",
              desc: "Your confidentiality is our foundation",
              // stat: "100%"
            },
            {
              icon: Scale,
              title: "Legal Standards",
              desc: "Court-admissible documentation",
              // stat: "ISO 27001"
            },
            {
              icon: Heart,
              title: "Compassionate Care",
              desc: "Dignity in every interaction",
              // stat: "24/7"
            },
            {
              icon: Users,
              title: "Expert Team",
              desc: "Licensed professionals only",
              // stat: "Certified"
            }
          ].map((value, index) => (
            <Card key={index} className="text-center border border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" strokeWidth={0.5} />
                </div>
                {/* <div className="text-2xl font-bold text-primary">{value.stat}</div> */}
                <h4 className="font-semibold text-foreground">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Excellence */}
        <div className="bg-card border border-border rounded-3xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-foreground mb-4 font-serif">
              Our Expert Team
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A carefully assembled team of legal experts, licensed counselors,
              and trained investigators committed to your matrimonial success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Legal Experts",
                desc: "Matrimonial law specialists with court experience",
                credentials: "Bar certified lawyers"
              },
              {
                icon: Heart,
                title: "Licensed Counselors",
                desc: "Relationship therapy and family mediation experts",
                credentials: "Certified therapists"
              },
              {
                icon: Shield,
                title: "Intelligence Professionals",
                desc: "Trained investigators specializing in matrimonial research",
                credentials: "Licensed investigators"
              }
            ].map((role, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-primary/30 rounded-3xl flex items-center justify-center">
                  <role.icon className="w-10 h-10 text-primary" strokeWidth={0.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{role.title}</h4>
                  <p className="text-muted-foreground mb-3">{role.desc}</p>
                  <div className="inline-flex items-center space-x-2 bg-secondary px-3 py-1 rounded-full">
                    <Award className="w-4 h-4 text-primary" strokeWidth={0.5} />
                    <span className="text-sm text-primary">{role.credentials}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 bg-secondary px-8 py-4 rounded-2xl border border-border">
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-primary" strokeWidth={0.5} />
              <span className="text-sm font-medium text-foreground">NDA Protected</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" strokeWidth={0.5} />
              <span className="text-sm font-medium text-foreground">ISO 27001 Certified</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary" strokeWidth={0.5} />
              <span className="text-sm font-medium text-foreground">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;