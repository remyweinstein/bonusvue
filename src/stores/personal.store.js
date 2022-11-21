import { defineStore } from "pinia";
import { apiRequest } from "../helpers/fetch-wrapper";
//const LS_TOKEN = "LS_Personal";

export default defineStore({
  id: "personal",
  state: () => ({
    //data: JSON.parse(localStorage.getItem(LS_TOKEN)),
    data: null,
    returnUrl: null,
  }),
  actions: {
    async getPersonal() {
      const result = await apiRequest("getProfileData");
      if (result.status) {
        this.$patch({ data: result.data });
      }
    },
  },
});
