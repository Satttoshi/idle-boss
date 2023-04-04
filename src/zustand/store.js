import { create as createStore } from "zustand";

const useStore = createStore((set) => ({
  money: 0,
  tiers: [
    {
      id: "tier1",
      isUnlocked: false,
      isActive: false,
      name: "sell Wordpress Website",
      income: 10,
      delay: 2000,
      investPrice: 100,
    },
    {
      id: "tier2",
      isUnlocked: false,
      isActive: false,
      name: "sell React Website",
      income: 20,
      delay: 3000,
      investPrice: 200,
    },
  ],
  addMoney: () =>
    set((state) => ({ money: state.money + state.tiers[0].income })),

  setTier: (updatedTier) =>
    set((state) => ({
      tiers: state.tiers.map((tier) =>
        tier.id === updatedTier.id ? { ...tier, ...updatedTier } : tier
      ),
    })),
}));

export default useStore;
