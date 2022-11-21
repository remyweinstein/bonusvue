import { createApp } from "vue";
import App from "./App.vue";
import router from "./helpers/router";
import { createPinia } from "pinia";
import { piniaCapacitorPersist } from "pinia-plugin-capacitor-persist";

import "./assets/scss/styles.scss";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaCapacitorPersist);

app.use(createPinia());
app.use(router);

app.mount("#app");
