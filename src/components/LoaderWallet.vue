<script setup>
defineProps({
  visible: Boolean,
});
</script>

<template>
  <div class="wallet__content_loader" v-show="visible">
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
