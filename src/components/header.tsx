"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "À PROPOS", href: "#apropos" },
  {
    label: "EXPÉRIENCES",
    href: "#experiences",
    hasDropdown: true,
    dropdownItems: [
      { label: "Toutes les expériences", href: "#all-experiences" },
      { label: "Expériences immersives", href: "#immersive" },
      { label: "Productions spéciales", href: "#special" },
    ],
  },
  { label: "PRODUCTIONS", href: "#productions" },
  { label: "PARTENAIRES", href: "#partenaires" },
  { label: "NEWS", href: "#news" },
  { label: "CARRIÈRE", href: "#carriere" },
  { label: "CONTACT", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 relative">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2L2 12L20 22L38 12L20 2Z" fill="white" stroke="white" strokeWidth="1.5" />
              <path d="M20 22L2 32L20 38L38 32L20 22Z" fill="white" stroke="white" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl tracking-wider">ARCADIA</span>
            <span className="text-white text-xs tracking-widest">PRODUCTIONS</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger className="text-white text-sm font-medium hover:opacity-80 transition-opacity focus:outline-none">{item.label}</DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#0a1628] border-white/10">
                  {item.dropdownItems?.map((dropdownItem) => (
                    <DropdownMenuItem key={dropdownItem.label} asChild>
                      <Link href={dropdownItem.href} className="text-white hover:bg-white/10 cursor-pointer">
                        {dropdownItem.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={item.label} href={item.href} className="text-white text-sm font-medium hover:opacity-80 transition-opacity">
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Language Selector */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 gap-2">
            <span className="text-sm font-medium">FR</span>
            <Globe className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
