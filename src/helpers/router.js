import { createRouter, createWebHistory } from "vue-router";
import useAuthStore from "../stores/auth.store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { menu: false, header: false },
    },
    {
      path: "/adult",
      name: "Подтвердите возраст",
      meta: { menu: false, header: false },
      component: () => import("../views/AdultView.vue"),
    },
    {
      path: "/intro",
      name: "Добро пожаловать",
      meta: { menu: false, header: false },
      component: () => import("../views/IntroView.vue"),
    },
    {
      name: "Регистрация",
      path: "/registration",
      meta: { menu: false, header: true },
      component: () => import("../views/RegistrationView.vue"),
    },
    {
      name: "Выбор города",
      path: "/preregistration",
      meta: { menu: false, header: true },
      component: () => import("../views/PreregistrationView.vue"),
    },
    {
      name: "Вход",
      path: "/authorization",
      meta: { menu: false, header: true },
      component: () => import("../views/AuthorizationView.vue"),
    },
    {
      name: "Сброс пароля",
      path: "/reset",
      meta: { menu: false, header: true },
      component: () => import("../views/ResetView.vue"),
    },
    {
      name: "Профиль",
      path: "/personal",
      meta: { menu: true, header: true },
      component: () => import("../views/PersonalView.vue"),
    },
    {
      name: "Кошелек",
      path: "/wallet",
      meta: { menu: true, header: true },
      component: () => import("../views/WalletView.vue"),
    },
    {
      name: "Новости",
      path: "/news",
      meta: { menu: true, header: true },
      component: () => import("../views/NewsView.vue"),
    },
    {
      name: "Приглашение",
      path: "/refer",
      meta: { menu: false, header: true },
      component: () => import("../views/ReferView.vue"),
    },
    {
      name: "Магазины",
      path: "/stores",
      meta: { menu: true, header: true },
      component: () => import("../views/StoresView.vue"),
    },
    {
      name: "Регистрация завершена",
      path: "/reg_success",
      meta: { menu: false, header: true },
      component: () => import("../views/Reg_successView.vue"),
    },
    {
      name: "Изменить пароль",
      path: "/personal_update",
      meta: { menu: false, header: true },
      component: () => import("../views/Personal_updateView.vue"),
    },
    {
      name: "Привязка карты",
      path: "/set_plastic",
      meta: { menu: false, header: true },
      component: () => import("../views/Set_plasticView.vue"),
    },
    {
      name: "Разрешения на уведомления",
      path: "/setting_notify",
      meta: { menu: false, header: true },
      component: () => import("../views/Setting_notifyView.vue"),
    },
    {
      name: "Уведомления",
      path: "/notifications",
      meta: { menu: false, header: true },
      component: () => import("../views/NotificationsView.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  const publicPages = [
    "/adult",
    "/intro",
    "/registration",
    "/preregistration",
    "/authorization",
    "/reset",
  ];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.bearerToken) {
    auth.returnUrl = to.fullPath;
    return "/adult";
  }

  if (to.path === "/") {
    return "/wallet";
  }
});

export default router;
