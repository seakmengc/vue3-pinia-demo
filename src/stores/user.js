import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "useUserStore",
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },

    resetUser() {
      this.user = null;
    },
  },
});
