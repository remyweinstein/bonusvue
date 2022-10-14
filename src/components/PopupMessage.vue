<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  title: String,
  desc: String,
  message: String,
  visible: Boolean
})

defineEmits(['cancel', 'confirm'])
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
  >
    <div class="popupCont">
      <h4 v-show="title">{{ title }}</h4>
      <hr />
      <h6 v-show="desc">{{ desc }}</h6>
      <p v-show="message">{{ message }}</p>
      <button class="button-primary"></button>
    </div>
  </div>
</template>
