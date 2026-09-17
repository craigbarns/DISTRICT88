"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Capabilities", href: "/capabilities" },
    { name: "Services", href: "/services" },
    { name: "Materials", href: "/materials" },
    { name: "Our Work", href: "/our-work" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-widest uppercase">
          District 88
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="px-6 py-3 bg-foreground text-background text-sm uppercase tracking-wider font-medium hover:bg-accent transition-colors"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-border flex flex-col items-center py-8 space-y-6 lg:hidden shadow-xl"
          >
            {navLinks.map((link) => (
               <Link
               key={link.name}
               href={link.href}
               onClick={() => setIsOpen(false)}
               className="text-lg uppercase tracking-wider"
             >
               {link.name}
             </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-4 bg-foreground text-background text-sm uppercase tracking-wider font-medium w-full max-w-xs text-center"
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
