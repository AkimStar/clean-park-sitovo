"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

function Counter({ value, suffix = "", label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    if (isInView) {
      const duration = 2000; // 2 seconds
      
      const easeOutQuad = (t: number) => t * (2 - t);
      
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const currentCount = Math.floor(easedProgress * value);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animateCount);
        } else {
          setCount(value);
        }
      };
      
      animationFrame = requestAnimationFrame(animateCount);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value]);
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-lg text-white/80">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#1A2A63]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16"
        >
          <Counter value={12025} label="Автомобили измити" />
          <Counter value={1050} label="Доволни клиенти" />
          <Counter value={100} suffix="%" label="Гаранция за качество" />
        </motion.div>
      </div>
    </section>
  );
}