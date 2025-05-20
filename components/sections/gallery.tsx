"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/1.jfif", title: "Измиване на трактор" },
  { src: "/2.jfif", title: "Зона за кафе и отдих" },
  { src: "/3.jfif", title: "Активна пяна" },
  { src: "/4.jfif", title: "Големи машини" },
  { src: "/5.jfif", title: "Кафе и напитки" },
  { src: "/6.jfif", title: "Cherry red active foam" },
];

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openImage = (idx: number) => {
    setCurrent(idx);
    setOpen(true);
  };
  const closeImage = () => setOpen(false);
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1a1a1a] text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Галерия
        </motion.h2>
        <motion.p
          className="text-lg text-[#4F4F4F] text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Разгледайте снимки от нашата автомивка, зоната за кафе и услугите, които предлагаме. Кликнете върху изображение, за да го видите в голям размер.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.slice(0, 3).map((img, idx) => (
            <motion.div
              key={img.src}
              className="relative rounded-lg overflow-hidden shadow group cursor-pointer aspect-[4/3] bg-gray-100"
              whileHover={{ scale: 1.03 }}
              onClick={() => openImage(idx)}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-all duration-300 group-hover:brightness-90"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold drop-shadow-lg">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {images.slice(3, 6).map((img, idx) => (
            <motion.div
              key={img.src}
              className="relative rounded-lg overflow-hidden shadow group cursor-pointer aspect-[4/3] bg-gray-100"
              whileHover={{ scale: 1.03 }}
              onClick={() => openImage(idx + 3)}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-all duration-300 group-hover:brightness-90"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold drop-shadow-lg">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImage}
            >
              <motion.div
                className="relative max-w-2xl w-full mx-4"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/90 p-2 rounded-full text-white"
                  onClick={closeImage}
                  aria-label="Затвори"
                >
                  <X className="w-6 h-6" />
                </button>
                <button
                  className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white"
                  onClick={prevImage}
                  aria-label="Предишна снимка"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white"
                  onClick={nextImage}
                  aria-label="Следваща снимка"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={images[current].src}
                    alt={images[current].title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-2 px-4">
                    <span className="text-white text-lg font-semibold">{images[current].title}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
