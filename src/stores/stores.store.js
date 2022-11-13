import { defineStore } from "pinia";
import { apiRequest } from "../helpers/fetch-wrapper";

const LS_TOKEN = "LS_Stores";

export default defineStore({
  id: "stores",
  state: () => ({
    data: JSON.parse(localStorage.getItem(LS_TOKEN)),
    returnUrl: null,
  }),
  actions: {
    async getStores() {
      let result;
      if (!this.data) {
        result = await apiRequest("getStores");
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
