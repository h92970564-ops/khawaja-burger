import React from 'react';
import { ArrowRight, Flame, Sparkles, Check, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { SPECIAL_DEAL, POPULAR_MENU_ITEMS } from '../data/menuData';

export const SpecialOffersSection: React.FC = () => {
  const { addToCart, setIsCartOpen } = useCart();

  const handleOrderSpecialDeal = () => {
    // Add the Double Patty Burger and Loaded Fries to cart
    const doublePatty = POPULAR_MENU_ITEMS.find(i => i.id === 'double-patty-burger') || POPULAR_MENU_ITEMS[3];
    const loadedFries = POPULAR_MENU_ITEMS.find(i => i.id === 'loaded-fries') || POPULAR_MENU_ITEMS[5];
    
    // Add combo item
    addToCart({
      id: 'mega-feast-combo',
      name: 'Khawaja Mega Hunger Feast Combo',
      category: 'combos',
      categoryLabel: 'Special Deal',
      description: 'Double Patty Smash Burger + Full Loaded Cheddar Fries + Chilled Drink (500ml) + 2 Signature Dips.',
      price: SPECIAL_DEAL.dealPrice,
      originalPrice: SPECIAL_DEAL.originalPrice,
      rating: 5.0,
      reviewsCount: 420,
      image: SPECIAL_DEAL.image,
      badge: 'Save Rs. 400',
    }, 1);

    setIsCartOpen(true);
  };

  return (
    <section id="deals" className="py-20 bg-[#16171b] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-amber-500/15 via-orange-600/15 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card Container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1f2026] via-[#1a1b20] to-[#141518] border-2 border-amber-400/30 p-8 sm:p-12 lg:p-14 shadow-2xl shadow-black/80">
          
          {/* Decorative Corner Ribbon */}
          <div className="absolute -top-1 -right-1 overflow-hidden w-36 h-36 pointer-events-none">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-stone-950 font-black text-xs py-1.5 w-52 text-center transform rotate-45 translate-y-7 shadow-lg uppercase tracking-wider">
              Limited Offer
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-4">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Special Promotional Combo</span>
              </div>

              {/* Main Required Headline */}
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-4">
                BIG HUNGER? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  BIGGER BURGERS!
                </span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed max-w-xl">
                Ready to conquer serious hunger? Treat yourself to our flagship Double Patty Smash Burger loaded with grilled lace edges, accompanied by our hot molten cheddar Loaded Fries, a chilled cold drink, and two secret dipping sauces.
              </p>

              {/* What's Included */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-lg">
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>1x Double Patty Smash Burger</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>1x Full Loaded Cheddar Fries</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>1x Chilled Drink (500ml)</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>2x Secret House Dips</span>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 uppercase font-semibold">Deal Price</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold">
                      Save Rs. 400
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-amber-400 font-mono tabular-nums">
                      Rs. 1,450
                    </span>
                    <span className="text-base text-gray-500 line-through font-mono">
                      Rs. 1,850
                    </span>
                  </div>
                </div>

                {/* Yellow Order Now button */}
                <button
                  onClick={handleOrderSpecialDeal}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-black text-stone-950 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-400/30 hover:shadow-amber-400/50 active:scale-95 transition-all cursor-pointer group"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl group">
                <img
                  src={SPECIAL_DEAL.image}
                  alt="Big Hunger Bigger Burgers special deal featuring double patty burger"
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-amber-400 text-xs font-bold uppercase">Family & Hunger Deal</div>
                    <div className="text-white font-display font-bold text-base">Khawaja Feast Box</div>
                  </div>
                  <span className="text-xs font-semibold text-gray-300 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    28 mins delivery
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
