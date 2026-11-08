"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "d88-analytics-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function Consent({ fr = false }: { fr?: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "granted") {
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
    } else if (stored === null) {
      setVisible(true);
    }
  }, []);

  function decide(granted: boolean) {
    localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    window.gtag?.("consent", "update", { analytics_storage: granted ? "granted" : "denied" });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-border shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm text-gray-600 font-light leading-relaxed flex-1">
          {fr
            ? "Nous utilisons Google Analytics (cookies statistiques) pour comprendre comment ce site est utilisé. Vous pouvez accepter ou refuser — la navigation reste identique."
            : "We use Google Analytics (statistics cookies) to understand how this site is used. You can accept or decline — browsing is identical either way."}
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => decide(false)}
            className="px-5 py-2.5 text-sm uppercase tracking-wider border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {fr ? "Refuser" : "Decline"}
          </button>
          <button
            onClick={() => decide(true)}
            className="px-5 py-2.5 text-sm uppercase tracking-wider bg-foreground text-background hover:bg-accent transition-colors"
          >
            {fr ? "Accepter" : "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
}
