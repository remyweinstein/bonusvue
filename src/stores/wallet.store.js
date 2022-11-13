import { defineStore } from "pinia";
import { apiRequest } from "../helpers/fetch-wrapper";

const LS_TOKEN = "LS_Wallet";

export default defineStore({
  id: "wallet",
  state: () => ({
    data: JSON.parse(localStorage.getItem(LS_TOKEN)),
    returnUrl: null,
  }),
  actions: {
    async getWallet() {
      let result;
      if (!this.data) {
        result = await apiRequest("getWalletData");
        if (!result.status) {
          result.data = [];
        } else {
          this.data = result.data;
          localStorage.setItem(LS_TOKEN, JSON.stringify(this.data));
        }
      } else {
        result = { data: this.data };
      }

      return result.data;
    },
  },
});
