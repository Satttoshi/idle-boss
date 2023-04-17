import { create as createStore } from "zustand";
import tierData from "./tierData";

export const milestones = [10, 25, 50, 100, 200, 300, 400, "max"];

const useStore = createStore((set, get) => ({
  money: 0,
  username: "username",
  tiers: tierData,

  setMoney: (amount) => set((state) => ({ money: state.money + amount })),
  setUsername: (username) => set(() => ({ username })),

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

    if (!currentTier.isFilling) {
      clickTimer(tierId);
    }
  },

  clickTimer: (tierId) => {
    const { getTierById, onTimerStart, onTimerEnd } = get();
    const currentTier = getTierById(tierId);
    const delay = Math.max(currentTier.delay, 250);

    onTimerStart(currentTier);

    setTimeout(() => {
      onTimerEnd(currentTier.id);
    }, delay);
  },

  onTimerStart: (tier) => {
    const { setTier } = get();
    setTier({
      id: tier.id,
      isFilling: tier.isPerSecond ? false : true,
    });
  },

  onTimerEnd: (tierId) => {
    const { setMoney, setTier, clickTimer, getTierById } = get();
    const tier = getTierById(tierId);
    setTier({ id: tier.id, isFilling: false, trigger: !tier.trigger });

    if (tier.isPerSecond) {
      setMoney(tier.incomePerSecond / 4);
    } else {
      setMoney(tier.income);
    }

    if (tier.hasManager) {
      clickTimer(tier.id);
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

    const isPerSecond = didReachMilestone
      ? currentTier.hasManager && currentTier.delay / 2 < 250
        ? true
        : false
      : currentTier.hasManager && currentTier.delay < 250
      ? true
      : false;

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
      isPerSecond: isPerSecond,
    });

    setIncomePerSecond(tierId);
  },
}));

export default useStore;
