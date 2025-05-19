import Link from "next/link";
import { Car, Facebook, Instagram, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A2A63] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="w-8 h-8 text-white" />
              <span className="text-xl font-bold">АС НЕТ</span>
            </Link>
            <p className="text-white/80 max-w-xs">
              Професионална самообслужваща автомивка със зона за кафе в Ситово.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
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
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Начало
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                  За нас
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-white/80 hover:text-white transition-colors">
                  Цени
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li className="text-white/80">Миене с пяна</li>
              <li className="text-white/80">Изплакване под налягане</li>
              <li className="text-white/80">Високомощна прахосмукачка</li>
              <li className="text-white/80">Зона за кафе</li>
              <li className="text-white/80">Промоционални пакети</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-white/80">Адрес:</span>
                <span>ул. Добруджа 9, Ситово</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-white/80">Телефон:</span>
                <a href="tel:0888047555" className="flex items-center hover:text-[#FFD600] transition-colors">
                  <PhoneCall className="w-4 h-4 mr-1" /> 0888 047 555
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-white/80">Имейл:</span>
                <a href="mailto:info@asnet.bg" className="hover:text-[#FFD600] transition-colors">
                  info@asnet.bg
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} АС НЕТ - Всички права запазени.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Политика за поверителност
            </Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Условия за ползване
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}