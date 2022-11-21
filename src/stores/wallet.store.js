import { defineStore } from "pinia";
import { apiRequest } from "../helpers/fetch-wrapper";
//import Store from "../stores/store.js";

export const useWalletStore = defineStore({
  id: "wallet",
  state: () => ({
    data: null,
    returnUrl: null,
  }),
  actions: {
    async getWallet() {
      const result = await apiRequest("getWalletData");
      if (result.status) {
        this.$patch({ data: result.data });
      }
    },
  },
});
