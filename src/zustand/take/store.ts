import { create } from 'zustand';

export const useTakeListCodeStore = create<{
  codes: string[];
  setCodes: (status: string[]) => void;
}>((set) => ({
  codes: [],
  setCodes: (status) => set({ codes: status }),
}));
