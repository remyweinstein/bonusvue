<script setup>
defineProps({
  visible: Boolean,
  catalog: Array,
  image: String,
  date: String,
  title: String,
  desc: String,
});
</script>

<template>
  <div class="newsOverlay" v-show="visible">
    <i class="icon-cancel" v-show="catalog"></i>
    <div class="newsOverlay__cont animated animate__fadeInDown">
      <img class="newsOverlay__image" :src="image" alt="" v-if="!catalog" />
      <span v-show="catalog" v-for="img in catalog" :key="img.id">
        <img class="newsOverlay__image" :src="img" alt="" />
      </span>
      <div class="newsOverlay__details">
        <p class="newsOverlay__details_date" v-show="!catalog">{{ date }}</p>
        <h4 class="newsOverlay__details_title" v-show="!catalog">
          {{ title }}
        </h4>
        <p
          class="newsOverlay__details_descpription"
          v-show="!catalog"
          v-html="desc"
        ></p>
        <button @click="$emit('close')">Закрыть</button>
      </div>
    </div>
  </div>
</template>
