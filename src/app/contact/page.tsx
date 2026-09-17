"use client";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">Let's build your next collection.</h1>
        <p className="text-xl text-gray-600 font-light max-w-2xl">
          Tell us about your project and our team will review your requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Name</label>
                <input type="text" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors rounded-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Company</label>
                <input type="text" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors rounded-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Email</label>
                <input type="email" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors rounded-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Phone / WhatsApp</label>
                <input type="tel" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors rounded-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Product Category</label>
                <select className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors rounded-none text-gray-700">
                  <option value="" disabled defaultValue="">Select a category</option>
                  <option value="fashion">Fashion</option>
                  <option value="sportswear">Sportswear</option>
                  <option value="cycling">Cycling</option>
                  <option value="technical">Technical Apparel</option>
                  <option value="swimwear">Swimwear</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Estimated Quantity</label>
                <input type="number" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors rounded-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Message: Tell us about your project</label>
              <textarea rows={4} className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors resize-none rounded-none" placeholder="Provide details about materials, timelines, and specific requirements..."></textarea>
            </div>

            <div className="border-2 border-dashed border-gray-300 p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Upload Tech Pack or Files</p>
              <p className="text-xs text-gray-400">Supported: PDF, Excel, Photos, Sketches (Max 20MB)</p>
            </div>

            <button type="submit" className="px-10 py-5 bg-foreground text-background font-medium uppercase tracking-wider hover:bg-accent transition-colors w-full md:w-auto">
              Send Your Project
            </button>
          </form>
        </div>

        <div className="hidden lg:block bg-gray-100 p-10 h-fit sticky top-32">
          <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-300 pb-4">Direct Contact</h3>
          <p className="text-gray-600 font-light mb-8">
            Prefer to discuss your project directly with our team?
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">WhatsApp</p>
              <p className="font-mono text-foreground font-medium">+852 (Number pending)</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email</p>
              <p className="font-mono text-foreground font-medium">contact@district88.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
