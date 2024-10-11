import axios from "axios";
import { create } from "zustand";

function counterStore(set) {
  return {
    count: 0,
    data: [],
    increment: function () {
      set((state) => ({ count: state.count + 1 }));
    },
    decrement: function () {
      set((state) => ({ count: state.count - 1 }));
    },
    fetchData: async function (skip = 0) {
      const data = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${skip}`,
      );

      set({ data: data.data.products });
    },
  };
}

export const useCounterStore = create(counterStore);
