import React, { useState } from 'react';
import { X, CheckCircle, MessageSquare, Phone, MapPin, User, FileText, Bike, CreditCard, Banknote, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    subtotal,
    deliveryFee,
    discount,
    discountCode,
    grandTotal,
    clearCart,
    generateWhatsAppLink,
  } = useCart();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Sargodha');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'bank'>('cod');
  const [notes, setNotes] = useState('');
  
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address) {
      alert('Please fill in your name, phone number, and delivery address.');
      return;
    }

    const generatedId = `KB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setOrderSubmitted(true);

    // Launch celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#FACC15', '#EA580C', '#FFFFFF'],
    });
  };

  const handleOpenWhatsAppOrder = () => {
    const waUrl = generateWhatsAppLink({
      name: fullName,
      phone,
      address,
      city,
      notes,
    });
    window.open(waUrl, '_blank');
  };

  const handleCloseAndReset = () => {
    clearCart();
    setOrderSubmitted(false);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => {
          if (!orderSubmitted) setIsCheckoutOpen(false);
        }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative w-full max-w-xl bg-[#18191f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl text-white my-8 z-10">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#121316]">
            <div>
              <h3 className="font-display font-black text-xl text-white">
                {orderSubmitted ? 'Order Confirmed!' : 'Checkout & Express Delivery'}
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                {orderSubmitted ? 'Your juicy burger order is in the kitchen' : 'Average hot delivery time: 28 minutes'}
              </p>
            </div>

            {!orderSubmitted && (
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close checkout"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {orderSubmitted ? (
            /* Post-Order Success Screen with Simulated Live Tracking & WhatsApp Confirmation */
            <div className="p-8 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Order ID: {orderId}
                </span>
                <h4 className="font-display font-black text-2xl text-white mt-3">
                  Thank You, {fullName}!
                </h4>
                <p className="text-gray-300 text-sm mt-1 max-w-sm mx-auto">
                  We've received your order and our grill master is already searing your patties!
                </p>
              </div>

              {/* Live Tracking Progress Bar */}
              <div className="bg-[#121316] rounded-2xl p-5 border border-white/5 text-left space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-gray-400">
                  <span>Order Status</span>
                  <span className="text-amber-400">Estimated Arrival: 25-30 Mins</span>
                </div>

                <div className="relative pt-2">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full w-2/4 animate-pulse" />
                  </div>
                  <div className="grid grid-cols-4 text-[10px] text-gray-400 mt-2 text-center">
                    <span className="text-amber-400 font-bold">Received</span>
                    <span className="text-amber-400 font-bold">On Grill 🔥</span>
                    <span>Dispatched</span>
                    <span>Delivered</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 text-xs text-gray-300 space-y-1">
                  <div><strong>Delivery to:</strong> {address}, {city}</div>
                  <div><strong>Total to pay:</strong> <span className="text-amber-400 font-bold">Rs. {grandTotal.toLocaleString()}</span> (Cash on Delivery)</div>
                </div>
              </div>

              {/* Direct WhatsApp Confirmation Button */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleOpenWhatsAppOrder}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-display font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/20 active:scale-95 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Order to Kitchen via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleCloseAndReset}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Return to Home
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmitOrder} className="p-6 space-y-5">
              
              {/* Customer Info */}
              <div className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Daniyal Khawaja"
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#121316] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      WhatsApp / Mobile *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="03116007181"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#121316] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Delivery City *
                    </label>
                    <div className="w-full px-3.5 py-2.5 rounded-xl bg-[#121316] border border-white/10 text-amber-400 font-bold text-sm flex items-center justify-between">
                      <span>Sargodha</span>
                      <span className="text-xs text-gray-400 font-normal">17 Block & Area</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Delivery Address *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <textarea
                      required
                      rows={2}
                      placeholder="House / Apartment #, Street, Block, Area landmark"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#121316] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Order / Rider Instructions (Optional)
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Call upon arrival, leave at gate"
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#121316] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                      paymentMethod === 'cod'
                        ? 'bg-amber-400/15 border-amber-400 text-white'
                        : 'bg-[#121316] border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Banknote className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="text-xs font-bold">Cash on Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-amber-400/15 border-amber-400 text-white'
                        : 'bg-[#121316] border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="text-xs font-bold">Card on Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                      paymentMethod === 'bank'
                        ? 'bg-amber-400/15 border-amber-400 text-white'
                        : 'bg-[#121316] border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <ShieldCheck className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="text-xs font-bold">Online Transfer</span>
                  </button>
                </div>
              </div>

              {/* Order Breakdown */}
              <div className="p-4 rounded-2xl bg-[#121316] border border-white/10 text-xs space-y-1.5">
                <div className="flex justify-between text-gray-400">
                  <span>Items Total ({cart.reduce((s, i) => s + i.quantity, 0)})</span>
                  <span className="font-mono text-white">Rs. {subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount ({discountCode})</span>
                    <span className="font-mono">-Rs. {discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-400">
                  <span>Fast Delivery</span>
                  <span className="font-mono text-white">
                    {deliveryFee === 0 ? <span className="text-emerald-400 font-bold">FREE</span> : `Rs. ${deliveryFee}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between text-base font-bold text-white">
                  <span className="font-display">Total Payable</span>
                  <span className="font-display text-amber-400 font-mono text-xl tabular-nums">
                    Rs. {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-display font-black text-sm text-stone-950 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-400/25 active:scale-95 transition-all cursor-pointer"
                >
                  <Bike className="w-5 h-5 stroke-[2.5]" />
                  <span>Confirm Order · Rs. {grandTotal.toLocaleString()}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (!fullName || !phone || !address) {
                      alert('Please enter your Name, Phone, and Address first.');
                      return;
                    }
                    handleOpenWhatsAppOrder();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/30 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct Order via WhatsApp</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};
