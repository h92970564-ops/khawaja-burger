/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { PopularMenuSection } from './components/PopularMenuSection';
import { SpecialOffersSection } from './components/SpecialOffersSection';
import { ReviewsSection } from './components/ReviewsSection';
import { OutletsSection } from './components/OutletsSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CheckoutModal } from './components/CheckoutModal';
import { StoryModal } from './components/StoryModal';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const MobileFloatingCartBar: React.FC = () => {
  const { totalItems, grandTotal, setIsCartOpen } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-30 md:hidden animate-fade-in">
      <button
        onClick={() => setIsCartOpen(true)}
        className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-display font-black text-sm shadow-2xl shadow-black/80 border border-amber-300 cursor-pointer active:scale-98 transition-transform"
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-stone-950 text-amber-400 flex items-center justify-center font-mono font-bold text-xs">
            {totalItems}
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-xs uppercase tracking-wider font-extrabold text-stone-900">View Cart</span>
            <span className="text-base font-black font-mono tabular-nums">Rs. {grandTotal.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider">
          <span>Checkout</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </div>
      </button>
    </div>
  );
};

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#121316] text-[#F3F4F6] flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <PopularMenuSection />
        <SpecialOffersSection />
        <ReviewsSection />
        <OutletsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-overs */}
      <CartDrawer />
      <ProductDetailModal />
      <CheckoutModal />
      <StoryModal />

      {/* Mobile Floating Sticky Cart Bar */}
      <MobileFloatingCartBar />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}
