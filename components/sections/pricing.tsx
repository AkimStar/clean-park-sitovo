"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: "basic",
    name: "Бързо измиване",
    price: "5 лв",
    description: "Идеално за почистване на лека мръсотия",
    features: [
      "Изплакване под налягане",
      "Безконтактно плащане",
      "Бърз процес (5 минути)",
    ],
    popular: false
  },
  {
    id: "standard",
    name: "Пълна програма",
    price: "8 лв",
    description: "Най-използваната програма за почистване",
    features: [
      "Пяна + изплакване + восък",
      "Високомощна прахосмукачка",
      "Двойно измиване (10 минути)",
    ],
    popular: true
  },
  {
    id: "premium",
    name: "Премиум почистване",
    price: "12 лв",
    description: "Цялостно почистване с екстри",
    features: [
      "Всички услуги + ароматизатор",
      "Подарък кафе",
      "Пълна програма (15 минути)",
    ],
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Изберете своя пакет
          </h2>
          <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
            Предлагаме различни пакети според вашите нужди и бюджет
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className={`h-full flex flex-col ${
                plan.popular 
                  ? "border-[#0C4DF4] shadow-lg shadow-[#0C4DF4]/10" 
                  : "border-gray-200"
              }`}>
                {plan.popular && (
                  <div className="bg-[#0C4DF4] text-white text-center py-1 text-sm font-medium">
                    Най-популярен
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-[#1A1A1A]">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-[#1A1A1A]">{plan.price}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-[#0C4DF4] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-[#4F4F4F]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-[#0C4DF4] hover:bg-[#0A3DD2]" 
                        : "border-[#0C4DF4] text-[#0C4DF4] hover:bg-[#0C4DF4]/10"
                    }`}
                  >
                    Изберете
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}