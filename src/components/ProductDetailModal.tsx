import React, { useState } from 'react';
import { X, Star, Plus, Minus, Flame, Sparkles, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { AVAILABLE_EXTRAS } from '../data/menuData';
import { CustomizationOption } from '../types';

export const ProductDetailModal: React.FC = () => {
  const { selectedItemForCustomization, setSelectedItemForCustomization, addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [spiceLevel, setSpiceLevel] = useState<'Mild' | 'Medium' | 'Hot' | 'Extra Fiery'>('Medium');
  const [selectedExtras, setSelectedExtras] = useState<CustomizationOption[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!selectedItemForCustomization) return null;

  const item = selectedItemForCustomization;

  const handleToggleExtra = (extra: CustomizationOption) => {
    setSelectedExtras(prev => {
      const exists = prev.some(e => e.id === extra.id);
      if (exists) {
        return prev.filter(e => e.id !== extra.id);
      } else {
        return [...prev, extra];
      }
    });
  };

  const extrasTotal = selectedExtras.reduce((sum, ext) => sum + ext.price, 0);
  const unitPrice = item.price + extrasTotal;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart(item, quantity, {
      spiceLevel,
      extras: selectedExtras,
      notes: specialInstructions.trim() ? specialInstructions.trim() : undefined,
    });
    setSelectedItemForCustomization(null);
    // Reset modal state
    setQuantity(1);
    setSelectedExtras([]);
    setSpecialInstructions('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setSelectedItemForCustomization(null)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative w-full max-w-xl bg-[#18191f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl text-white my-8 z-10">
          
          {/* Close Button */}
          <button
            onClick={() => setSelectedItemForCustomization(null)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Image Header */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#121316]">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18191f] via-transparent to-black/30" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-amber-400 text-stone-950 shadow-md">
                {item.categoryLabel}
              </span>
              {item.isSpicy && (
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold text-red-400 bg-red-950/80 border border-red-500/30 backdrop-blur-sm flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-red-400" />
                  Spicy
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="absolute bottom-3 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs text-amber-400 border border-white/10">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold">{item.rating.toFixed(1)}</span>
              <span className="text-gray-400">({item.reviewsCount} reviews)</span>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                  {item.name}
                </h3>
                <span className="font-display font-black text-2xl text-amber-400 font-mono tabular-nums shrink-0">
                  Rs. {item.price.toLocaleString()}
                </span>
              </div>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Spice Level Selector */}
            {item.category !== 'sides' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                  Choose Spice Level
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['Mild', 'Medium', 'Hot', 'Extra Fiery'] as const).map(lvl => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSpiceLevel(lvl)}
                      className={`py-2 px-1 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        spiceLevel === lvl
                          ? 'bg-amber-400 text-stone-950 border-amber-400 shadow-md shadow-amber-400/20'
                          : 'bg-[#141518] text-gray-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Customization Extras */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                Add Delicious Extras
              </label>
              <div className="space-y-2">
                {AVAILABLE_EXTRAS.map(extra => {
                  const isChecked = selectedExtras.some(e => e.id === extra.id);
                  return (
                    <div
                      key={extra.id}
                      onClick={() => handleToggleExtra(extra)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-amber-400/10 border-amber-400/50 text-white'
                          : 'bg-[#141518] border-white/5 hover:border-white/15 text-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-amber-400 border-amber-400 text-stone-950'
                              : 'border-gray-500 bg-transparent'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-sm font-medium">{extra.name}</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-400 tabular-nums">
                        +Rs. {extra.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Special Preparation Notes
              </label>
              <input
                type="text"
                placeholder="e.g. Extra toasted bun, sauce on the side, no onions..."
                value={specialInstructions}
                onChange={e => setSpecialInstructions(e.target.value)}
                maxLength={100}
                className="w-full px-4 py-2.5 rounded-xl bg-[#141518] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            {/* Quantity and Submit Row */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Quantity stepper */}
              <div className="flex items-center gap-3 bg-[#141518] px-3 py-2 rounded-xl border border-white/10">
                <span className="text-xs text-gray-400 uppercase font-semibold">Qty:</span>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-white cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-sm font-bold text-white w-6 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-white cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Order Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-display font-black text-sm text-stone-950 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-400/25 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Add to Order · Rs. {totalPrice.toLocaleString()}</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
