import create from "zustand";

const useStore = create((set) => ({
  tapCount: 0,
  increaseTaps: () => set((state) => ({ tapCount: state.tapCount + 1 })),
  resetTaps: () => set({ tapCount: 0 })
}));

export default useStore;
