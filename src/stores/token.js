import { defineStore } from "pinia";

export const useTokenStore = defineStore({
  id: "useTokenStore",
  state: () => ({
    accessToken: null,
    refreshToken: null,
  }),
  actions: {
    setTokens({ accessToken, refreshToken }) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
    },

    resetTokens() {
      this.accessToken = null;
      this.refreshToken = null;
    },
  },
  persist: true,
});
