"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Award, Coffee } from "lucide-react";

export default function TrustBadges() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge 1 */}
          <motion.div variants={itemVariants}>
            <Card className="h-full border border-gray-100 shadow-md hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="w-14 h-14 rounded-full bg-[#0C4DF4]/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-[#0C4DF4]" />
                </div>
                <CardTitle className="text-xl text-[#1A1A1A]">Иновативна Техника</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[#4F4F4F]">
                  Най-модерни уреди за безупречно почистване.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Badge 2 */}
          <motion.div variants={itemVariants}>
            <Card className="h-full border border-gray-100 shadow-md hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="w-14 h-14 rounded-full bg-[#0C4DF4]/10 flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-[#0C4DF4]" />
                </div>
                <CardTitle className="text-xl text-[#1A1A1A]">Перфектно Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[#4F4F4F]">
                  Резултатите говорят сами по себе си – без компромис.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Badge 3 */}
          <motion.div variants={itemVariants}>
            <Card className="h-full border border-gray-100 shadow-md hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="w-14 h-14 rounded-full bg-[#0C4DF4]/10 flex items-center justify-center mb-4">
                  <Coffee className="w-7 h-7 text-[#0C4DF4]" />
                </div>
                <CardTitle className="text-xl text-[#1A1A1A]">Кафе и Комфорт</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[#4F4F4F]">
                  Зона за отдих, докато автомобилът ви блести от чистота.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}