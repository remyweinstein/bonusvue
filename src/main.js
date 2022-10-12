import { createApp } from "vue";
import App from "./App.vue";
import router from "./helpers/router";
import { createPinia } from "pinia";

import "./assets/scss/styles.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");