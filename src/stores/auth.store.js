import { defineStore } from "pinia";
import { apiRequest } from "../helpers/fetch-wrapper";
import router from "../helpers/router";
//import PopupMessage from "../components/PopupMessage.vue";

const LS_TOKEN = "LS_BearerToken";

export default defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    bearerToken: JSON.parse(localStorage.getItem(LS_TOKEN)),
    returnUrl: null,
  }),
  actions: {
    async login(phone, pass) {
      const result = await apiRequest("authorization", {
        phone,
        pass,
      });

      if (result.status) {
        localStorage.clear();
        // update pinia state
        this.bearerToken = result.data.token;
        //PopupMessage.open("", result.data.token);
        //console.log(PopupMessage);
        //openPopup("", result.data.token);
      } else {
        //PopupMessage.open("", result.description);
        //Toast.open(result.description);
      }

      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem(LS_TOKEN, JSON.stringify(this.bearerToken));

      // redirect to previous url or default to home page
      router.push(this.returnUrl || "/wallet");
    },
    logout() {
      this.bearerToken = null;
      localStorage.removeItem(LS_TOKEN);
      router.push("/adult");
    },
  },
});
