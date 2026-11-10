import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, UtensilsCrossed, Bike, ShoppingBag } from 'lucide-react';
import { SARGODHA_BRANCH } from '../data/menuData';

export const OutletsSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#16171b] border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Visit Or Order Direct</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Our Location
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Experience our sizzling gourmet smash burgers and crispy chicken fillets freshly prepared at our flagship branch in Sargodha.
          </p>
        </div>

        {/* Premium Single Branch Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1c1d22] rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-amber-400/40 shadow-2xl shadow-black/60 transition-all duration-300">
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-white/10">
              <div className="flex items-start gap-4">
                {/* Attractive Location Pin Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-400/10 shrink-0">
                  <MapPin className="w-7 h-7 text-amber-400" />
                </div>

                <div>
                  <div className="text-amber-400 text-xs font-black uppercase tracking-wider mb-1">
                    Sole Flagship Branch
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white mb-2">
                    {SARGODHA_BRANCH.branchName}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg font-medium leading-relaxed">
                    {SARGODHA_BRANCH.address}
                  </p>
                </div>
              </div>

              {/* Service Badges (Dine-In, Takeaway, Delivery) */}
              <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
                  Dine-In
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                  Takeaway
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">
                  <Bike className="w-3.5 h-3.5 text-amber-400" />
                  Fast Delivery
                </span>
              </div>
            </div>

            {/* Direct Contact Phone Line */}
            <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                  Direct Line & Order Hotline
                </span>
                <div className="text-2xl font-display font-black text-amber-400 font-mono tracking-tight mt-0.5">
                  03116007181
                </div>
              </div>
              <div className="text-xs text-gray-400 sm:text-right">
                Freshly prepared on order · Hot delivery straight to your doorstep in Sargodha
              </div>
            </div>

            {/* Three Functional Buttons: Call Branch, WhatsApp, Get Directions */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* 1. Call Branch Button */}
              <a
                href="tel:03116007181"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-bold border border-white/15 hover:border-amber-400/50 transition-all cursor-pointer active:scale-95 shadow-md"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Branch</span>
              </a>

              {/* 2. WhatsApp Button */}
              <a
                href="https://wa.me/923116007181?text=Hi%20Khawaja%20Burger%20Sargodha!%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-lg shadow-emerald-600/20 active:scale-95 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              {/* 3. Get Directions Button */}
              <a
                href={SARGODHA_BRANCH.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-sm font-black shadow-lg shadow-amber-400/20 active:scale-95 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
