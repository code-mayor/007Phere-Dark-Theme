import React from 'react';
import { Heart, Phone, Mail, MapPin, Instagram, Youtube, Linkedin, X, Shield, Lock } from 'lucide-react';
import Logo from "../assets/logo.svg?react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-16 w-full max-w-full">
        <div className="grid lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="min-w-0">
                <Logo className="block w-24" aria-label="007Phere Logo" />
                <p className="text-xs text-muted-foreground truncate hidden sm:block">Matrimonial Support</p>
              </div>
            </div>

            <div className="max-w-md space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                India's first dedicated matrimonial intelligence firm, providing confidential
                support services with absolute discretion and compassionate care.
              </p>

              <div className="bg-secondary rounded-xl p-4 border-l-4 border-primary">
                <p className="text-primary font-medium text-sm">
                  "Love needs truth to thrive. We protect both."
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Connect with us:</span>
              <div className="flex space-x-3">
                {[
                  { icon: Instagram, href: "https://instagram.com/007Phere", label: "Instagram" },
                  { icon: Linkedin, href: "https://linkedin.com/company/007phere", label: "LinkedIn" },
                  { icon: X, href: "https://x.com/007Phere", label: "Twitter" },
                  { icon: Youtube, href: "https://youtube.com/007Phere", label: "YouTube" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-secondary hover:bg-muted flex items-center justify-center transition-colors duration-300"
                  >
                    <social.icon className="w-4 h-4 text-primary" strokeWidth={0.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground font-serif">Services</h3>
            <nav className="space-y-3">
              {[
                "Matrimonial Intelligence",
                "Love Arbitration",
                "Counselling & Care",
                "Astrology & Compatibility",
                "Honeymoon Planning",
                "Litigation Support"
              ].map((service) => (
                <a
                  key={service}
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground font-serif">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={0.5} />
                <div>
                  <p className="text-sm font-medium text-foreground">24/7 Confidential</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={0.5} />
                <div>
                  <p className="text-sm font-medium text-foreground">Secure Email</p>
                  <p className="text-sm text-muted-foreground">hello@007phere.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={0.5} />
                <div>
                  <p className="text-sm font-medium text-foreground">Office</p>
                  <p className="text-sm text-muted-foreground">Delhi</p>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="pt-4 border-t border-border">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground">Legal</h4>
                <nav className="space-y-2">
                  {[
                    "Privacy Policy",
                    "Terms of Service",
                    "Confidentiality Agreement"
                  ].map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      {/* <div className="border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 py-8 w-full max-w-full">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, title: "100% Confidential", desc: "Your privacy protected" },
              { icon: Lock, title: "Court Admissible", desc: "Legal standard docs" },
              { icon: Heart, title: "Compassionate Care", desc: "Dignity in every interaction" },
              { icon: Phone, title: "24/7 Available", desc: "Emergency support" }
            ].map((badge, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <badge.icon className="w-5 h-5 text-primary" strokeWidth={0.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{badge.title}</p>
                  <p className="text-xs text-muted-foreground">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-6 w-full max-w-full">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 007Phere. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Licensed matrimonial intelligence and support services.
              </p>
            </div>

            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span>🇮🇳 Operational in India</span>
              <span>•</span>
              <span>Licensed & Certified</span>
              <span>•</span>
              {/* <span>ISO 27001 Compliant</span> */}
            </div>
          </div>
        </div>
      </div>

      {/* Final Confidentiality Notice */}
      <div className="bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4 w-full max-w-full">
          <div className="flex items-center justify-center space-x-3">
            <Lock className="w-4 h-4 text-primary" strokeWidth={0.5} />
            <p className="text-xs text-foreground text-center">
              <strong>Confidentiality Promise:</strong> All client interactions are protected under strict privacy protocols.
              Your trust is our foundation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;