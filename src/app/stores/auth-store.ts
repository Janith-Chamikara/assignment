import { create } from "zustand";
import { Auth } from "../lib/types";

const useAuthStore = create<Auth>((set) => ({
  email: undefined,
  fullName: undefined,
  setEmail: (email: string) => set({ email: email }),
  setFullName: (name: string) => set({ fullName: name }),
}));

export default useAuthStore;
