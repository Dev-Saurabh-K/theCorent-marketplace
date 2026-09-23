"use client";

import { useState } from "react";
import Image from "next/image";
import { ARTISANS } from "@/data/artisans";
import { useStore } from "@/store/useStore";
import { MapPin, Quote, Sparkles, Award, Users, ArrowRight } from "lucide-react";

export default function ArtisanSpotlight() {
  const [selectedArtisanId, setSelectedArtisanId] = useState(ARTISANS[0].id);
  const setSearchQuery = useStore((state) => state.setSearchQuery);

  const currentArtisan =
    ARTISANS.find((a) => a.id === selectedArtisanId) || ARTISANS[0];

  const handleExploreArtisanWork = (artisanName) => {
    setSearchQuery(artisanName);
    const catalog = document.getElementById("product-catalog");
    if (catalog) {
      catalog.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="artisan-stories" className="py-16 sm:py-24 bg-cream-100 border-y border-cream-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-100 text-terracotta-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Voices from the Guild</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            The Hands & Hearts Behind the Craft
          </h2>
          <p className="mt-3 text-base text-charcoal-600">
            Every creation is born from a lineage of dedicated mastery. Learn about the indigenous
            families keeping time-honored sustainable techniques alive.
          </p>

          {/* Artisan Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {ARTISANS.map((artisan) => {
              const isActive = artisan.id === currentArtisan.id;
              return (
                <button
                  key={artisan.id}
                  onClick={() => setSelectedArtisanId(artisan.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all focus-ring flex items-center gap-2.5 ${
                    isActive
                      ? "bg-charcoal-900 text-cream-50 shadow-md ring-2 ring-charcoal-900"
                      : "bg-white/80 text-charcoal-700 hover:bg-white border border-cream-300"
                  }`}
                >
                  <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={artisan.avatar}
                      alt={artisan.name}
                      fill
                      sizes="20px"
                      className="object-cover"
                    />
                  </div>
                  <span>{artisan.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Artisan Spotlight Card */}
        <div className="bg-white rounded-3xl border border-cream-300 overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Artisan Portrait & Visual Origin */}
            <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[500px]">
              <Image
                src={currentArtisan.avatar}
                alt={currentArtisan.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent lg:hidden" />

              {/* Mobile overlay for quick details */}
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <span className="text-xs uppercase tracking-wider text-terracotta-300 font-bold">
                  {currentArtisan.craft}
                </span>
                <h3 className="font-serif text-2xl font-bold">{currentArtisan.name}</h3>
                <p className="text-xs text-cream-200">{currentArtisan.region}</p>
              </div>

              {/* Experience Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-charcoal-800 border border-cream-200 shadow-sm hidden lg:flex items-center gap-1.5">
                <Award className="w-4 h-4 text-terracotta-600" />
                <span>{currentArtisan.experienceYears} Years Traditional Mastery</span>
              </div>
            </div>

            {/* Right: Rich Storytelling & Impact */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                {/* Header Tagging (Desktop) */}
                <div className="hidden lg:flex items-center justify-between border-b border-cream-200 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                      {currentArtisan.craft}
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-charcoal-900 mt-1">
                      {currentArtisan.name}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sage-50 text-sage-800 border border-sage-200 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-sage-600" />
                    <span>{currentArtisan.region}</span>
                  </div>
                </div>

                {/* Direct Quote */}
                <div className="relative bg-cream-50 rounded-2xl p-6 border border-cream-200">
                  <Quote className="w-8 h-8 text-terracotta-300 absolute -top-3 -left-2 fill-terracotta-200" />
                  <p className="font-serif text-base sm:text-lg italic text-charcoal-800 leading-relaxed pl-4">
                    "{currentArtisan.quote}"
                  </p>
                </div>

                {/* Community Impact & Heritage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-cream-50/70 border border-cream-200 space-y-1">
                    <div className="flex items-center gap-2 text-sage-700 text-xs font-bold uppercase tracking-wide">
                      <Users className="w-4 h-4" />
                      <span>Community Impact</span>
                    </div>
                    <p className="text-xs text-charcoal-700 leading-relaxed">
                      {currentArtisan.communityImpact}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-cream-50/70 border border-cream-200 space-y-1">
                    <div className="flex items-center gap-2 text-terracotta-700 text-xs font-bold uppercase tracking-wide">
                      <Sparkles className="w-4 h-4" />
                      <span>Natural Raw Elements</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {currentArtisan.materialsUsed.map((m, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-white text-[11px] font-medium text-charcoal-700 border border-cream-200"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action: Discover Works */}
              <div className="pt-4 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-charcoal-500 text-center sm:text-left">
                  <span className="font-bold text-charcoal-800">
                    {currentArtisan.creationsCount} authentic works
                  </span>{" "}
                  curated in the Terra & Weft marketplace.
                </div>

                <button
                  type="button"
                  onClick={() => handleExploreArtisanWork(currentArtisan.name)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-cream-50 text-xs font-semibold tracking-wider uppercase transition-all shadow-md focus-ring group"
                >
                  <span>View {currentArtisan.name}'s Works</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
