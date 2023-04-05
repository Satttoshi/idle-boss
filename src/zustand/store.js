import { create as createStore } from "zustand";

export const milestones = [15, 30, 50, 75, 100, 200, "max"];

const useStore = createStore((set, get) => ({
  money: 15000,
  tiers: [
    {
      id: "tier1",
      unlockPrice: 0,
      isUnlocked: true,
      isActive: false,
      name: "Wordpress Website",
      income: 10,
      delay: 2000,
      investPrice: 50,
      investCount: 0,
      milestoneIndex: 0,
    },
    {
      id: "tier2",
      unlockPrice: 10000,
      isUnlocked: false,
      isActive: false,
      name: "React Website",
      income: 100,
      delay: 5000,
      investPrice: 200,
      investCount: 0,
      milestoneIndex: 0,
    },
    {
      id: "tier3",
      unlockPrice: 50000,
      isUnlocked: false,
      isActive: false,
      name: "Next-js Website",
      income: 500,
      delay: 10000,
      investPrice: 500,
      investCount: 0,
      milestoneIndex: 0,
    },
  ],
  setMoney: (amount) => set((state) => ({ money: state.money + amount })),

  setTier: (updatedTier) =>
    set((state) => ({
      tiers: state.tiers.map((tier) =>
        tier.id === updatedTier.id ? { ...tier, ...updatedTier } : tier
      ),
    })),

  unlock: (tierId) => {
    const { money, tiers, setTier, setMoney } = get();
    const currentTier = tiers.find((tier) => tier.id === tierId);

    if (currentTier.unlockPrice > money) {
      throw new Error("not enough money");
    }

    setMoney(-currentTier.unlockPrice);

    setTier({
      id: tierId,
      isUnlocked: true,
    });
  },

  invest: (tierId) => {
    const { money, tiers, setTier, setMoney } = get();
    const currentTier = tiers.find((tier) => tier.id === tierId);

    if (currentTier.investPrice > money) {
      throw new Error("not enough money");
    }

    setMoney(-currentTier.investPrice);

    const didReachMilestone =
      currentTier.investCount + 1 >= milestones[currentTier.milestoneIndex];

    setTier({
      id: tierId,
      income: currentTier.income + 5,
      investPrice: currentTier.investPrice + 50,
      investCount: currentTier.investCount + 1,
      delay: didReachMilestone ? currentTier.delay - 800 : currentTier.delay,
      milestoneIndex: didReachMilestone
        ? currentTier.milestoneIndex + 1
        : currentTier.milestoneIndex,
    });
  },
}));

export default useStore;
