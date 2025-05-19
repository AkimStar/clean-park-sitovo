"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:py-32 overflow-hidden">
      {/* Background with light blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F8FC] to-white -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-6 md:pr-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1A1A1A]">
              Професионална самообслужваща автомивка и кафе
            </h1>
            
            <p className="text-lg text-[#4F4F4F]">
              Модерна и удобна автомивка със зона за кафе, където сами почиствате автомобила си с най-съвременно оборудване.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                className="bg-[#0C4DF4] hover:bg-[#0A3DD2] text-white px-6 py-2 text-lg"
                asChild
              >
                <a href="#about">За нас</a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-[#0C4DF4] text-[#0C4DF4] hover:bg-[#0C4DF4]/10 px-6 py-2 text-lg"
                asChild
              >
                <a href="#contact">Контакти</a>
              </Button>
            </div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Модерна автомивка"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0C4DF4]/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}