"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-[#ffe001] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Абонирайте се за нашия бюлетин
            </h2>
            <p className="mt-4 text-lg text-[#4F4F4F]">
              Получавайте новини и оферти директно по имейл.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row gap-4"
          >
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ffe001] w-5 h-5" />
              <Input 
                type="email" 
                placeholder="Вашият имейл" 
                className="pl-10 pr-4 py-6 bg-white text-[#1A2A63] w-full outline-none focus:ring-2 focus:ring-[#ffe001]" 
              />
            </div>
            <Button className="bg-[#1A1A1A] hover:bg-[#ffe001]/90 text-[#ffe001] font-medium py-6 px-8">
              Абонирай се
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mt-6 text-sm text-[#4F4F4F]/60"
          >
            <p>
              Абонирайки се, се съгласявате с нашите условия за ползване и политика за поверителност.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}