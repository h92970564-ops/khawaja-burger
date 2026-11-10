import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Navigation, MessageSquare, ArrowUp } from 'lucide-react';
import { SARGODHA_BRANCH } from '../data/menuData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e0f12] text-gray-400 border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Logo variant="light" showTagline={true} />
            
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
              Premium fast-food burger restaurant serving juicy hand-pressed smash patties, crunchy chicken fillets, and loaded sides crafted fresh daily.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { name: 'Instagram', icon: 'IG', href: '#' },
                { name: 'Facebook', icon: 'FB', href: '#' },
                { name: 'TikTok', icon: 'TT', href: '#' },
                { name: 'YouTube', icon: 'YT', href: '#' },
              ].map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-amber-400 hover:text-stone-950 text-gray-300 border border-white/10 hover:border-amber-400 transition-all flex items-center justify-center font-display font-bold text-xs"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Menu Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white text-base tracking-wide uppercase mb-4">
              Our Menu
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Khawaja Special</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Zinger Burger</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Beef Cheese Burger</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Double Patty Burger</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Crispy Chicken Burger</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Loaded Cheddar Fries</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Branch Location (3 cols) - Single Branch Only */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white text-base tracking-wide uppercase mb-4">
              Branch Location
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{SARGODHA_BRANCH.branchName}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{SARGODHA_BRANCH.address}</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={SARGODHA_BRANCH.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Hotline (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white text-base tracking-wide uppercase mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-[11px] uppercase font-semibold text-gray-500 block">Phone</span>
                <a
                  href="tel:03116007181"
                  className="flex items-center gap-2 text-gray-200 hover:text-amber-400 transition-colors mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-mono font-bold">03116007181</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase font-semibold text-gray-500 block">WhatsApp</span>
                <a
                  href="https://wa.me/923116007181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mt-0.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-mono font-bold">03116007181</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase font-semibold text-gray-500 block">Email</span>
                <a
                  href="mailto:orders@khawajaburger.pk"
                  className="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition-colors mt-0.5 text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>orders@khawajaburger.pk</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} KHAWAJA BURGER – Sargodha. All rights reserved. 100% Halal Certified Fast Food.
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-white transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-amber-400 transition-all flex items-center gap-1.5 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
