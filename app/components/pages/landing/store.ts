import { reactive, computed } from "vue";

export interface CartItem {
  id: number;
  name: string;
  size?: string;
  qty: number;
  price: number;
  image: string;
}

const state = reactive({
  items: [] as CartItem[],
});

export const cart = {
  items: state.items,

  addToCart(item: Omit<CartItem, "qty"> & { qty?: number }) {
    const existing = state.items.find((i) => i.id === item.id);
    if (existing) {
      existing.qty += item.qty ?? 1;
    } else {
      state.items.push({ ...item, qty: item.qty ?? 1 });
    }
  },

  removeFromCart(id: number) {
    state.items.splice(
      0,
      state.items.length,
      ...state.items.filter((i) => i.id !== id)
    );
  },

  count: computed(() => state.items.reduce((sum, i) => sum + i.qty, 0)),

  subtotal: computed(() =>
    state.items.reduce((sum, i) => sum + i.price * i.qty, 0)
  ),
};