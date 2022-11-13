import { defineStore } from "pinia";
import { apiRequest } from "../helpers/fetch-wrapper";

const LS_TOKEN = "LS_Personal";

export default defineStore({
  id: "personal",
  state: () => ({
    data: JSON.parse(localStorage.getItem(LS_TOKEN)),
    returnUrl: null,
  }),
  actions: {
    async getPersonal() {
      let result;
      if (!this.data) {
        result = await apiRequest("getProfileData");
        if (!result.status) {
          result.data = null;
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
