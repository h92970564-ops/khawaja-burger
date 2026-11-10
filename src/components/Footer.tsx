import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';

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

          {/* Col 2: Quick Menu Links (2 cols) */}
          <div className="lg:col-span-2">
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

          {/* Col 3: Outlets & Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white text-base tracking-wide uppercase mb-4">
              Opening Hours
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Monday – Sunday</div>
                  <div className="text-gray-400 text-xs">12:00 PM – 02:00 AM Daily</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Flagship Locations</div>
                  <div className="text-gray-400 text-xs">Lahore · Karachi · Islamabad</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Hotline (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white text-base tracking-wide uppercase mb-4">
              Order Hotline
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+923001234567"
                className="flex items-center gap-2.5 text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono">+92 300 123 4567</span>
              </a>
              <a
                href="mailto:orders@khawajaburger.pk"
                className="flex items-center gap-2.5 text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>orders@khawajaburger.pk</span>
              </a>
              
              <div className="mt-4 p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs text-amber-300">
                🚀 Free delivery available on orders above Rs. 1,500!
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} KHAWAJA BURGER. All rights reserved. 100% Halal Certified Fast Food.
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
