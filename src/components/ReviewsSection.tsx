import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA } from '../data/menuData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#121316] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            Real Reviews From Real Foodies
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Taste That Speaks For Itself
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            With a 4.9★ rating across 15,000+ orders, see why burger connoisseurs call Khawaja Burger their #1 go-to spot.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_DATA.map(review => (
            <div
              key={review.id}
              className="bg-[#18191f] rounded-2xl p-7 border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Rating Stars & City */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-0.5 rounded-full">
                    {review.city}
                  </span>
                </div>

                {/* Comment quote */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Verified Tag */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold text-sm flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-gray-400 text-xs mt-0.5">
                    Ordered: <span className="text-amber-400/90">{review.orderedItem}</span>
                  </div>
                </div>
                <span className="text-[11px] text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
