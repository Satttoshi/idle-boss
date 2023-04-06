import { create as createStore } from "zustand";

export const milestones = [15, 30, 50, 75, 100, 200, "max"];

const useStore = createStore((set, get) => ({
  money: 0,
  tiers: [
    {
      id: "tier1",
      unlockPrice: 0,
      isUnlocked: true,
      isActive: false,
      name: "Wordpress Website",
      income: 10,
      incomeBase: 10,
      delay: 600,
      investPrice: 50,
      investPriceCoefficient: 1.07,
      investCount: 0,
      milestoneIndex: 0,
    },
    {
      id: "tier2",
      unlockPrice: 600,
      isUnlocked: false,
      isActive: false,
      name: "React Website",
      income: 600,
      incomeBase: 600,
      delay: 3000,
      investPrice: 200,
      investPriceCoefficient: 1.15,
      investCount: 0,
      milestoneIndex: 0,
    },
    {
      id: "tier3",
      unlockPrice: 7200,
      isUnlocked: false,
      isActive: false,
      name: "Next-js Website",
      income: 5400,
      incomeBase: 5400,
      delay: 6000,
      investPrice: 500,
      investPriceCoefficient: 1.14,
      investCount: 0,
      milestoneIndex: 0,
    },
  ],
  setMoney: (amount) => set((state) => ({ money: state.money + amount })),

  getTierById: (tierId) => {
    const { tiers } = get();
    return tiers.find((tier) => tier.id === tierId);
  },

  setTier: (updatedTier) =>
    set((state) => ({
      tiers: state.tiers.map((tier) =>
        tier.id === updatedTier.id ? { ...tier, ...updatedTier } : tier
      ),
    })),

  unlock: (tierId) => {
    const { money, getTierById, setTier, setMoney } = get();
    const currentTier = getTierById(tierId);

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
    const { money, setTier, setMoney, getTierById } = get();
    const currentTier = getTierById(tierId);

    if (currentTier.investPrice > money) {
      throw new Error("not enough money");
    }

    setMoney(-currentTier.investPrice);

    const didReachMilestone =
      currentTier.investCount + 1 >= milestones[currentTier.milestoneIndex];

    setTier({
      id: tierId,
      income: currentTier.income + currentTier.incomeBase,
      investPrice: currentTier.investPrice * currentTier.investPriceCoefficient,
      investCount: currentTier.investCount + 1,
      delay: didReachMilestone
        ? Math.round(currentTier.delay / 2)
        : currentTier.delay,
      milestoneIndex: didReachMilestone
        ? currentTier.milestoneIndex + 1
        : currentTier.milestoneIndex,
    });
  },
}));

export default useStore;
