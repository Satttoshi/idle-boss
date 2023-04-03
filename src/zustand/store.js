import { create as createZustand } from "zustand";

const useStore = createZustand((set) => ({
  money: 0,
  tier: [
    {
      id: "tier1",
      isUnlocked: false,
      isFilling: false,
      changeFilling: () => set((state) => ({ isFilling: !state.isFilling })),
      name: "sell Wordpress Website",
      income: 15,
      delay: 3000,
    },
  ],
  addMoney: () => set((state) => ({ money: state.money + 15 })),
}));

export default useStore;
