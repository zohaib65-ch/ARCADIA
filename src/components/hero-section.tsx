"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-[1400px] w-full">
        <div className="max-w-3xl space-y-8">
          {/* Main Heading */}
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            WHERE EXPERIENCES
            <br />
            TAKE SHAPE
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">Une maison de production dédiée à la création d&apos;expériences immersives et tournées vers l&apos;avenir</p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="default" size="lg" className="bg-white text-black hover:bg-white/90 font-medium text-sm tracking-wider px-8 h-12">
              À PROPOS D&apos;ARCADIA PRODUCTIONS
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black font-medium text-sm tracking-wider px-8 h-12 group">
              DÉCOUVRIR ARCADIA PRODUCTIONS
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
}
