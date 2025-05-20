"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users } from "lucide-react";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section id="about" className="py-16 bg-[#F0F8FC]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-xl group"
          >
            <Image
              src="https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Самообслужваща се автомивка"
              fill
              className="object-cover transition-transform transition-filter duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
            {/* Blue tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0C4DF4]/30 to-transparent mix-blend-overlay pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />
          </motion.div>
          
          {/* Right Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Самообслужване и комфорт на едно място
            </h2>
            
            <p className="text-lg text-[#4F4F4F]">
              Нашата автомивка предлага най-съвременно оборудване за самообслужване, което ви позволява да почистите автомобила си до блясък. Докато чакате или след като приключите, може да се насладите на ароматно кафе в уютната ни зона за отдих.
            </p>
            
            <ul className="space-y-3">
              {["24/7 достъп", "Безконтактно плащане", "Зона за кафе и напитки", "Екологични почистващи продукти"].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="flex-shrink-0 w-6 h-6 text-[#0C4DF4]" />
                  <span className="text-[#4F4F4F]">{item}</span>
                </li>
              ))}
            </ul>
            
            {/* Customer Satisfaction Badge */}
            <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100 mt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(id => (
                  <div key={id} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden flex items-center justify-center">
                    <Users className="w-4 h-4 text-gray-500" />
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#1A1A1A] font-medium">100% удовлетвореност</span>
                <button
                  type="button"
                  className="bg-[#FFD600] text-[#1A1A1A] text-xs px-2 py-1 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-[#0C4DF4]/50 transition"
                  onClick={() => {
                    const el = document.getElementById('testimonials');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Доказано
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}