import { Sprout, HeartHandshake, PackageOpen, Award } from "lucide-react";

export default function SustainabilityPledge() {
  return (
    <section id="sustainability-pledge" className="py-16 sm:py-20 bg-cream-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-800 text-cream-50 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Organic Background Patterns */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-sage-700/50 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-terracotta-700/30 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-300">
              Our Uncompromising Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
              True Sustainability Begins with Human Dignity.
            </h2>
            <p className="mt-4 text-cream-200 text-sm sm:text-base leading-relaxed">
              We reject industrial high-speed manufacturing that depletes the earth and exploits
              craftspeople. Here is our solemn promise to our artisan partners and to you:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 relative z-10">
            <div className="bg-sage-900/40 backdrop-blur-xs border border-sage-700/60 rounded-2xl p-5 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sage-700/60 flex items-center justify-center text-sage-200">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-cream-100">Direct Living Wages</h3>
              <p className="text-xs text-cream-300/80 leading-relaxed">
                Artisans set their own pricing. 100% of profit margins remain within village
                guilds with no predatory broker markups.
              </p>
            </div>

            <div className="bg-sage-900/40 backdrop-blur-xs border border-sage-700/60 rounded-2xl p-5 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sage-700/60 flex items-center justify-center text-sage-200">
                <Sprout className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-cream-100">Zero Synthetic Dyes</h3>
              <p className="text-xs text-cream-300/80 leading-relaxed">
                Colored exclusively with fermented wild indigo, madder root, onion peel, and mineral
                slips that can safely return to the soil.
              </p>
            </div>

            <div className="bg-sage-900/40 backdrop-blur-xs border border-sage-700/60 rounded-2xl p-5 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sage-700/60 flex items-center justify-center text-sage-200">
                <PackageOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-cream-100">Plastic-Free Parcels</h3>
              <p className="text-xs text-cream-300/80 leading-relaxed">
                Wrapped in recycled kraft paper, jute twine, and embedded with plantable wildflower
                seed hangtags you can bury in your garden.
              </p>
            </div>

            <div className="bg-sage-900/40 backdrop-blur-xs border border-sage-700/60 rounded-2xl p-5 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sage-700/60 flex items-center justify-center text-sage-200">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-cream-100">Generational Linchpins</h3>
              <p className="text-xs text-cream-300/80 leading-relaxed">
                Every purchase finances youth apprenticeship programs, ensuring ancient pottery and
                handloom traditions thrive into the 22nd century.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
