import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, MessageSquare, Check, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    deliveryFee,
    discount,
    discountCode,
    applyDiscountCode,
    removeDiscountCode,
    grandTotal,
    setIsCheckoutOpen,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const success = applyDiscountCode(inputCode);
    if (success) {
      setCouponSuccess(true);
      setCouponError('');
      setInputCode('');
      setTimeout(() => setCouponSuccess(false), 3000);
    } else {
      setCouponError('Invalid code. Try "KHAWAJA10" or "HITSDIFFERENT"');
      setCouponSuccess(false);
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#16171b] border-l border-white/10 text-white flex flex-col shadow-2xl">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#121316]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-white">Your Order</h3>
                <span className="text-xs text-gray-400">
                  {cart.length === 0 ? 'Empty cart' : `${cart.reduce((s, i) => s + i.quantity, 0)} items selected`}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body: Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 mb-4">
                  <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  Your cart is hungry!
                </h4>
                <p className="text-gray-400 text-sm max-w-xs mb-6">
                  Explore our juicy smash burgers, crispy zingers, and loaded cheddar fries.
                </p>
                <a
                  href="#menu"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm shadow-lg shadow-amber-400/20 active:scale-95 transition-all"
                >
                  Explore Menu
                </a>
              </div>
            ) : (
              <>
                {/* Clear Cart Button */}
                <div className="flex items-center justify-between pb-2 border-b border-white/5 text-xs text-gray-400">
                  <span>Selected Items</span>
                  <button
                    onClick={clearCart}
                    className="text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                </div>

                {cart.map(item => (
                  <div
                    key={item.cartItemId}
                    className="bg-[#1c1d22] rounded-xl p-3.5 border border-white/5 flex gap-3.5 items-start group hover:border-amber-400/30 transition-colors"
                  >
                    {/* Thumbnail */}
                    <img
                      src={item.item.image}
                      alt={item.item.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-lg object-cover shrink-0 border border-white/10"
                    />

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="font-display font-bold text-sm text-white truncate">
                          {item.item.name}
                        </h5>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-gray-500 hover:text-red-400 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Customization extras details */}
                      {item.customization && (
                        <div className="text-[11px] text-gray-400 mt-0.5 space-y-0.5">
                          {item.customization.spiceLevel && (
                            <div>Spice: <span className="text-amber-400 font-medium">{item.customization.spiceLevel}</span></div>
                          )}
                          {item.customization.extras && item.customization.extras.length > 0 && (
                            <div className="line-clamp-1">
                              +{item.customization.extras.map(e => e.name).join(', ')}
                            </div>
                          )}
                          {item.customization.notes && (
                            <div className="text-amber-300/80 italic line-clamp-1">
                              Note: {item.customization.notes}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Price and Quantity Stepper */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                        <span className="font-mono font-bold text-sm text-amber-400 tabular-nums">
                          Rs. {item.totalPrice.toLocaleString()}
                        </span>

                        <div className="flex items-center gap-2 bg-[#121316] rounded-lg p-1 border border-white/10">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="w-6 h-6 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs font-bold text-white w-5 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="w-6 h-6 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo Code Input */}
                <div className="pt-2">
                  {discountCode ? (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-400">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        <span>Code applied: <strong>{discountCode}</strong> (saved Rs. {discount.toLocaleString()})</span>
                      </div>
                      <button
                        onClick={removeDiscountCode}
                        className="text-gray-400 hover:text-white text-xs underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Promo code (e.g. KHAWAJA10)"
                          value={inputCode}
                          onChange={e => {
                            setInputCode(e.target.value);
                            setCouponError('');
                          }}
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#1c1d22] border border-white/10 text-white placeholder-gray-500 text-xs uppercase focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold border border-white/10 hover:border-amber-400/40 transition-colors cursor-pointer"
                      >
                        Apply
                      </button>
                    </form>
                  )}
                  {couponError && (
                    <p className="text-red-400 text-[11px] mt-1 pl-1">{couponError}</p>
                  )}
                  {couponSuccess && (
                    <p className="text-emerald-400 text-[11px] mt-1 pl-1">Discount applied successfully!</p>
                  )}
                </div>

                {/* Free Delivery Progress */}
                <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs">
                  {subtotal >= 1500 ? (
                    <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>You qualify for FREE Delivery!</span>
                    </div>
                  ) : (
                    <div className="text-gray-300">
                      Add <span className="font-bold text-amber-400">Rs. {(1500 - subtotal).toLocaleString()}</span> more for <span className="font-bold text-white">FREE Delivery</span>!
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer: Totals & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#121316] space-y-3">
              <div className="space-y-1.5 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-white font-medium">Rs. {subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span className="font-mono">-Rs. {discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-mono text-white font-medium">
                    {deliveryFee === 0 ? <span className="text-emerald-400 font-bold">FREE</span> : `Rs. ${deliveryFee}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between text-base font-bold text-white">
                  <span className="font-display">Grand Total</span>
                  <span className="font-display text-amber-400 font-mono text-xl tabular-nums">
                    Rs. {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Checkout Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-display font-black text-sm text-stone-950 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-400/20 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Cash on Delivery (COD) · Fast Doorstep Delivery</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
