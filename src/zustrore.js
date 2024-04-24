/* eslint-disable no-unused-vars */
import { create } from 'zustand'

export const useStore = create((set) => ({
  count: 1,
  login:false,
  token:'',
  setToken:(payload)=>set((state) => ({ token: payload  })),
  setLogin:(payload)=>set((state) => ({ login: payload  })),
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

