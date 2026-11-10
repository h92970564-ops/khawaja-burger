import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem, CartItemOption } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity?: number, customization?: CartItemOption) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQty: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  discountCode: string;
  applyDiscountCode: (code: string) => boolean;
  removeDiscountCode: () => void;
  grandTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  selectedItemForCustomization: MenuItem | null;
  setSelectedItemForCustomization: (item: MenuItem | null) => void;
  isStoryOpen: boolean;
  setIsStoryOpen: (open: boolean) => void;
  generateWhatsAppLink: (customerInfo: { name: string; phone: string; address: string; city: string; notes?: string }) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('khawaja_burger_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [selectedItemForCustomization, setSelectedItemForCustomization] = useState<MenuItem | null>(null);
  const [discountCode, setDiscountCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);

  useEffect(() => {
    try {
      localStorage.setItem('khawaja_burger_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToCart = (item: MenuItem, quantity: number = 1, customization?: CartItemOption) => {
    const extrasTotal = customization?.extras?.reduce((sum, ext) => sum + ext.price, 0) || 0;
    const unitPrice = item.price + extrasTotal;

    // Create unique key based on item id + customizations
    const customizationKey = customization
      ? `${item.id}-${customization.spiceLevel || 'standard'}-${customization.extras.map(e => e.id).sort().join('-')}-${customization.notes || ''}`
      : `${item.id}-default`;

    setCart(prev => {
      const existingIndex = prev.findIndex(ci => ci.cartItemId === customizationKey);
      if (existingIndex > -1) {
        const next = [...prev];
        const existing = next[existingIndex];
        const updatedQty = existing.quantity + quantity;
        next[existingIndex] = {
          ...existing,
          quantity: updatedQty,
          totalPrice: unitPrice * updatedQty,
        };
        return next;
      } else {
        return [
          ...prev,
          {
            cartItemId: customizationKey,
            item,
            quantity,
            customization,
            totalPrice: unitPrice * quantity,
          },
        ];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev =>
      prev.map(ci => {
        if (ci.cartItemId === cartItemId) {
          const extrasTotal = ci.customization?.extras?.reduce((sum, ext) => sum + ext.price, 0) || 0;
          const unitPrice = ci.item.price + extrasTotal;
          return {
            ...ci,
            quantity: newQty,
            totalPrice: unitPrice * newQty,
          };
        }
        return ci;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    setDiscountCode('');
    setDiscountPercent(0);
  };

  const totalItems = cart.reduce((sum, ci) => sum + ci.quantity, 0);
  const subtotal = cart.reduce((sum, ci) => sum + ci.totalPrice, 0);

  // Delivery is Rs 120, or FREE if subtotal > Rs 1,500
  const deliveryFee = subtotal === 0 ? 0 : subtotal >= 1500 ? 0 : 120;
  const discount = Math.round((subtotal * discountPercent) / 100);
  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

  const applyDiscountCode = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'KHAWAJA10' || clean === 'BURGER10') {
      setDiscountCode(clean);
      setDiscountPercent(10);
      return true;
    }
    if (clean === 'HITSDIFFERENT' || clean === 'FEAST15') {
      setDiscountCode(clean);
      setDiscountPercent(15);
      return true;
    }
    return false;
  };

  const removeDiscountCode = () => {
    setDiscountCode('');
    setDiscountPercent(0);
  };

  const generateWhatsAppLink = (customerInfo: {
    name: string;
    phone: string;
    address: string;
    city: string;
    notes?: string;
  }) => {
    const phoneNumber = '923116007181'; // Khawaja Burger official WhatsApp hotline
    let text = `🍔 *NEW ORDER — KHAWAJA BURGER*\n`;
    text += `━━━━━━━━━━━━━━━━━━━\n`;
    text += `👤 *Customer:* ${customerInfo.name}\n`;
    text += `📞 *Phone:* ${customerInfo.phone}\n`;
    text += `📍 *Delivery Address:* ${customerInfo.address}, ${customerInfo.city}\n`;
    if (customerInfo.notes) {
      text += `📝 *Special Instructions:* ${customerInfo.notes}\n`;
    }
    text += `━━━━━━━━━━━━━━━━━━━\n`;
    text += `🛒 *ORDERED ITEMS:*\n`;

    cart.forEach((ci, idx) => {
      text += `${idx + 1}. *${ci.item.name}* (x${ci.quantity})\n`;
      text += `   Price: Rs. ${ci.totalPrice.toLocaleString()}\n`;
      if (ci.customization?.spiceLevel) {
        text += `   • Spice: ${ci.customization.spiceLevel}\n`;
      }
      if (ci.customization?.extras && ci.customization.extras.length > 0) {
        text += `   • Extras: ${ci.customization.extras.map(e => e.name).join(', ')}\n`;
      }
      if (ci.customization?.notes) {
        text += `   • Note: ${ci.customization.notes}\n`;
      }
    });

    text += `━━━━━━━━━━━━━━━━━━━\n`;
    text += `Subtotal: Rs. ${subtotal.toLocaleString()}\n`;
    if (discount > 0) {
      text += `Discount (${discountCode}): -Rs. ${discount.toLocaleString()}\n`;
    }
    text += `Delivery Fee: ${deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`}\n`;
    text += `*GRAND TOTAL: Rs. ${grandTotal.toLocaleString()}*\n`;
    text += `━━━━━━━━━━━━━━━━━━━\n`;
    text += `*Payment Method:* Cash on Delivery (COD)\n`;
    text += `Please confirm my order and share estimated preparation time. Thank you!`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        deliveryFee,
        discount,
        discountCode,
        applyDiscountCode,
        removeDiscountCode,
        grandTotal,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        selectedItemForCustomization,
        setSelectedItemForCustomization,
        isStoryOpen,
        setIsStoryOpen,
        generateWhatsAppLink,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
