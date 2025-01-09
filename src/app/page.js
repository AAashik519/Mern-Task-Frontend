"use client"
import { useEffect, useState } from 'react';
import DigitalPartner from '@/components/digital-partner';
import { Header } from '@/components/header';
import HorizontalScrollSection from '@/components/horizontal-scroll';
import PartnersSection from '@/components/partners-section';
import ServicesSection from '@/components/service-section';
import StatsSection from '@/components/starts-section';
import { Button } from '@/components/ui/button';
import Loader from '@/components/loader'; // Import the loader component

export default function Home() {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true); // Initially loader is visible
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Hide the loader after a delay (for example, 3 seconds)
    setTimeout(() => {
      setIsLoaderVisible(false); // Hide the loader
      setIsContentVisible(true); // Show the content
    }, 3000); // Set the duration of the loader animation
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Show loader initially */}
      {isLoaderVisible && <Loader />}

      {/* Main Content */}
      <Header />
      <main className={`mx-auto max-w-[1200px] px-6 pt-32 ${isContentVisible ? 'fade-in' : ''}`}>
        <section>
          <h1 className="mb-24 text-6xl font-bold leading-tight tracking-tighter md:text-8xl">
            Crafting <span className="flowing-gradient">Digital</span>
            <br />
            Experiences
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <span className="text-xl font-bold">500</span>
              </div>
              <span className="text-xl text-gray-600">Satisfied Customers</span>
            </div>
            <div className="max-w-lg flex items-center gap-4">
              <p className="text-xl text-gray-900">
                We build engaging websites, brands & innovative e-commerce solutions.
              </p>
              <Button className="w-[500px] h-16 text-xl rounded-full bg-[#6366F1] text-white hover:bg-[#6366F1]/90">
                Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>

      <HorizontalScrollSection />
      <ServicesSection />
      <DigitalPartner />
      <PartnersSection />
      <StatsSection />
    </div>
  );
}
