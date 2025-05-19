"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-[#F0F8FC]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Как да ни намерите
          </h2>
          <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
            Посетете ни на удобно място в центъра на Ситово
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <MapPin className="w-6 h-6 text-[#0C4DF4]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#1A1A1A]">Адрес</h3>
                <p className="text-[#4F4F4F]">ул. Добруджа 9, Ситово, България</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Phone className="w-6 h-6 text-[#0C4DF4]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#1A1A1A]">Телефон</h3>
                <p className="text-[#4F4F4F]">0888 047 555</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Mail className="w-6 h-6 text-[#0C4DF4]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#1A1A1A]">Имейл</h3>
                <p className="text-[#4F4F4F]">info@asnet.bg</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">Работно време</h3>
              <p className="text-[#4F4F4F]">Отворено 24/7</p>
              <p className="text-[#4F4F4F]">За въпроси и поддръжка: 08:00 - 20:00</p>
            </div>
          </motion.div>
          
          {/* Right Column - Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1868070194844!2d27.0516199!3d44.0467346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40af8b6e438c7e05%3A0x8a1be39dcb668fc6!2z0YPQuy4g4oCe0JTQvtCx0YDRg9C00LbQsOKAnCA5LCA3NTUwINCh0LjRgtC-0LLQviDQkdGD0YDQs9Cw0YE!5e0!3m2!1sbg!2sbg!4v1712182663916!5m2!1sbg!2sbg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}