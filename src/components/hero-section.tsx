"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:py-32">
      <div className="max-w-[1400px] w-full">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            WHERE EXPERIENCES
            <br />
            TAKE SHAPE
          </h1>
          <p className="text-white/90 text-sm md:text-base font-normal max-w-lg">Une maison de production dédiée à la création d&apos;expériences immersives et tournées vers l&apos;avenir</p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-medium rounded-none text-xs md:text-sm tracking-wider px-6 md:px-8 h-14 md:h-16 lg:h-18 w-full sm:w-auto"
            >
              <strong className="text-xs md:text-sm font-extrabold">À PROPOS D&apos;ARCADIA</strong> <span className="text-xs md:text-sm font-normal">PRODUCTIONS</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 h-14 md:h-16 lg:h-18 border-white bg-transparent text-white hover:bg-white rounded-none hover:text-black font-medium text-xs md:text-sm tracking-wider px-6 md:px-8 group w-full sm:w-auto"
            >
              <strong className="text-xs md:text-sm font-extrabold">DÉCOUVRIR ARCADIA</strong> <span className="text-xs md:text-sm font-normal">PRODUCTIONS</span>
              <Play className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
}
