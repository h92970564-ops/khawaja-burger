import React from 'react';
import { X, Award, Flame, Utensils, ShieldCheck, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const StoryModal: React.FC = () => {
  const { isStoryOpen, setIsStoryOpen } = useCart();

  if (!isStoryOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setIsStoryOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-[#FAF6EE] text-[#121316] rounded-3xl overflow-hidden shadow-2xl my-8 z-10 border-4 border-amber-400/20">
          
          {/* Close button */}
          <button
            onClick={() => setIsStoryOpen(false)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-900/10 hover:bg-stone-900/20 text-stone-800 transition-colors cursor-pointer"
            aria-label="Close story"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Banner */}
          <div className="relative h-48 bg-[#121316] text-white p-8 flex flex-col justify-end">
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>The Khawaja Legacy</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
              The Taste You Will Never Forget
            </h3>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div>
              <h4 className="font-display font-bold text-lg text-stone-900 mb-2">
                Our Genesis & Relentless Obsession
              </h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                Founded with a fierce passion to redefine the local burger landscape, <strong>KHAWAJA BURGER</strong> set out to bridge the gap between quick, convenient street fast food and artisanal gourmet gastropubs. We believed that fast service shouldn't mean industrial frozen patties or stale buns.
              </p>
            </div>

            {/* 3 Core Secrets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-300">
              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
                <Flame className="w-6 h-6 text-amber-500 mb-2" />
                <h5 className="font-display font-bold text-sm text-stone-900">Custom Smash Blend</h5>
                <p className="text-xs text-stone-600 mt-1">
                  80/20 prime halal chuck & brisket ratio, coarsely ground and smashed super-thin for crispy caramelized edges.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
                <Utensils className="w-6 h-6 text-amber-500 mb-2" />
                <h5 className="font-display font-bold text-sm text-stone-900">Golden Brioche</h5>
                <p className="text-xs text-stone-600 mt-1">
                  Enriched with pure butter and organic eggs, baked fresh at 5:00 AM daily in our dedicated ovens.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-amber-500 mb-2" />
                <h5 className="font-display font-bold text-sm text-stone-900">The Secret Drip</h5>
                <p className="text-xs text-stone-600 mt-1">
                  A 14-ingredient secret sauce blend aged 24 hours to develop that umami-packed signature punch.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg text-stone-900 mb-2">
                Our Halal & Hygiene Promise
              </h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                Every ingredient from our farm partners is 100% Halal certified, rigorously inspected, and stored at strict temperatures. We take pride in our open-view kitchens where you can watch our chefs sear and assemble every master burger with surgical care.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center justify-between border-t border-stone-300">
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>Crafted with love for burger fans across Pakistan</span>
              </div>

              <button
                type="button"
                onClick={() => setIsStoryOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Got It, Let's Eat!
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
