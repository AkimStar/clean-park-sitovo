"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Award, Coffee } from "lucide-react";
import Image from "next/image";

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
  e.preventDefault();
  const element = document.getElementById(targetId);
  const navbarHeight = 80;
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-0 md:py-0 overflow-hidden">
      {/* Full background image */}
      <Image
        src="/hero1.jpeg"
        alt="Модерна автомивка"
        fill
        className="object-cover w-full h-full absolute inset-0 z-0"
        priority
      />
      {/* Slight dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent z-10" />

      {/* Main hero content centered */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
            Автомивка на самообслужване{' '}
            <span className="bg-gradient-to-r from-white to-[#0c7ded] bg-clip-text text-transparent">
              Clean Park
            </span>
          </h1>
          <p className="text-lg text-white drop-shadow-md">
            Модерна и удобна автомивка със зона за кафе, където сами почиствате автомобила си с най-съвременно оборудване.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 justify-center">
            <Button className="bg-[#0C4DF4] hover:bg-[#0A3DD2] text-white px-6 py-2 text-lg" asChild>
              <a href="#about" onClick={e => handleSmoothScroll(e, "about")}>За нас</a>
            </Button>
            <Button variant="outline" className="border-[#0C4DF4] text-[#0C4DF4] hover:bg-[#0C4DF4]/10 px-6 py-2 text-lg" asChild>
              <a href="#contact" onClick={e => handleSmoothScroll(e, "contact")}>Контакти</a>
            </Button>
          </div>
        </motion.div>
        {/* Trust Badges inside hero viewport */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-24 w-full"
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
                Място за отдих, кафе и зарядна станция за електромобили.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
