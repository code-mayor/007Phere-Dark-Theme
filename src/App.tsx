import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavigation from './components/main-navigation';
import HeroSection from './components/hero-section';
import ServicesOverview from './components/services-overview';
import AboutSection from './components/about-section';
import ContactSection from './components/contact-section';
import Footer from './components/footer';
import { Button } from './components/ui/button';
import { Phone } from 'lucide-react';

// Import admin components
import AdminLogin from './components/admin/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';

// Main Landing Page Component (your existing App logic)
function LandingPage() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  // Handle scroll for floating button
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navigation
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home', 'services', 'about', 'contact'
      ];

      const currentPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && currentPos >= section.offsetTop) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background dark overflow-x-hidden w-full max-w-full">
      {/* Navigation */}
      <MainNavigation
        currentSection={currentSection}
        onSectionChange={scrollToSection}
      />

      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesOverview />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Call Button */}
      {showFloatingButton && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl rounded-full h-16 w-16 p-0 hover:scale-110 transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            <Phone className="w-6 h-6" strokeWidth={0.5} />
          </Button>
          <div className="absolute -top-12 right-0 bg-card text-card-foreground px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none border border-border">
            Get started
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="space-y-3">
          {[
            { id: 'home', label: 'Home' },
            { id: 'services', label: 'Services' },
            { id: 'about', label: 'About' },
            { id: 'contact', label: 'Contact' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 block ${currentSection === section.id
                ? 'bg-primary scale-125 shadow-lg shadow-primary/50'
                : 'bg-muted-foreground/30 hover:bg-primary/60'
                }`}
              title={section.label}
            />
          ))}
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
    </div>
  );
}

// Main App Component with Routing
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Admin login (public) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin dashboard (protected) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Catch all - redirect to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}