import React from 'react';
import { ArrowRight, Star, Flame, Clock, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { POPULAR_MENU_ITEMS } from '../data/menuData';

export const HeroSection: React.FC = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const heroFeaturedBurger = POPULAR_MENU_ITEMS[0]; // Khawaja Special Burger

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 bg-[#121316] overflow-hidden"
    >
      {/* Background radial warmth and subtle burger grill ambiance */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle background noise texture accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Taste That Hits Different!</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black text-white leading-[1.05] tracking-tight uppercase mb-6" style={{ textWrap: 'balance' }}>
              Bite Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500">
                Happiness
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl mb-8">
              Freshly prepared burgers, loaded with flavor and made to satisfy every craving. Handcrafted daily with 100% prime halal cuts, pillowy brioche buns, and our secret drip house sauce.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* Yellow Explore Menu Button */}
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-extrabold text-gray-950 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-400/25 hover:shadow-amber-400/40 active:scale-95 transition-all text-center group cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Yellow / Accent Order Now Button */}
              <button
                onClick={() => {
                  addToCart(heroFeaturedBurger, 1);
                  setIsCartOpen(true);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:border-amber-400/50 backdrop-blur-sm transition-all cursor-pointer text-center"
              >
                <span>Order Khawaja Special</span>
                <span className="text-amber-400 font-extrabold text-sm font-mono tabular-nums">Rs. 950</span>
              </button>
            </div>

            {/* Trust Proof Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 w-full max-w-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-none">4.9 / 5.0</div>
                  <div className="text-gray-400 text-[11px] mt-0.5">15k+ Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-none">28 Mins</div>
                  <div className="text-gray-400 text-[11px] mt-0.5">Hot Delivery</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-none">100% Halal</div>
                  <div className="text-gray-400 text-[11px] mt-0.5">Prime Beef</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Large realistic mouth-watering burger image */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Circular glowing pedestal back-drop */}
            <div className="relative w-full max-w-[500px] aspect-square rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 via-orange-500/15 to-transparent blur-2xl" />
              
              {/* Outer decorative ring */}
              <div className="absolute inset-4 rounded-full border border-amber-400/20 animate-spin-slow pointer-events-none" />

              {/* Burger Image Container with styled frame and hover micro-interaction */}
              <div className="relative z-10 w-full h-full p-2 flex items-center justify-center group">
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 group-hover:border-amber-400/40 transition-all duration-500">
                  <img
                    src="/src/assets/images/hero_burger_gourmet_1794335430387.jpg"
                    alt="Khawaja Gourmet Burger with cascading melted cheddar and smash patties"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle contrast gradient at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />

                  {/* Floating Price Tag on Burger */}
                  <div className="absolute top-4 right-4 bg-amber-400 text-gray-950 font-display font-black text-sm md:text-base px-4 py-2 rounded-xl shadow-xl shadow-black/40 flex items-center gap-1.5 backdrop-blur-sm">
                    <span className="text-xs font-semibold uppercase text-black/80">Only</span>
                    <span>Rs. 950</span>
                  </div>

                  {/* Floating Highlight Banner at base */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#16171b]/90 backdrop-blur-md border border-white/15 p-4 rounded-2xl flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-0.5">
                        <Flame className="w-3.5 h-3.5 fill-amber-400" />
                        <span>Chef's Masterpiece</span>
                      </div>
                      <div className="text-white font-display font-bold text-base md:text-lg">
                        Khawaja Special Burger
                      </div>
                      <div className="text-gray-400 text-xs line-clamp-1">
                        Double Beef Smash · Smoked Swiss · Molten Cheddar
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(heroFeaturedBurger, 1);
                        setIsCartOpen(true);
                      }}
                      className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-extrabold uppercase tracking-wide transition-all shadow-md shrink-0 cursor-pointer active:scale-95"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
