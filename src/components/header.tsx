"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Globe, Grip, Menu, X } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import logo from "../../public/ARCADIA_Logo_White.png";
import drop1 from "../../public/drop1.svg";
import drop2 from "../../public/drop2.svg";
import { useState } from "react";

const navItems = [
  { label: "À PROPOS", href: "#apropos" },
  { label: "EXPÉRIENCES", href: "#experiences" },
  { label: "PRODUCTIONS", href: "#productions" },
  { label: "PARTENAIRES", href: "#partenaires" },
  { label: "NEWS", href: "#news" },
  { label: "CARRIÈRE", href: "#carriere" },
  { label: "CONTACT", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-6 md:py-10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Arcadia Logo" width={200} height={200} className="object-contain w-[200px]" />
        </Link>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors z-50" aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-white text-[11px] font-bold hover:opacity-80 transition-opacity">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden xl:flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 gap-2">
              <span className="text-sm font-medium">FR</span>
              <Globe className="w-4 h-4" />
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="hidden bg-transparent lg:inline-flex items-center gap-4 justify-between w-[250px] h-10 px-3 rounded-md border-2 border-white/40 text-white font-bold">
              <span className="font-bold text-xs">PROCHAIN ÉVÈNEMENTS</span>
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-transparent border-none shadow-none text-white mt-2 p-2 w-[290px]">
              <DropdownMenuItem asChild>
                <Link href="#aurora" className=" px-4 py-3 flex items-start gap-4 justify-start">
                  <div>
                    <Image src={drop1} alt="Aurora Nights" width={80} height={50} className="object-contain" />
                  </div>
                  <div className="flex flex-col items-start gap-2 justify-start">
                    <span className="font-bold text-xs">AURORANIGHTS</span>
                    <span className="font-normal text-xs">23.11.26</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#mecha" className=" px-4 py-3 flex items-start gap-4 justify-start">
                  <div>
                    <Image src={drop2} alt="Mecha Rumble" width={80} height={50} className="object-contain" />
                  </div>
                  <div className="flex flex-col items-start gap-2 justify-start">
                    <span className="font-bold text-xs">MECHARUMBLE</span>
                    <span className="font-normal text-xs">23.11.26</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <div className="border-t-2 border-white/40 mt-2">
                <div className="flex items-center justify-center gap-2 ps-10 py-3 font-bold text-xs">
                  <Grip className="h-4 w-4" />
                  TOUS LES ÉVÉNEMENTS À VENIR
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-0 top-[80px] bg-[#0a1628]/95 backdrop-blur-lg z-40 overflow-y-auto">
            <div className="flex flex-col p-6 space-y-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} className="text-white text-base font-bold hover:opacity-80 transition-opacity py-2" onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-white/20 pt-6">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 gap-2 w-full justify-start">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">FR - Français</span>
                </Button>
              </div>
              <div className="border-t border-white/20 pt-6">
                <h3 className="text-white font-bold text-sm mb-4">PROCHAIN ÉVÈNEMENTS</h3>
                <div className="space-y-4">
                  <Link href="#aurora" className="flex items-start gap-4 p-3 rounded-md hover:bg-white/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    <Image src={drop1} alt="Aurora Nights" width={80} height={50} className="object-contain rounded" />
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm text-white">AURORANIGHTS</span>
                      <span className="font-normal text-xs text-white/70">23.11.26</span>
                    </div>
                  </Link>
                  <Link href="#mecha" className="flex items-start gap-4 p-3 rounded-md hover:bg-white/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    <Image src={drop2} alt="Mecha Rumble" width={80} height={50} className="object-contain rounded" />
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm text-white">MECHARUMBLE</span>
                      <span className="font-normal text-xs text-white/70">23.05.27</span>
                    </div>
                  </Link>
                  <Link href="#all-events" className="flex items-center justify-center gap-2 py-3 border-t-2 border-white/40 mt-4 pt-4" onClick={() => setMobileMenuOpen(false)}>
                    <Grip className="h-4 w-4 text-white" />
                    <span className="font-bold text-xs text-white">TOUS LES ÉVÉNEMENTS À VENIR</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
