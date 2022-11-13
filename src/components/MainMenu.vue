<script setup>
defineProps({
  visMenu: Boolean,
});
</script>

<template>
  <div
    class="mainMenu animated animate__slideInLeft animate__faster"
    v-show="visMenu"
  >
    <div class="mainMenu__head">
      <div class="mainMenu__head_left"></div>
      <div class="mainMenu__head_title"><span>Меню</span></div>
      <div class="mainMenu__head_right">
        <i class="icon-cancel" @click="$emit('close')"></i>
      </div>
    </div>
    <div class="mainMenu__content" @click="$emit('close')">
      <ul class="mainMenu__content_nav">
        <li @click="$router.push('/wallet')">Кошелек</li>
        <li @click="$router.push('/news')">Акции</li>
        <li @click="$router.push('/stores')">Магазины</li>
        <li @click="$router.push('/personal')">Профиль</li>
        <li @click="$router.push('/refer')">Пригласить друга</li>
        <li onclick="openFaq()">Частые вопросы</li>
      </ul>
      <ul class="mainMenu__content_bottom">
        <li @click="$emit('close')" onclick="showFeedback()">
          <i class="icon-help" aria-hidden="true"></i>
          <div>Задать вопрос</div>
        </li>
        <li onclick="logOff()">
          <i class="icon-logout" aria-hidden="true"></i>
          <div>Выход</div>
        </li>
      </ul>
    </div>
  </div>
</template>
