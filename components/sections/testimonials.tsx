"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Димитър Иванов",
    role: "Клиент от 2 години",
    content: "Изключително удобно и чисто място. Винаги използвам тази автомивка. Резултатите са перфектни!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Мария Петрова",
    role: "Доволен клиент",
    content: "Качеството на измиване е невероятно, а зоната за кафе е перфектен бонус. Препоръчвам!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Георги Николов",
    role: "Редовен клиент",
    content: "Автомивката разполага с най-добрите машини. Колата ми винаги изглежда като нова след измиване тук.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "Петя Тодорова",
    role: "Нов клиент",
    content: "Първият път използвах услугите и останах изключително доволна. Определено ще се върна отново!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 5,
    name: "Борис Стоянов",
    role: "Бизнес клиент",
    content: "Поддържам фирмения автопарк чист благодарение на тази автомивка. Бързо и ефективно обслужване!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
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
    <section className="py-16 bg-[#F0F8FC] overflow-hidden">
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