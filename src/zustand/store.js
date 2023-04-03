import { create as createZustand } from "zustand";

const useStore = createZustand((set) => ({
  money: 4420692,
}));

export default useStore;
