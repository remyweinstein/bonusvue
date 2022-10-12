<script setup>
import { RouterView } from "vue-router";
import router from "@/helpers/router";
import useAuthStore from "@/stores/auth.store";
import PopupMessage from "@/components/PopupMessage.vue";
</script>

<style>
@import "@/assets/normalize.css";
@import "@/assets/skeleton_new.css";
@import "@/assets/arial-regular.css";
@import "@/assets/fontello.css";
</style>

<template>
  <PopupMessage ref="Popup" />
  <header class="topNav" v-if="router.currentRoute.value.meta.header">
    <i
      class="topNav__back icon-angle-left"
      @click="$router.back()"
      v-if="!router.currentRoute.value.meta.menu"
    ></i>
    <i
      class="icon-mail topNav__msg"
      aria-hidden="true"
      v-if="router.currentRoute.value.meta.menu"
      onclick="showFeedback();closeNav()"
    ></i>
    <h6>{{ router.currentRoute.value.name }}</h6>
    <i
      class="icon-menu topNav__menu"
      onclick="openNav()"
      v-if="router.currentRoute.value.meta.menu"
    ></i>
    <span
      id="top-nav-indicator"
      class="lds-rotation"
      style="display: none"
    ></span>
  </header>

  <main class="main">
    <RouterView />
  </main>

  <footer v-if="useAuthStore().user">
    <nav>
      <ul class="bottomNav">
        <li data-section="news" @click="$router.push('/news')">
          <i class="icon-newspaper"></i>
          <div>Акции</div>
        </li>
        <li data-section="stores" @click="$router.push('/stores')">
          <i class="icon-location"></i>
          <div>Магазины</div>
        </li>
        <li data-section="wallet" @click="$router.push('/wallet')">
          <i class="icon-credit-card"></i>
          <div>Карта</div>
        </li>
        <li data-section="personal" @click="$router.push('/personal')">
          <i class="icon-id-card-o"></i>
          <div>Профиль</div>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped></style>
