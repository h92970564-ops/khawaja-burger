import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, PhoneCall } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Deals', href: '#deals' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121316]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          {/* Zone 1: Brand Wordmark / Logo */}
          <a href="#home" className="shrink-0 group">
            <Logo variant="light" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-amber-400 transition-colors whitespace-nowrap tracking-wide font-medium relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Cart */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Phone quick call (desktop) */}
            <a
              href="tel:03116007181"
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-amber-400 px-3 py-2 rounded-lg bg-white/5 border border-white/10 transition-colors"
              title="Call for Delivery"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>03116007181</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="View Shopping Cart"
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-amber-400/40 transition-all cursor-pointer group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:text-amber-400 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 animate-scale-in">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Primary Action Button: Yellow Order Now */}
            <a
              href="#menu"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-gray-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 active:scale-95 transition-all whitespace-nowrap shrink-0"
            >
              Order Now
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-5 border-t border-white/10 bg-[#16171b] rounded-2xl p-5 shadow-2xl">
            <div className="flex flex-col gap-4 text-base font-medium">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-200 hover:text-amber-400 py-1 transition-colors border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="#menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
                >
                  Order Now
                </a>
                <a
                  href="tel:03116007181"
                  className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  Order Hotline: 03116007181
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
