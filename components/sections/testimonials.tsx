"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Боран Динчер",
    role: "Клиент от 2 години",
    content: "След няколко ползвания на автомивката на самообслужване АСНЕТ, мога с увереност да кажа, че това е една от най-добрите автомивки в радиус от 25-30 километра.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWNoAEHyuB1OrYq1aC_w6OG3juW4pmIxcSpH_v7--gaLqV72pqX=w72-h72-p-rp-mo-ba6-br100"
  },
  {
    id: 2,
    name: "Меди Джошкун",
    role: "Доволен клиент",
    content: "Има всичко нужно за почистване на автомобила, зарядна станция за електрически автомобили и кафе.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocIOLQE4opa7bs63mjdb7DLCjySOG50q3TM0z0TXzCXj_SBxYg=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: 3,
    name: "Ивелин Радев",
    role: "Редовен клиент",
    content: "Чудесно изпълнение!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocK-isY6mQkXIZzqpbII8c6SPDFxcOcCO8LPg9TvIl0L6MgS=w72-h72-p-rp-mo-ba4-br100"
  },
  {
    id: 4,
    name: "Д-р Владимир Солаков",
    role: "Ветеринарен лекар",
    content: "Отлично направено и удобно за работа съоръжение. Препоръчвам!",
    rating: 4,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjV7ZL9TUyQjCTRg_Yyft0S64qyMUF7bmjzuAIAd4D7ywNeFctGQPg=w72-h72-p-rp-mo-ba5-br100"
  },
  {
    id: 5,
    name: "Ергин Ахмед",
    role: "Доволен клиент",
    content: "Открита, да ни е честита.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUz3MRWz6_ZyHkAOorANYPbRlRROcFCVgOnQxikfG1QxNfR6Nlo=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: 6,
    name: "Георги Иванов",
    role: "Доволен клиент",
    content: "Изключително чисто и удобно място. Персоналът е винаги учтив и отзивчив. Препоръчвам на всички!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    id: 7,
    name: "Стефан Петров",
    role: "Редовен клиент",
    content: "Винаги оставам доволен от услугите. Бързо, лесно и качествено обслужване.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2); // width of one set
    }
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-[#F8FAFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Какво казват нашите клиенти
          </h2>
          <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
            Отзивите от клиентите са нашата най-добра реклама
          </p>
        </motion.div>
        
        {/* Moving testimonials */}
        <div ref={containerRef} className="w-full overflow-hidden">
          <motion.div
            className="flex space-x-6"
            animate={{ x: [0, width ? -width : 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }}
            style={{ x: 0 }}
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <Card key={testimonial.id + '-' + idx} className="w-[350px] flex-shrink-0 bg-white/80 backdrop-blur-sm border border-gray-100 shadow-md">
                <CardHeader className="pb-2 pt-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1A1A1A]">{testimonial.name}</h3>
                        <p className="text-sm text-[#4F4F4F]">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 fill-[#FFD600] text-[#FFD600]" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4F4F4F]">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}