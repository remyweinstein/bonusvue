import { defineStore } from "pinia";
import { apiRequest } from "../helpers/fetch-wrapper";
import router from "../helpers/router";

const LS_TOKEN = "LS_BearerToken";

export default defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    bearerToken: JSON.parse(localStorage.getItem(LS_TOKEN)),
    returnUrl: null,
  }),
  actions: {
    user: true,
    async login(phone, pass) {
      const result = await apiRequest("authorization", {
        phone,
        pass,
      });

      if (result.status) {
        localStorage.clear();

        if (result.data.token) {
          this.bearerToken = result.data.token;
          localStorage.setItem(LS_TOKEN, JSON.stringify(this.bearerToken));
          router.push(this.returnUrl || "/wallet");
        }
      }

      return result;
    },
    logout() {
      this.bearerToken = null;
      localStorage.removeItem(LS_TOKEN);
      router.push("/adult");
    },
  },
});
