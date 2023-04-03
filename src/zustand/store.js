import { create as createZustand } from "zustand";

const useStore = createZustand((set) => ({
  money: 0,
  tier: [
    {
      id: "tier1",
      isUnlocked: false,
      isActive: false,
      name: "sell Wordpress Website",
      income: 15,
      delay: 2000,
    },
  ],
  addMoney: () => set((state) => ({ money: state.money + 15 })),
}));

export default useStore;
