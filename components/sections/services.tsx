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
    name: "Измиване с активна пяна",
    description: "Мощна почистваща пяна, която премахва и най-упоритите замърсявания. Формулата ни не уврежда боята и е щадяща към околната среда.",
    image: "https://images.unsplash.com/photo-1645966923376-33eaf7007665?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "pressure-rinse",
    name: "Изплакване под налягане",
    description: "Прецизна система за изплакване под високо налягане, която отстранява цялата пяна и замърсявания, без да оставя следи по повърхността на автомобила.",
    image: "https://images.unsplash.com/photo-1605164599894-ca98960d41b6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "vacuum",
    name: "Високомощна прахосмукачка",
    description: "Професионална прахосмукачка с различни накрайници за перфектно почистване на интериора, включително и труднодостъпни места.",
    image: "/vacuum.jfif"
  },
  {
    id: "cafe",
    name: "Зона за кафе",
    description: "Уютна зона за изчакване с висококачествено кафе, напитки и лека храна. Перфектно място за отдих, докато автомобилът ви се суши.",
    image: "https://images.unsplash.com/photo-1506372023823-741c83b836fe?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "promo",
    name: "Промоционални пакети",
    description: "Специални комбинирани оферти за пълно почистване на автомобила на преференциални цени. Проверете нашите промоции на място.",
    image: "/card.jfif"
  },
  {
    id: "ev-charging",
    name: "Зарядна станция за електромобили",
    description: "Модерна зарядна станция, подходяща за всички видове електромобили. Бързо и удобно зареждане, докато се наслаждавате на кафе или почиствате автомобила си. Разполагаме с универсални конектори и безопасна среда за зареждане.",
    image: "/station.jfif"
  },
  {
    id: "easypay",
    name: "Изипей каса",
    description: "Удобна Изипей каса за бързо и лесно плащане на битови сметки, услуги и други задължения. Спестете време и се възползвайте от възможността да платите на място, докато се грижите за автомобила си.",
    image: "/easypay.jpg"
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
        
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
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
            className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg group flex-1"
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
                  className="object-cover transition-transform transition-filter duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold">{service.name}</h3>
                </div>
              </div>
            ))}
            
            {/* Default image when no accordion is open */}
            {!openItem && (
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1641494639075-5571f7ef486b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Услуги в автомивката"
                  fill
                  className="object-cover opacity-70 transition-transform transition-filter duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />
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