import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, UtensilsCrossed, Bike, ShoppingBag } from 'lucide-react';
import { OUTLETS_DATA } from '../data/menuData';

export const OutletsSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#16171b] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            Visit Or Order Direct
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Our Branches & Timings
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Dine in our contemporary fast-food lounges, grab a quick takeaway, or get express doorstep delivery across all three cities.
          </p>
        </div>

        {/* 3 City Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OUTLETS_DATA.map(outlet => (
            <div
              key={outlet.city}
              className="bg-[#1c1d22] rounded-2xl p-7 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* City Title */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-2xl font-black text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <span>{outlet.city}</span>
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    {outlet.area}
                  </span>
                </div>

                {/* Address */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {outlet.address}
                </p>

                {/* Opening Hours */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 mb-6 text-sm text-gray-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[11px] text-gray-400 uppercase font-semibold">Opening Hours</div>
                    <div className="font-semibold text-white">{outlet.timings}</div>
                  </div>
                </div>

                {/* Available services */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                  <span className="flex items-center gap-1.5">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
                    Dine-In
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                    Takeaway
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bike className="w-3.5 h-3.5 text-amber-400" />
                    Delivery
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={`tel:${outlet.phone.replace(/\s+/g, '')}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Branch</span>
                </a>
                <a
                  href={`https://wa.me/${outlet.whatsapp}?text=Hi%20Khawaja%20Burger%20${outlet.city}!%20I%20would%20like%20to%20place%20an%20order.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
