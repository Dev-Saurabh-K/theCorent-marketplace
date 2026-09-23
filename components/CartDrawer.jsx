"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useStore } from "@/store/useStore";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Leaf,
} from "lucide-react";

export default function CartDrawer() {
  const cart = useStore((state) => state.cart);
  const isCartOpen = useStore((state) => state.isCartOpen);
  const closeCart = useStore((state) => state.closeCart);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Free shipping over $75
  const freeShippingThreshold = 75;
  const shippingRemaining = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgress = Math.min(
    100,
    (subtotal / freeShippingThreshold) * 100
  );
  const shippingCost = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 6.5;
  const finalTotal = subtotal + shippingCost;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-heading"
    >
      {/* Backdrop Scrim */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream-50 text-charcoal-900 shadow-2xl flex flex-col border-l border-cream-300 animate-slide-left">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-cream-300 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-terracotta-600" />
              <h2
                id="cart-drawer-heading"
                className="font-serif text-lg font-bold text-charcoal-900"
              >
                Artisan Basket
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-cream-200 text-charcoal-700 font-semibold">
                {totalItemCount} {totalItemCount === 1 ? "item" : "items"}
              </span>
            </div>

            <button
              type="button"
              onClick={closeCart}
              className="p-2 rounded-xl text-charcoal-400 hover:text-charcoal-900 hover:bg-cream-100 transition-colors focus-ring"
              aria-label="Close basket"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3.5 bg-sage-50 border-b border-sage-200">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-sage-800 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-sage-600" />
                {shippingRemaining === 0 ? (
                  <span>Unlocked Free Carbon-Neutral Shipping!</span>
                ) : (
                  <span>
                    Add <strong>${shippingRemaining.toFixed(2)}</strong> for Free Shipping
                  </span>
                )}
              </span>
              <span className="text-[11px] font-bold text-sage-700">
                {Math.round(shippingProgress)}%
              </span>
            </div>
            <div className="w-full bg-sage-200 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-sage-600 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              /* Empty Basket State */
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center text-charcoal-400">
                  <ShoppingBag className="w-8 h-8 text-charcoal-500" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-charcoal-900">
                    Your basket is empty
                  </h3>
                  <p className="text-xs text-charcoal-500 max-w-xs">
                    Support indigenous craftspeople by exploring our collection of hand-loomed
                    throws, jute bags, and terracotta pottery.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    closeCart();
                    const catalog = document.getElementById("product-catalog");
                    if (catalog) catalog.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-terracotta-600 text-white text-xs font-semibold hover:bg-terracotta-700 transition-colors shadow-sm focus-ring"
                >
                  Start Exploring Crafts
                </button>
              </div>
            ) : (
              /* Populated Cart Items */
              cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3.5 bg-white rounded-2xl border border-cream-200 shadow-xs relative group"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-cream-100 border border-cream-200">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  {/* Info & Quantity Stepper */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-xs font-bold text-charcoal-900 truncate leading-snug">
                          {product.title}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(product.id)}
                          className="text-charcoal-300 hover:text-terracotta-600 p-0.5 rounded transition-colors"
                          aria-label={`Remove ${product.title} from basket`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-sage-700 font-medium">
                        By {product.artisan.name}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-cream-300 rounded-lg bg-cream-50">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, -1)}
                          className="p-1 text-charcoal-600 hover:text-charcoal-900 disabled:opacity-30 focus-ring"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-charcoal-800">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, 1)}
                          className="p-1 text-charcoal-600 hover:text-charcoal-900 focus-ring"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-serif text-sm font-bold text-charcoal-900">
                          ${(product.price * quantity).toFixed(2)}
                        </span>
                        {quantity > 1 && (
                          <span className="block text-[10px] text-charcoal-400">
                            (${product.price.toFixed(2)} each)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout CTA */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-cream-300 bg-white space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-charcoal-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-charcoal-800">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-charcoal-600">
                  <span className="flex items-center gap-1">
                    <Leaf className="w-3 h-3 text-sage-600" />
                    Carbon-Neutral Shipping
                  </span>
                  <span className="font-semibold text-charcoal-800">
                    {shippingCost === 0 ? (
                      <span className="text-sage-700 uppercase font-bold">Free</span>
                    ) : (
                      `$${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-charcoal-600">
                  <span>Artisan Fair Trade Fund</span>
                  <span className="text-sage-600 font-semibold">Included 100%</span>
                </div>
                <div className="pt-2 border-t border-cream-200 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-charcoal-900">Estimated Total</span>
                  <span className="font-serif text-xl font-bold text-charcoal-900">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={() => {
                  alert(
                    "Checkout Demo: In production, this securely directs to Stripe/Shopify headless checkout with your selected artisan goods!"
                  );
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 active:scale-98 text-white font-semibold text-sm tracking-wide shadow-md shadow-terracotta-600/20 flex items-center justify-center gap-2 transition-all focus-ring"
              >
                <span>Proceed to Conscious Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Guarantees */}
              <div className="flex items-center justify-center gap-4 text-[11px] text-charcoal-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sage-600" />
                  Secure Fair-Trade Pay
                </span>
                <span>•</span>
                <span>30-Day Guild Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
