import { defineStore } from 'pinia'

interface rootStore {
  items: string[]
}

export const useMainStore = defineStore({
  id: 'mainStore',
  state: () => ({
    items: []
  } as rootStore),
  getters: {
    getItems: (state: any) => state.items * 2
  },
  actions: {
    update(payload: string) {
      this.items.push(payload)
    }
  }
})
