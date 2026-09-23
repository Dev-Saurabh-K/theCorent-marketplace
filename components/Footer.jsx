"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import {
  Leaf,
  HeartHandshake,
  ShieldCheck,
  Recycle,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const showToast = useStore((state) => state.showToast);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      showToast("Please provide a valid email address", "info");
      return;
    }
    setSubscribed(true);
    showToast("Welcome to the Terra & Weft Guild Circle!", "success");
    setEmail("");
  };

  return (
    <footer className="bg-charcoal-900 text-cream-100 border-t border-charcoal-800">
      {/* Sustainability Certifications Strip */}
      <div className="border-b border-charcoal-800 py-8 bg-charcoal-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage-800/60 border border-sage-700/60 flex items-center justify-center text-sage-300 shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-cream-100 uppercase tracking-wider">
                  Fair Trade Direct
                </h4>
                <p className="text-[11px] text-cream-300/80">Living wages to 120+ families</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage-800/60 border border-sage-700/60 flex items-center justify-center text-sage-300 shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-cream-100 uppercase tracking-wider">
                  100% Organic & Raw
                </h4>
                <p className="text-[11px] text-cream-300/80">Zero chemical fixatives</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage-800/60 border border-sage-700/60 flex items-center justify-center text-sage-300 shrink-0">
                <Recycle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-cream-100 uppercase tracking-wider">
                  Zero Plastic Pledge
                </h4>
                <p className="text-[11px] text-cream-300/80">100% compostable mailers</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage-800/60 border border-sage-700/60 flex items-center justify-center text-sage-300 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-cream-100 uppercase tracking-wider">
                  Artisan Guild Certified
                </h4>
                <p className="text-[11px] text-cream-300/80">Heritage lineage preservation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-cream-50">
                TERRA <span className="text-terracotta-400 font-light">&</span> WEFT
              </span>
            </div>
            <p className="text-xs leading-relaxed text-cream-300/80 max-w-sm">
              We bridge the generational wisdom of master indigenous craftspeople with modern mindful
              interiors. Every hand-spun throw, riverbed jute basket, and pit-fired ceramic amphora
              preserves sacred craft heritage.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-sage-300">
              <Sparkles className="w-4 h-4 text-terracotta-400" />
              <span>1% of all revenue reforests indigenous timber habitats</span>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cream-100">
              Craft Guilds
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/80">
              <li>
                <a href="#product-catalog" className="hover:text-terracotta-300 transition-colors">
                  Organic Cotton Weaves
                </a>
              </li>
              <li>
                <a href="#product-catalog" className="hover:text-terracotta-300 transition-colors">
                  Bengal Golden Jute
                </a>
              </li>
              <li>
                <a href="#product-catalog" className="hover:text-terracotta-300 transition-colors">
                  Terracotta & Wood Fired
                </a>
              </li>
              <li>
                <a href="#product-catalog" className="hover:text-terracotta-300 transition-colors">
                  Reclaimed Timber Joinery
                </a>
              </li>
              <li>
                <a href="#product-catalog" className="hover:text-terracotta-300 transition-colors">
                  Hand-hammered Kansa
                </a>
              </li>
            </ul>
          </div>

          {/* Heritage Stories */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cream-100">
              Community
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/80">
              <li>
                <a href="#artisan-stories" className="hover:text-terracotta-300 transition-colors">
                  Meet Sunita Devi
                </a>
              </li>
              <li>
                <a href="#artisan-stories" className="hover:text-terracotta-300 transition-colors">
                  Meet Ratan Sen
                </a>
              </li>
              <li>
                <a href="#artisan-stories" className="hover:text-terracotta-300 transition-colors">
                  Meet Bhikshu Kumbhakar
                </a>
              </li>
              <li>
                <a href="#artisan-stories" className="hover:text-terracotta-300 transition-colors">
                  Fair Wage Standards
                </a>
              </li>
              <li>
                <a href="#sustainability-pledge" className="hover:text-terracotta-300 transition-colors">
                  Zero Plastic Report
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cream-100">
              Join The Guild Circle
            </h4>
            <p className="text-xs text-cream-300/80 leading-relaxed">
              Receive seasonal chronicles from our village cooperatives, notice of limited kiln batch
              releases, and textile care guides.
            </p>

            <form onSubmit={handleSubscribe} className="pt-2 space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  aria-label="Email for artisan newsletter"
                  required
                  className="w-full pl-3.5 pr-24 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-xl text-xs text-cream-100 placeholder-charcoal-400 focus-ring"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3.5 rounded-lg bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors focus-ring"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-sage-300 font-medium">
                  ✓ Thank you for subscribing to conscious craft stories!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <p>© {new Date().getFullYear()} Terra & Weft Artisan Guild. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cream-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cream-200 transition-colors">
              Ethical Charter
            </a>
            <a href="#" className="hover:text-cream-200 transition-colors">
              Artisan Direct Agreement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
