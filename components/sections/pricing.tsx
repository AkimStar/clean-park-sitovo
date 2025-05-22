"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ShowerHead, Droplets, Sparkle, SprayCan, Star } from "lucide-react";

const services = [
  { icon: ShowerHead, name: "Водоструйка", time: "2:30 мин" },
  { icon: Droplets, name: "Вода без петна", time: "2:10 мин" },
  { icon: SprayCan, name: "Активна пяна", time: "1:30 мин" },
  { icon: Star, name: "Вакса", time: "2:00 мин" },
  { icon: Sparkle, name: "Безконтактно", time: "1:30 мин" }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Цени и програми
          </motion.h2>
        </div>
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-2 md:gap-12">
          {/* Left: Section Description */}
          <div className="flex-1 max-w-xl mx-auto md:mx-0 text-left">
            <motion.p
              className="text-base md:text-lg text-[#4F4F4F] mb-3 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              В нашата автомивка работим с жетонна система, която ви дава максимална гъвкавост и контрол върху времето и услугите, които използвате. Всеки жетон струва 2 лв и може да бъде използван за различни програми според вашите нужди.
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-[#4F4F4F] mb-3 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Изберете желаната програма и добавете повече жетони за по-дълго и по-детайлно почистване. Нашите услуги включват висококачествено измиване, безконтактно почистване, вакса и още много други, за да осигурим най-доброто за вашия автомобил. Доверете се на нашия опит и модерно оборудване за блестящи резултати всеки път.
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-[#4F4F4F] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Нашият екип е винаги на разположение да ви помогне с избор на програма и да отговори на всички ваши въпроси. Стремим се да осигурим бързо, качествено и удобно обслужване, за да останете доволни след всяко посещение. Ако имате специални изисквания или нужда от съвет, не се колебайте да се обърнете към нас. Вашето удовлетворение е наш приоритет и ние се стремим да надминем вашите очаквания при всяко посещение.
            </motion.p>
          </div>

          {/* Right: Timeline */}
          <div className="flex-1 max-w-lg relative mt-10 md:mt-0">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#ffe001]/60 z-0" aria-hidden="true"></div>
            <ul className="space-y-12">
              {services.map(({ icon: Icon, name, time }, idx) => (
                <motion.li
                  key={name}
                  className="relative flex items-center z-10 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  {/* Circle with icon */}
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-7 h-7 rounded-full bg-white border-2 border-[#ffe001] flex items-center justify-center shadow group-hover:shadow-lg transition">
                      <Icon className="w-5 h-5 text-[#ffe001]" />
                    </div>
                    {idx !== services.length - 1 && (
                      <div className="w-px flex-1 bg-[#ffe001]/60" style={{ minHeight: '36px', marginTop: '2px' }} />
                    )}
                  </div>
                  {/* Service info */}
                  <div className="flex flex-col text-left pl-2">
                    <span className="text-base md:text-lg font-semibold text-[#34495e]">{name}</span>
                    <span className="text-[#ffe001] text-sm md:text-base font-medium">{time}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}