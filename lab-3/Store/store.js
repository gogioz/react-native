import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex((i) => i.id === item.id);

      if (existingItemIndex !== -1) {
        return {
          cart: state.cart.map((i, index) =>
            index === existingItemIndex
              ? { ...i, quantity: (i.quantity || 1) + 1 }
              : i
          ),
        };
      }

      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .filter((item) => (item.id === id ? item.quantity > 1 : true))
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ),
    })),
}));

export default useCartStore;
