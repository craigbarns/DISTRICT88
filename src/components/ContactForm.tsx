"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    try {
      const hasFiles =
        formData.getAll("attachments").some((f) => f instanceof File && f.size > 0);
      const res = await fetch("/", {
        method: "POST",
        headers: hasFiles ? undefined : { "Content-Type": "application/x-www-form-urlencoded" },
        body: hasFiles ? formData : new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border bg-gray-50 p-12 text-center">
        <CheckCircle2 size={40} className="mx-auto mb-6 text-foreground" />
        <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">Project Received.</h3>
        <p className="text-gray-600 font-light leading-relaxed max-w-md mx-auto">
          Thank you for your brief. Our team will review your requirements and get back to you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* Netlify form identification + honeypot (hidden from humans) */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-gray-500">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors rounded-none" />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-bold uppercase tracking-widest text-gray-500">Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors rounded-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-gray-500">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors rounded-none" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-gray-500">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors rounded-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="category" className="text-sm font-bold uppercase tracking-widest text-gray-500">Product Category</label>
          <select id="category" name="category" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors rounded-none text-gray-700">
            <option value="" disabled>Select a category</option>
            <option value="fashion">Fashion</option>
            <option value="sportswear">Sportswear</option>
            <option value="cycling">Cycling</option>
            <option value="technical">Technical Apparel</option>
            <option value="swimwear">Swimwear</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="quantity" className="text-sm font-bold uppercase tracking-widest text-gray-500">Estimated Quantity</label>
          <input id="quantity" name="quantity" type="number" min="1" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors rounded-none" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-gray-500">Message: Tell us about your project</label>
        <textarea id="message" name="message" rows={4} required className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors resize-none rounded-none" placeholder="Provide details about materials, timelines, and specific requirements..."></textarea>
      </div>

      <div className="border-2 border-dashed border-gray-300 p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors">
        <label htmlFor="attachments" className="cursor-pointer block">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Upload Tech Pack or Files</p>
          <p className="text-xs text-gray-400 mb-4">Supported: PDF, Excel, Photos, Sketches (Max 20MB)</p>
          <input id="attachments" name="attachments" type="file" multiple className="text-xs text-gray-500 file:mr-4 file:px-4 file:py-2 file:bg-foreground file:text-background file:text-xs file:uppercase file:tracking-wider file:border-0 file:hover:bg-accent file:cursor-pointer" />
        </label>
      </div>

      {status === "error" && (
        <div className="flex items-center space-x-3 text-sm text-red-600" role="alert">
          <AlertCircle size={18} />
          <span>Something went wrong. Please try again or email us directly.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center space-x-3 px-10 py-5 bg-foreground text-background font-medium uppercase tracking-wider hover:bg-accent transition-colors w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Sending…</span>
          </>
        ) : (
          <span>Send Your Project</span>
        )}
      </button>
    </form>
  );
}
