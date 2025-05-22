"use client";

import { motion } from "framer-motion";
import { CreditCard, Droplets, Car, BadgePlus } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: CreditCard,
    title: "Въведете монети или карта",
    description: "Зареждате кредит за използване на уредите."
  },
  {
    id: 2,
    icon: Droplets,
    title: "Изберете програма",
    description: "Пяна, изплакване, прахосмукачка и други."
  },
  {
    id: 3,
    icon: Car,
    title: "Измийте и се насладете",
    description: "Почистете автомобила и се отпуснете с чаша кафе."
  }
];

export default function WorkProcessSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section className="py-16 bg-[#F0F8FC]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Как работи автомивката
          </h2>
          <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
            Следвайте тези лесни стъпки, за да получите перфектно чист автомобил
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden group border-t-4 border-[#ffe001]"
            >
              {/* Step Number Badge */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#ffe001] text-[#1A1A1A] flex items-center justify-center font-bold text-xl z-10 shadow-[0_2px_8px_#ffe00133]">
                {String(step.id).padStart(2, '0')}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#ffe001]/20 flex items-center justify-center mb-6 text-[#ffe001] border-2 border-[#ffe001] shadow-[0_0_0_4px_#ffe00122]">
                <step.icon className="w-8 h-8" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{step.title}</h3>
              <p className="text-[#4F4F4F]">{step.description}</p>
              
              {/* Decorative Element */}
              <div className="absolute right-0 bottom-0 w-32 h-32 opacity-5 transform rotate-12 translate-x-8 translate-y-8">
                <step.icon className="w-full h-full" />
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C4DF4]/0 to-[#0C4DF4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}