"use client";

import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  image: string;
  href: string;
}

export function EventCard({ title, date, image, href }: EventCardProps) {
  return (
    <Link href={href} className="group relative overflow-hidden rounded-lg transition-transform hover:scale-105">
      <div className="relative h-16 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <span className="text-white text-sm font-bold tracking-wider">{title}</span>
        <span className="text-white text-xs">{date}</span>
      </div>
    </Link>
  );
}

interface EventsSidebarProps {
  events?: EventCardProps[];
}

export function EventsSidebar({ events = [] }: EventsSidebarProps) {
  const defaultEvents: EventCardProps[] = [
    {
      title: "AURORANUÏTS",
      date: "2.5 | 11.25",
      image: "/events/aurora.jpg",
      href: "#auroranuïts",
    },
    {
      title: "MÉCANUÏBLE",
      date: "2.5 05.21",
      image: "/events/mecha.jpg",
      href: "#mécanuïble",
    },
  ];

  const displayEvents = events.length > 0 ? events : defaultEvents;

  return (
    <div className="fixed top-20 right-8 z-40 w-64 space-y-4">
      <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-xs font-medium tracking-widest">PROCHAINS ÉVÉNEMENTS</h3>
          <button className="text-white hover:opacity-80">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8H12M12 8L8 4M12 8L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="space-y-3">
          {displayEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        <Link href="#all-events" className="mt-4 flex items-center justify-center gap-2 text-white text-xs hover:opacity-80 transition-opacity">
          <span className="tracking-wider">TOUS LES ÉVÉNEMENTS À VENIR</span>
        </Link>
      </div>
    </div>
  );
}
