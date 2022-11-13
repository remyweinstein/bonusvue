<script setup>
defineProps({
  visible: Boolean,
  title: String,
  desc: String,
  message: String,
  but: {
    type: String,
    required: false,
    default: "OK",
  },
});
</script>

<template>
  <div
    class="popupOverlay"
    v-show="visible"
    :class="{
      animated: visible,
      animate__fadeIn: visible,
      animate__furious: visible,
    }"
    @click="$emit('close')"
  >
    <div class="popupCont">
      <h4 v-show="title">{{ title }}</h4>
      <hr />
      <h6 v-show="desc">{{ desc }}</h6>
      <p v-show="message">{{ message }}</p>
      <button class="button-primary" @click="$emit('close')">{{ but }}</button>
    </div>
  </div>
</template>
