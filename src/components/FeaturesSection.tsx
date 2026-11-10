import React from 'react';
import { Leaf, ShieldCheck, Flame, Zap, CheckCircle2 } from 'lucide-react';
import { FEATURES_DATA } from '../data/menuData';

export const FeaturesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf className="w-7 h-7 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-7 h-7 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-7 h-7 text-amber-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#16171b] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            Why Foodies Love Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase" style={{ textWrap: 'balance' }}>
            The Khawaja Standard
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
            We don’t cut corners. From our artisanal daily bake to our flame-seared prime beef, every bite is pure culinary excellence.
          </p>
        </div>

        {/* 4 Attractive Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURES_DATA.map((feature, idx) => (
            <div
              key={feature.id}
              className="group relative bg-[#1c1d22] hover:bg-[#23252c] rounded-2xl p-7 border border-white/5 hover:border-amber-400/40 transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Icon Badge */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400/15 to-orange-500/10 border border-amber-400/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-amber-400/40 transition-all duration-300">
                  {getIcon(feature.icon)}
                </div>

                {/* Index & Subtitle */}
                <div className="text-amber-400/90 text-xs font-bold uppercase tracking-wider mb-2">
                  {feature.subtitle}
                </div>

                {/* Card Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Micro Indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 group-hover:text-amber-400/80 transition-colors">
                <span>Certified Standard</span>
                <span className="font-mono font-semibold">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
