import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="pt-40 pb-32 px-6 text-center min-h-screen">
      <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Error 404</p>
      <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8">
        This page left the factory.
      </h1>
      <p className="text-lg text-gray-600 font-light mb-12 max-w-xl mx-auto">
        The page you are looking for does not exist. Explore our manufacturing capabilities or
        start your project directly.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Link
          href="/"
          className="px-8 py-4 bg-foreground text-background font-medium uppercase tracking-wider text-sm hover:bg-accent transition-colors w-full sm:w-auto"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="px-8 py-4 border border-foreground font-medium uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors w-full sm:w-auto"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
}
