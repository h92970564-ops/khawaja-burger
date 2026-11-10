import React, { useState } from 'react';
import { Star, Plus, Flame, SlidersHorizontal, Search, Check } from 'lucide-react';
import { POPULAR_MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

export const PopularMenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const { addToCart, setSelectedItemForCustomization } = useCart();

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'beef', label: 'Gourmet Beef' },
    { id: 'chicken', label: 'Crispy Chicken' },
    { id: 'sides', label: 'Loaded Sides' },
  ];

  const filteredItems = POPULAR_MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuickAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(item, 1);
    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1500);
  };

  return (
    <section id="menu" className="py-24 bg-[#121316] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Flame className="w-4 h-4 fill-amber-400" />
              <span>Crowd Favorites</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              Popular Menu
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              Freshly grilled on order with 100% prime cuts and artisanal ingredients. Choose your craving below.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search burgers, fries..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1c1d22] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filters (Interactive Filter Controls with clean segmented buttons per §1.A) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-stone-950 shadow-lg shadow-amber-400/20'
                  : 'bg-[#1c1d22] text-gray-300 hover:text-white hover:bg-[#25272e] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Popular Product Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#16171b] rounded-2xl border border-white/5 p-8">
            <p className="text-gray-300 text-lg font-bold">No menu items match your search.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-amber-400 text-black text-sm font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => {
              const isAdded = recentlyAddedId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItemForCustomization(item)}
                  className="group bg-[#1a1b20] hover:bg-[#202128] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
                >
                  {/* Food Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#121316]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b20] via-transparent to-transparent opacity-80" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      {item.badge ? (
                        <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-amber-400 text-stone-950 shadow-md">
                          {item.badge}
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-medium text-gray-300 bg-black/60 backdrop-blur-md border border-white/10">
                          {item.categoryLabel}
                        </span>
                      )}

                      {/* Prep time or spicy tag */}
                      {item.isSpicy && (
                        <span className="px-2.5 py-1 rounded-lg text-xs font-bold text-red-400 bg-red-950/80 border border-red-500/30 backdrop-blur-sm flex items-center gap-1">
                          <Flame className="w-3 h-3 fill-red-400" />
                          Spicy
                        </span>
                      )}
                    </div>

                    {/* Star Rating Overlay */}
                    <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{item.rating.toFixed(1)}</span>
                      <span className="text-gray-400 font-normal">({item.reviewsCount})</span>
                    </div>

                    {/* Customize hover prompt */}
                    <div className="absolute bottom-3 right-3 hidden group-hover:flex items-center gap-1 text-[11px] font-semibold text-gray-300 bg-black/70 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                      <SlidersHorizontal className="w-3 h-3 text-amber-400" />
                      <span>Customize</span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Product Name */}
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Card Footer: Price & Add to Cart button */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                      {/* Price in PKR */}
                      <div className="flex flex-col">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                          Price (PKR)
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display font-black text-2xl text-amber-400 font-mono tabular-nums">
                            Rs. {item.price.toLocaleString()}
                          </span>
                          {item.originalPrice && (
                            <span className="text-xs text-gray-500 line-through font-mono">
                              Rs. {item.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={e => handleQuickAdd(item, e)}
                        className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer shrink-0 ${
                          isAdded
                            ? 'bg-emerald-500 text-white'
                            : 'bg-amber-400 hover:bg-amber-300 text-stone-950 shadow-amber-400/20 hover:shadow-amber-400/30'
                        }`}
                        aria-label={`Add ${item.name} to cart`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4 stroke-[2.5]" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
