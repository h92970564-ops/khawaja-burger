import React from 'react';
import { ArrowRight, Award, Utensils, HeartHandshake } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const AboutSection: React.FC = () => {
  const { setIsStoryOpen } = useCart();

  return (
    <section id="about" className="py-24 bg-[#FAF6EE] text-[#121316] relative overflow-hidden">
      {/* Decorative subtle texture circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Premium Burger Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative group">
              {/* Backing accent frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-amber-400 to-orange-400 rounded-3xl opacity-20 blur-sm group-hover:opacity-30 transition-opacity" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/15 border-4 border-white">
                <img
                  src="/src/assets/images/about_burger_craft_1794335430911.jpg"
                  alt="Artisanal chef assembling handcrafted burger with fresh ingredients at Khawaja Burger"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center font-display font-black text-xl text-stone-950 shrink-0">
                    KB
                  </div>
                  <div>
                    <div className="font-display font-black text-base text-stone-900 leading-tight">
                      Crafted With Passion
                    </div>
                    <div className="text-stone-500 text-xs font-medium">
                      Zero Preservatives · 100% Real Beef
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Discover More Button */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-widest mb-4">
              <Award className="w-4 h-4 text-amber-700" />
              <span>Our Culinary Heritage</span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 leading-[1.1] tracking-tight uppercase mb-6" style={{ textWrap: 'balance' }}>
              The Taste You Will Never Forget
            </h2>

            {/* Short Brand Introduction */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6">
              Born from a relentless obsession with the perfect burger, <strong>KHAWAJA BURGER</strong> was built on a simple promise: never compromise on quality. We believe true fast food should celebrate authentic craftsmanship.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
              Every day before dawn, our master bakers proof and bake golden brioche buns with real butter. Our beef smash patties are hand-pressed onto blazing hot cast-iron planchas to create that iconic caramelized lace edge that locks in mouth-watering juiciness. Topped with proprietary secret spices and slow-simmered sauces, every single order hits different.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8 pt-6 border-t border-stone-300">
              <div className="flex items-start gap-3">
                <Utensils className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Flame Seared</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Custom seasoned cast-iron planchas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Halal Certified</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Strict quality & hygiene audits</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Made to Order</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Never pre-cooked or reheated</p>
                </div>
              </div>
            </div>

            {/* Discover More Button */}
            <button
              onClick={() => setIsStoryOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-extrabold text-stone-950 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-400/25 active:scale-95 transition-all cursor-pointer group"
            >
              <span>Discover More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
