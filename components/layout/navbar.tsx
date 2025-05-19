"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Car, Menu, X } from "lucide-react";
import Image from "next/image";

function handleSmoothScroll(e: React.MouseEvent<HTMLElement>, targetId: string) {
  e.preventDefault();
  const element = document.getElementById(targetId);
  const navbarHeight = 80; // adjust if your navbar is taller
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/80 shadow-md backdrop-blur-md" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
  <Image src="/cleanparklogo.png" alt="Clean Park Logo" width={64} height={64} priority />
</Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Начало
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
  <a href="#about" onClick={e => handleSmoothScroll(e, "about")}
     className={navigationMenuTriggerStyle()}>
    За нас
  </a>
</NavigationMenuItem>
<NavigationMenuItem>
  <a href="#services" onClick={e => handleSmoothScroll(e, "services")}
     className={navigationMenuTriggerStyle()}>
    Услуги
  </a>
</NavigationMenuItem>
<NavigationMenuItem>
  <a href="#pricing" onClick={e => handleSmoothScroll(e, "pricing")}
     className={navigationMenuTriggerStyle()}>
    Цени
  </a>
</NavigationMenuItem>
<NavigationMenuItem>
  <a href="#faq" onClick={e => handleSmoothScroll(e, "faq")}
     className={navigationMenuTriggerStyle()}>
    Често задавани въпроси
  </a>
</NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <Button 
            className="hidden md:inline-flex bg-[#0C4DF4] hover:bg-[#0A3DD2]"
            onClick={e => handleSmoothScroll(e, "contact")}
          >
            Свържи се с нас
          </Button>

          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden min-h-screen min-w-full flex flex-col bg-white/80 backdrop-blur-2xl shadow-lg">
            <div className="absolute top-6 left-0 w-full flex items-center justify-between px-6">
              <Link href="/" className="flex items-center">
                <Image src="/cleanparklogo.png" alt="Clean Park Logo" width={56} height={56} priority />
              </Link>
              <button
                className="flex items-center justify-center p-2 rounded-full hover:bg-white/30 transition"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Затвори менюто"
              >
                <X className="w-7 h-7 text-[#1A2A63]" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center space-y-6 w-full flex-1 mt-24">
              <a href="#" className="text-lg font-medium px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>
  Начало
</a>
<a href="#about" className="text-lg font-medium px-2 py-1" onClick={e => { handleSmoothScroll(e, "about"); setIsMobileMenuOpen(false); }}>
  За нас
</a>
<a href="#services" className="text-lg font-medium px-2 py-1" onClick={e => { handleSmoothScroll(e, "services"); setIsMobileMenuOpen(false); }}>
  Услуги
</a>
<a href="#pricing" className="text-lg font-medium px-2 py-1" onClick={e => { handleSmoothScroll(e, "pricing"); setIsMobileMenuOpen(false); }}>
  Цени
</a>
<a href="#faq" className="text-lg font-medium px-2 py-1" onClick={e => { handleSmoothScroll(e, "faq"); setIsMobileMenuOpen(false); }}>
  Често задавани въпроси
</a>
              <Button 
                className="mt-2 bg-[#0C4DF4] hover:bg-[#0A3DD2]"
                onClick={e => { handleSmoothScroll(e, "contact"); setIsMobileMenuOpen(false); }}
              >
                Свържи се с нас
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}