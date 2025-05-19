"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Какви са методите за плащане?",
    answer: "Приемаме разнообразни методи за плащане за ваше удобство - монети, банкови карти и безконтактно плащане чрез NFC. Всичките ни машини са оборудвани със съвременни платежни терминали."
  },
  {
    question: "Работите ли 24/7?",
    answer: "Да, нашата автомивка е отворена 24 часа в денонощието, 7 дни в седмицата. Може да посетите обекта по всяко време, което е удобно за вас, включително нощем с добро осветление и видеонаблюдение."
  },
  {
    question: "Има ли зони за кафе?",
    answer: "Да, разполагаме с уютна зона за кафе и напитки, където можете да се отпуснете, докато чакате автомобила си да изсъхне или докато вашите спътници използват услугите на автомивката."
  },
  {
    question: "Подходящо ли е за големи автомобили?",
    answer: "Определено! Нашите боксове са проектирани да поберат всички видове леки автомобили, SUV-и и ванове. Разполагаме с достатъчно пространство и за по-големи превозни средства като микробуси."
  },
  {
    question: "Безопасно ли е за нови коли?",
    answer: "Абсолютно. Използваме само висококачествени, щадящи препарати, които са безопасни за всички видове бои и покрития. Нашите машини за почистване са регулирани за оптимално налягане, което ефективно почиства без да нанася щети."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Често задавани въпроси
          </h2>
          <p className="mt-4 text-lg text-[#4F4F4F]">
            Отговори на най-често задаваните въпроси от нашите клиенти
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-[#F0F8FC]/50 transition-colors text-left">
                  <span className="text-lg font-medium text-[#1A1A1A]">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-[#4F4F4F]">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}