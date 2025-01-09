"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { NavPopup } from "./nav-popup";
import { Button } from "./ui/button"; // Updated import path

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          AW
        </Link>
        <div className="flex items-center gap-4">
          {/* <Button 
          variant="outline" 
          className="rounded-full border-blue-800 px-10 text-base font-medium
          transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          Get in touch
        </Button> */}

          <div className="buttons-container">
            <a href="#" className="btn test-completed" />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsNavOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <NavPopup isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      </div>
    </header>
  );
}
