"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function Marquee() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-yellow-500 to-green-600 text-white py-2 overflow-hidden sticky top-0 z-[60] relative">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 z-10 p-1 rounded-full transition-colors transform -translate-y-1/2 bg-yellow-500/80"
        aria-label="Close marquee"
      >
        <X className="w-4 h-4 text-green-600" />
      </button>
      <div className="flex pr-8 whitespace-nowrap animate-marquee">
        <span className="px-4 text-sm font-medium">
          🔔 Get On-Campus NEET | JEE | NDA Coaching Classes from Best Faculties
        </span>
        <span className="px-4 text-sm font-medium">
          🔔 Get On-Campus NEET | JEE | NDA Coaching Classes from Best Faculties
        </span>
        <span className="px-4 text-sm font-medium">
          🔔 Get On-Campus NEET | JEE | NDA Coaching Classes from Best Faculties
        </span>
        <span className="px-4 text-sm font-medium">
          🔔 Get On-Campus NEET | JEE | NDA Coaching Classes from Best Faculties
        </span>
        <span className="px-4 text-sm font-medium">
          🔔 Get On-Campus NEET | JEE | NDA Coaching Classes from Best Faculties
        </span>
        <span className="px-4 text-sm font-medium">
          🔔 Get On-Campus NEET | JEE | NDA Coaching Classes from Best Faculties
        </span>
      </div>
    </div>
  );
}
