import { create as createStore } from "zustand";

export const milestones = [10, 25, 50, 100, 200, 300, 400, "max"];

const useStore = createStore((set, get) => ({
  money: 10000000,
  tiers: [
    {
      id: "tier1",
      unlockPrice: 10,
      isUnlocked: true,
      isFilling: false,
      hasManager: false,
      isPerSecond: false,
      name: "Wordpress Website",
      income: 10,
      incomePerSecond: null,
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
      isFilling: false,
      hasManager: false,
      name: "React App",
      income: 600,
      incomePerSecond: null,
      incomeBase: 600,
      delay: 3000,
      investPrice: 600,
      investPriceCoefficient: 1.15,
      investCount: 0,
      milestoneIndex: 0,
    },
    {
      id: "tier3",
      unlockPrice: 7200,
      isUnlocked: false,
      isFilling: false,
      hasManager: false,
      name: "Next-js App",
      income: 5400,
      incomePerSecond: null,
      incomeBase: 5400,
      delay: 6000,
      investPrice: 7200,
      investPriceCoefficient: 1.14,
      investCount: 0,
      milestoneIndex: 0,
    },
    {
      id: "tier4",
      unlockPrice: 86400,
      isUnlocked: false,
      isFilling: false,
      hasManager: false,
      name: "Ruby on Rails App",
      income: 43200,
      incomePerSecond: null,
      incomeBase: 43200,
      delay: 12000,
      investPrice: 86400,
      investPriceCoefficient: 1.13,
      investCount: 0,
      milestoneIndex: 0,
    },
    {
      id: "tier5",
      unlockPrice: 1036800,
      isUnlocked: false,
      isFilling: false,
      hasManager: false,
      name: "Quantum App",
      income: 518400,
      incomePerSecond: null,
      incomeBase: 518400,
      delay: 24000,
      investPrice: 1036800,
      investPriceCoefficient: 1.12,
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

  setIncomePerSecond: (tierId) => {
    const { setTier, getTierById } = get();
    const currentTier = getTierById(tierId);
    setTier({
      id: tierId,
      incomePerSecond: currentTier.income / (currentTier.delay / 1000),
    });
  },

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

  buyManager: (tierId) => {
    const { money, getTierById, setTier, setMoney, clickTimer } = get();
    const currentTier = getTierById(tierId);
    const price = currentTier.unlockPrice * 100;

    if (price > money) {
      throw new Error("not enough money");
    }

    setMoney(-price);

    setTier({
      id: tierId,
      hasManager: true,
      isPerSecond: currentTier.delay < 250 ? true : false,
    });

    clickTimer(tierId);
  },

  clickTimer: (tierId) => {
    const { getTierById, onTimerStart, onTimerEnd } = get();
    const currentTier = getTierById(tierId);
    const delay = Math.max(currentTier.delay, 250);

    if (currentTier.isPerSecond && currentTier.hasManager) {
      return;
    }

    onTimerStart(currentTier.id);
    setTimeout(() => {
      onTimerEnd(currentTier.id);
    }, delay);
  },

  onTimerStart: (tierId) => {
    const { setTier } = get();
    setTier({
      id: tierId,
      isFilling: true,
    });
  },

  onTimerEnd: (tierId) => {
    const { setMoney, setTier, getTierById, clickTimer } = get();
    const currentTier = getTierById(tierId);
    setTier({ id: tierId, isFilling: false, trigger: !currentTier.trigger });
    setMoney(currentTier.income);
    if (currentTier.hasManager) {
      clickTimer(tierId);
    }
  },

  invest: (tierId) => {
    const { money, setTier, setMoney, getTierById, setIncomePerSecond } = get();
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
      isPerSecond: didReachMilestone
        ? currentTier.hasManager && currentTier.delay / 2 < 250
          ? true
          : false
        : currentTier.hasManager && currentTier.delay < 250
        ? true
        : false,
    });

    setIncomePerSecond(tierId);

    const test = getTierById(tierId);
    console.log(
      test.investCount +
        " " +
        test.isPerSecond +
        " " +
        test.delay +
        " " +
        test.incomePerSecond +
        " " +
        test.income
    );
  },
}));

export default useStore;
