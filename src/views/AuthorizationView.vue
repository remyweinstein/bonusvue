<script setup>
import { ref } from "vue";
import MaskInput from "../components/MaskInput.vue";
import { getPhoneNumbers } from "../helpers/mask";
import useAuthStore from "../stores/auth.store";
import PopupMessage from "../components/PopupMessage.vue";

const phoneForm = ref(null);
const passwordForm = ref(null);
const aut = useAuthStore();
const visible = ref(false);
const desc = ref(null);

async function auth() {
  const result = await aut.login(getPhoneNumbers(phoneForm.value), passwordForm.value);
  if (!result.status) {
    desc.value = JSON.stringify(result.description);
    visible.value = true;
  }

  /*
  const authPhoneEl = C("#auth-phone-mask");
  authPassEl = C("#auth-pass");
  authPassPop = C("#auth-pass-popup");
  phone = getPhoneNumbers(C("#auth-phone-mask").val());
  authButton = C("#auth-button").el;

  if (!phone || phone.length !== 11) {
    showInputPopup("auth-phone-mask");
    return;
  }
  authPhoneEl.delclass("fail");

  if (authPassEl.val() === "") {
    authPassEl.el.scrollIntoView();
    authPassEl.togclass("fail");
    authPassEl.el.focus();
    authPassPop.togclass("show");
    return;
  }

  authButton.disabled = true;

  const result = await api("authorization", {
    phone,
    pass: authPassEl.val(),
  });

  authButton.disabled = false;

  if (result.status) {
    localStorage.clear();
    localStorage.setItem(LS_TOKEN, result.data.token);
    location.reload();
  } else {
    showPopup("", result.description);
  }
  */
}
</script>
<template>
  <PopupMessage :visible="visible" :desc="desc" @close="visible = false" />
  <div id="authorization">
    <div class="container">
      <p class="hero-heading">Введите ваш номер телефона и пароль</p>
      <!-- Номер телефона -->
      <div class="popup">
        <span id="auth-phone-mask-popup" class="popup-text"
          >Введите номер телефона</span
        >
      </div>
      <MaskInput v-model="phoneForm" />
      <!-- Пароль -->
      <div class="popup">
        <span class="popup-text" id="auth-pass-popup">Введите пароль</span>
      </div>
      <div class="authorization__inputPass">
        <input
          class="u-full-width"
          v-model="passwordForm"
          type="password"
          placeholder="Пароль"
        />
        <i class="icon-eye-off"></i>
      </div>
      <!-- Кнопки -->
      <p style="text-align: right">
        <a class="link" @click="$router.push('/reset')">Забыли пароль?</a>
      </p>
      <button @click="auth" class="button button-primary u-full-width">
        Войти
      </button>
      <p class="link">
        <span>У вас ещё нет аккунта? </span>
        <a href="#" @click="$router.push('/preregistration')"
          >Зарегистрироваться</a
        >
      </p>
    </div>
  </div>
</template>
