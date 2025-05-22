import Link from "next/link";
import Image from "next/image";
import { Car, Facebook, Instagram, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#ffe001] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Clean Park Logo" width={64} height={64} priority />
            </Link>
            <p className="text-[#4F4F4F] max-w-xs">
            Професионална автомивка на самообслужване със зарядна станция за електромобили и зона за кафе и студени напитки.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#fff7cc] hover:bg-[#ffe001]/80 p-2 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#fff7cc] hover:bg-[#ffe001]/80 p-2 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Бързи връзки</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#4F4F4F] hover:text-white transition-colors">
                  Начало
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-[#4F4F4F] hover:text-white transition-colors">
                  За нас
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#4F4F4F] hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-[#4F4F4F] hover:text-white transition-colors">
                  Цени
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-[#4F4F4F] hover:text-white transition-colors">
                  Галерия
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#4F4F4F] hover:text-white transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li className="text-[#4F4F4F]">Миене с пяна</li>
              <li className="text-[#4F4F4F]">Изплакване под налягане</li>
              <li className="text-[#4F4F4F]">Високомощна прахосмукачка</li>
              <li className="text-[#4F4F4F]">Зона за кафе</li>
              <li className="text-[#4F4F4F]">Промоционални пакети</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-[#4F4F4F]">Адрес:</span>
                <span>ул. Добруджа 9, Ситово</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#4F4F4F]">Телефон:</span>
                <a href="tel:024113868" className="flex items-center hover:text-[#FFD600] transition-colors">
                  <PhoneCall className="w-4 h-4 mr-1" /> 02 411 3868
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#4F4F4F]">Имейл:</span>
                <a href="mailto:asnet@abv.bg" className="hover:text-[#FFD600] transition-colors">
                  asnet@abv.bg
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} АС НЕТ - Всички права запазени.
          </p>
          
        </div>
      </div>
    </footer>
  );
}