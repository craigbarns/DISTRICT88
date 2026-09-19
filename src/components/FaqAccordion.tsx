"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border-b border-border">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between py-6 text-left group"
            >
              <span className="text-lg md:text-xl font-medium pr-8 group-hover:text-accent transition-colors">
                {item.question}
              </span>
              <span className="shrink-0 text-gray-400 group-hover:text-foreground transition-colors">
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 font-light leading-relaxed max-w-3xl">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
