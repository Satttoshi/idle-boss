import { create as createZustand } from "zustand";

const useStore = createZustand((set) => ({
  money: 0,
  addMoney: () => set((state) => ({ money: state.money + 15 })),
}));

export default useStore;
