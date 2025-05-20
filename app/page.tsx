"use client";
import HeroSection from '@/components/sections/hero';
import IntroSection from '@/components/sections/intro';
import ServicesSection from '@/components/sections/services';
import StatsSection from '@/components/sections/stats';
import WorkProcessSection from '@/components/sections/work-process';
import PricingSection from '@/components/sections/pricing';
import TestimonialsSection from '@/components/sections/testimonials';
import FaqSection from '@/components/sections/faq';
import GallerySection from '@/components/sections/gallery';
import ContactSection from '@/components/sections/contact';
import NewsletterSection from '@/components/sections/newsletter';

export default function Home() {
  return (
    <>
      <HeroSection />

      <IntroSection />
      <ServicesSection />
      <StatsSection />
      <WorkProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <GallerySection />
      <ContactSection />
      <NewsletterSection />
    </>
  );
}