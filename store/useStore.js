import { create } from "zustand";

export const useStore = create((set, get) => ({
  // Cart state
  cart: [],
  isCartOpen: false,

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existingIndex = state.cart.findIndex(
        (item) => item.product.id === product.id
      );

      let updatedCart;
      if (existingIndex > -1) {
        updatedCart = state.cart.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedCart = [...state.cart, { product, quantity }];
      }

      return {
        cart: updatedCart,
        isCartOpen: true,
      };
    });

    get().showToast(`Added "${product.title}" to your basket`, "success");
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    }));
    get().showToast("Item removed from basket", "info");
  },

  updateQuantity: (productId, delta) => {
    set((state) => {
      const updatedCart = state.cart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);

      return { cart: updatedCart };
    });
  },

  clearCart: () => set({ cart: [] }),

  // Wishlist state
  wishlist: [],
  toggleWishlist: (product) => {
    set((state) => {
      const exists = state.wishlist.some((item) => item.id === product.id);
      if (exists) {
        get().showToast(`Removed "${product.title}" from saved crafts`, "info");
        return {
          wishlist: state.wishlist.filter((item) => item.id !== product.id),
        };
      } else {
        get().showToast(`Saved "${product.title}" to your craft wishlist`, "success");
        return {
          wishlist: [...state.wishlist, product],
        };
      }
    });
  },

  // Quick View Modal
  quickViewProduct: null,
  setQuickViewProduct: (product) => set({ quickViewProduct: product }),
  closeQuickView: () => set({ quickViewProduct: null }),

  // Search & Filter State
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  selectedCategory: "all",
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  selectedPriceRange: "all",
  setSelectedPriceRange: (range) => set({ selectedPriceRange: range }),

  sortBy: "featured",
  setSortBy: (sort) => set({ sortBy: sort }),

  sustainableOnly: false,
  toggleSustainableOnly: () =>
    set((state) => ({ sustainableOnly: !state.sustainableOnly })),

  resetFilters: () =>
    set({
      searchQuery: "",
      selectedCategory: "all",
      selectedPriceRange: "all",
      sortBy: "featured",
      sustainableOnly: false,
    }),

  // Toast Notification
  toast: null,
  showToast: (message, type = "success") => {
    const id = Date.now();
    set({ toast: { id, message, type } });
    setTimeout(() => {
      if (get().toast?.id === id) {
        set({ toast: null });
      }
    }, 3500);
  },
  hideToast: () => set({ toast: null }),
}));
