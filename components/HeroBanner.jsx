import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Sprout } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100 py-12 lg:py-20 border-b border-cream-200">
      {/* Decorative Organic Backdrop Gradients */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-sage-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-terracotta-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Mission, Typography & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100 border border-sage-200 text-sage-800 text-xs font-semibold tracking-wide shadow-xs">
              <Sprout className="w-4 h-4 text-sage-600" />
              <span>Conscious Craftsmanship • 100% Fair-Trade</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-900 leading-[1.15]">
              Handmade with <span className="text-terracotta-600 italic">heritage</span>, shaped for modern living.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-charcoal-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Step into a slower, more intentional world. We connect discerning homes with indigenous
              potters, master handloom weavers, and natural fibre artisans—ensuring 100% of fair profits
              reach the craft communities directly.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#product-catalog"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-terracotta-600 text-white font-medium text-sm tracking-wide shadow-md shadow-terracotta-600/20 hover:bg-terracotta-700 active:scale-98 transition-all focus-ring group"
              >
                <span>Shop Artisan Goods</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#artisan-stories"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/90 border border-cream-300 text-charcoal-800 font-medium text-sm tracking-wide hover:bg-white hover:border-cream-400 hover:text-charcoal-900 active:scale-98 transition-all focus-ring shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-terracotta-500" />
                <span>Meet the Artisans</span>
              </a>
            </div>

            {/* Three Pillar Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-cream-300/80 text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cream-200/80 flex items-center justify-center text-sage-700 shrink-0">
                  <Sprout className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                    Raw & Earth-Grown
                  </h4>
                  <p className="text-xs text-charcoal-500">Unbleached cotton & jute</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cream-200/80 flex items-center justify-center text-terracotta-600 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                    Direct Artisan Share
                  </h4>
                  <p className="text-xs text-charcoal-500">Zero middleman markup</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cream-200/80 flex items-center justify-center text-charcoal-700 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                    Zero Plastic Pledges
                  </h4>
                  <p className="text-xs text-charcoal-500">Recycled paper packaging</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Split Visual Hero Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Feature Image */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 group">
                <Image
                  src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=85"
                  alt="Master artisan weaving handloom cotton throw"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />

                {/* Overlaid Card Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-cream-200 shadow-lg">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-terracotta-600 uppercase">
                        Spotlight Masterpiece
                      </span>
                      <h3 className="font-serif text-sm font-semibold text-charcoal-900">
                        Organic Desi Cotton Waffle Throw
                      </h3>
                      <p className="text-xs text-charcoal-500">
                        Crafted by Sunita Devi • Jaipur Guild
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs line-through text-charcoal-400">$85</span>
                      <span className="block text-base font-bold text-terracotta-600 font-serif">
                        $68
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Artisan Mini Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-cream-50/95 backdrop-blur-md border border-cream-300 rounded-xl p-3 shadow-lg flex items-center gap-3 max-w-[210px] animate-fade-in hidden sm:flex">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-sage-300">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                    alt="Sunita Devi"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-charcoal-900 leading-tight">
                    Sunita Devi
                  </p>
                  <p className="text-[10px] text-sage-600 font-medium">
                    24 Yrs Pit Loom Weaver
                  </p>
                </div>
              </div>

              {/* Floating Eco Seal */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-sage-800 text-cream-50 rounded-xl p-3 shadow-xl border border-sage-700 flex items-center gap-2.5 hidden sm:flex">
                <Sprout className="w-5 h-5 text-sage-200" />
                <div>
                  <p className="text-[11px] font-bold leading-tight">100% Pure Origin</p>
                  <p className="text-[10px] text-sage-300">Natural Herbal Dyes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
