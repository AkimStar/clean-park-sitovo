"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import Image from "next/image";

// Service data with images
const services = [
  {
    id: "foam-washing",
    name: "Миене с пяна",
    description: "Мощна почистваща пяна, която премахва и най-упоритите замърсявания. Формулата ни не уврежда боята и е щадяща към околната среда.",
    image: "https://images.unsplash.com/photo-1616966376407-99ac7ba4db10?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pressure-rinse",
    name: "Изплакване под налягане",
    description: "Прецизна система за изплакване под високо налягане, която отстранява цялата пяна и замърсявания, без да оставя следи по повърхността на автомобила.",
    image: "https://images.unsplash.com/photo-1520587929023-4042a9254714?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "vacuum",
    name: "Високомощна прахосмукачка",
    description: "Професионална прахосмукачка с различни накрайници за перфектно почистване на интериора, включително и труднодостъпни места.",
    image: "https://images.unsplash.com/photo-1620410602130-6f23e19c4206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cafe",
    name: "Зона за кафе",
    description: "Уютна зона за изчакване с висококачествено кафе, напитки и лека храна. Перфектно място за отдих, докато автомобилът ви се суши.",
    image: "https://images.unsplash.com/photo-1599599545579-5753dbcf1282?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "promo",
    name: "Промоционални пакети",
    description: "Специални комбинирани оферти за пълно почистване на автомобила на преференциални цени. Проверете нашите промоции на място.",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

export default function ServicesSection() {
  // Track the open item to show the correct image
  const [openItem, setOpenItem] = useState<string | null>(null);
  
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Услуги, които предлагаме
          </h2>
          <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
            Нашата автомивка предлага пълно оборудване за цялостно почистване на вашия автомобил отвън и отвътре.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Accordion 
              type="single" 
              collapsible
              onValueChange={(value) => setOpenItem(value)}
              className="w-full"
            >
              {services.map((service) => (
                <AccordionItem 
                  key={service.id} 
                  value={service.id}
                  className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-[#F0F8FC]/50 transition-colors">
                    <span className="text-xl font-medium text-[#1A1A1A]">{service.name}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-[#4F4F4F]">{service.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            {services.map((service) => (
              <div 
                key={service.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  openItem === service.id ? "opacity-100" : "opacity-0"
                }`}
                style={{ display: openItem === service.id ? "block" : "none" }}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold">{service.name}</h3>
                </div>
              </div>
            ))}
            
            {/* Default image when no accordion is open */}
            {!openItem && (
              <div className="absolute inset-0">
                <Image
                  src={services[0].image}
                  alt="Услуги в автомивката"
                  fill
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-xl font-medium px-6 text-center">
                    Изберете услуга, за да видите повече информация
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}