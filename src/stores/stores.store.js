import { defineStore } from "pinia";
import { apiRequest } from "../helpers/fetch-wrapper";
//const LS_TOKEN = "LS_Stores";

export default defineStore({
  id: "stores",
  state: () => ({
    //data: JSON.parse(localStorage.getItem(LS_TOKEN)),
    data: null,
    returnUrl: null,
  }),
  actions: {
    async getStores() {
      const result = await apiRequest("getStores");
      if (result.status) {
        this.$patch({ data: result.data });
      }
    },
  },
});
