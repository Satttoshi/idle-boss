import { create as createStore } from "zustand";

const useStore = createStore((set) => ({
  money: 0,
  tier: [
    {
      id: "tier1",
      isUnlocked: false,
      isActive: false,
      name: "sell Wordpress Website",
      income: 15,
      delay: 2000,
      investPrice: 100,
    },
  ],
  addMoney: () => set((state) => ({ money: state.money + 15 })),
}));

export default useStore;
