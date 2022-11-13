import { defineStore } from "pinia";
import { apiRequest } from "../helpers/fetch-wrapper";

const LS_TOKEN = "LS_News";

export default defineStore({
  id: "news",
  state: () => ({
    data: JSON.parse(localStorage.getItem(LS_TOKEN)),
    returnUrl: null,
  }),
  actions: {
    async getNews() {
      let result;
      if (!this.data) {
        result = await apiRequest("getNews");
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
