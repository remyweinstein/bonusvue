<script setup>
import { inputMask, clickMask } from "@/helpers/mask";
defineProps({
  modelValue: String,
});
defineEmits(["update:modelValue"]);
</script>
<script>
export default {
  mounted() {
    inputMask(this.$refs.mask);
  },
};
</script>

<template>
  <div class="maskedInput">
    <input id="auth-phone" type="tel" disabled />
    <input
      @click="clickMask($event.target)"
      @input="
        inputMask($event.target);
        $emit('update:modelValue', $event.target.value);
      "
      ref="mask"
      :value="modelValue"
      type="tel"
    />
  </div>
</template>
