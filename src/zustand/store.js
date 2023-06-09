import { create as createStore } from "zustand";
import tierData from "./tierData";
import setSpeed from "./speedSheet";
import fetchTime from "../utils/fetch-time";

export const milestones = [
  10,
  25,
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  1000,
  "max",
];
export const floorPrices = [0, 7000000, 4400000000000000];

const useStore = createStore((set, get) => ({
  money: 0,
  currentFloor: 1,
  availableFloors: [1, 2],
  currentFloorBuilder: 1,

  username: "Boss",
  tiers: tierData,

  isTutorialActive: true,
  currentTutorial: 0,
  isManagerModalOpen: false,
  selectedManager: 1,
  isConstructionModalOpen: false,
  isApprovalModalOpen: false,
  isGameStartModalActive: true,
  isFreshStart: true,
  isLocalStorageLoaded: false,
  isLoadingToastActive: false,
  currentSaveGameIntervalId: null,
  currentTime: null,
  lastTimeDifference: 0,

  applyIdleEarnings: () => {
    const { tiers, lastTimeDifference, setMoney, saveGame } = get();
    const tiersWithActiveManagers = tiers.filter((tier) => tier.hasManager);
    tiersWithActiveManagers.forEach((tier) => {
      const earnings =
        tier.incomePerSecond * Math.floor(lastTimeDifference / 1000);
      setMoney(earnings);
    });
    saveGame();
  },

  setTimeDifference: async () => {
    const { currentTime } = get();
    const now = await fetchTime();
    if (currentTime) {
      const difference = now - currentTime;
      set(() => ({ lastTimeDifference: difference }));
    } else {
      set(() => ({ lastTimeDifference: 0 }));
    }
  },

  setCurrentTime: (time) => set(() => ({ currentTime: time })),

  setApprovalModalOpen: (isOpen) =>
    set(() => ({ isApprovalModalOpen: isOpen })),

  setLocalStorageLoaded: (isLoaded) =>
    set(() => ({ isLocalStorageLoaded: isLoaded })),

  setGameStartModalActive: (isActive) =>
    set(() => ({ isGameStartModalActive: isActive })),

  onGameStart: () => {
    const { tiers, clickTimer, runAutoSave } = get();
    const tiersWithActiveManagers = tiers.filter((tier) => tier.hasManager);
    tiersWithActiveManagers.forEach((tier) => {
      clickTimer(tier.id);
    });
    runAutoSave();
  },

  saveGame: async () => {
    const {
      money,
      availableFloors,
      currentFloorBuilder,
      username,
      tiers,
      isTutorialActive,
      currentTutorial,
      isManagerModalOpen,
      selectedManager,
      isConstructionModalOpen,
      runLoadingToast,
      setCurrentTime,
    } = get();
    const time = await fetchTime();
    setCurrentTime(time);
    const { currentTime } = get();
    localStorage.setItem(
      "game",
      JSON.stringify({
        money,
        availableFloors,
        currentFloorBuilder,
        username,
        tiers: tiers.map((tier) => {
          return { ...tier, isFilling: false };
        }),
        isTutorialActive,
        currentTutorial,
        isManagerModalOpen,
        selectedManager,
        isConstructionModalOpen,
        currentTime,
        isFreshStart: false,
      })
    );
    runLoadingToast();
  },

  loadGame: async () => {
    const { setLocalStorageLoaded, setTimeDifference } = get();
    if (typeof localStorage === "undefined") {
      setLocalStorageLoaded(true);
      return;
    }
    setLocalStorageLoaded(true);
    const game = JSON.parse(localStorage.getItem("game"));
    if (!game) return;
    set((state) => ({
      ...state,
      ...game,
    }));
    await setTimeDifference();
  },

  runLoadingToast: () => {
    set(() => ({ isLoadingToastActive: true }));
    setTimeout(() => {
      set(() => ({ isLoadingToastActive: false }));
    }, 2000);
  },

  runAutoSave: () => {
    const { saveGame, currentSaveGameIntervalId } = get();
    if (currentSaveGameIntervalId) clearInterval(currentSaveGameIntervalId);
    const intervalId = setInterval(() => {
      saveGame();
    }, 60000);
    set(() => ({ currentSaveGameIntervalId: intervalId }));
  },

  setMoney: (amount) => set((state) => ({ money: state.money + amount })),
  setUsername: (username) => set(() => ({ username })),

  setTutorialActive: (isActive) => set(() => ({ isTutorialActive: isActive })),
  setCurrentTutorial: (index) => set(() => ({ currentTutorial: index })),

  exitTutorial: () => {
    const { setTutorialActive, setCurrentTutorial, currentTutorial } = get();
    if (currentTutorial === 5) return setTutorialActive(false);
    setCurrentTutorial(currentTutorial + 1);
  },

  setCurrentFloor: (amount) =>
    set((state) => ({ currentFloor: state.currentFloor + amount })),
  addFloor: () =>
    set((state) => ({
      availableFloors: [
        ...state.availableFloors,
        state.availableFloors.length + 1,
      ],
    })),
  setCurrentFloorBuilder: (amount) =>
    set(() => ({ currentFloorBuilder: amount })),

  setManagerModal: (isOpen) => set(() => ({ isManagerModalOpen: isOpen })),
  setSelectedManager: (managerId) =>
    set(() => ({ selectedManager: managerId })),

  setConstructionModal: (isOpen) =>
    set(() => ({ isConstructionModalOpen: isOpen })),

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

  unlockFloor: () => {
    const {
      money,
      setMoney,
      setCurrentFloor,
      currentFloorBuilder,
      setCurrentFloorBuilder,
      addFloor,
    } = get();
    if (floorPrices.length === currentFloorBuilder) return;
    if (floorPrices[currentFloorBuilder] > money) {
      throw new Error("not enough money");
    }
    setMoney(-floorPrices[currentFloorBuilder]);
    setCurrentFloorBuilder(currentFloorBuilder + 1);
    addFloor();
    setCurrentFloor(1);
  },

  buyManager: (tierId) => {
    const { money, getTierById, setTier, setMoney, clickTimer } = get();
    const currentTier = getTierById(tierId);
    const price = currentTier.unlockPrice * 300;

    if (!currentTier.isUnlocked) {
      throw new Error("tier is not unlocked");
    }

    if (price > money) {
      throw new Error("not enough money");
    }

    setMoney(-price);

    setTier({
      id: tierId,
      hasManager: true,
      isPerSecond: currentTier.delay < 250 ? true : false,
    });

    setTimeout(() => {
      setTier({
        id: tierId,
        isStamped: true,
      });
    }, 1000);

    if (!currentTier.isFilling) {
      clickTimer(tierId);
    }
  },

  clickTimer: (tierId) => {
    const { getTierById, onTimerStart, onTimerEnd, setTier } = get();
    const currentTier = getTierById(tierId);
    const delay = Math.max(currentTier.delay, 250);

    onTimerStart(currentTier);

    setTimeout(() => {
      onTimerEnd(currentTier.id);
    }, delay);

    setTimeout(() => {
      setTier({
        id: tierId,
        isFilling: false,
      });
    }, delay - 10);
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
    setTier({ id: tier.id, trigger: !tier.trigger });

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
      ? currentTier.hasManager &&
        setSpeed(
          currentTier.milestoneIndex,
          currentTier.index,
          currentTier.delay
        ) < 250
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
        ? setSpeed(
            currentTier.milestoneIndex,
            currentTier.index,
            currentTier.delay
          )
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
