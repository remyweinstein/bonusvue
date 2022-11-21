<script setup>
import { ref } from "vue";
import { DOMAIN } from "../config";
import useNewsStore from "../stores/news.store";
import usePersonalStore from "../stores/personal.store";
import PopupNews from "../components/PopupNews.vue";

const newsStore = useNewsStore();
const personal = usePersonalStore();
const newsli = ref([]);
const codeCity = ref(null);
const visiblePNews = ref(false);
const catalogPNews = ref(null);
const imagePNews = ref(null);
const datePNews = ref(null);
const titlePNews = ref(null);
const descPNews = ref(null);

if (!personal.data) {
  await personal.getPersonal();
}

const updateNew = async () => {
  const data = await newsStore.getNews();
  newsli.value = data;
  codeCity.value = getCodeByCity(personal.data.city);
};

updateNew();

const getImageCatalog = (news) => {
  return `${DOMAIN}/app/assets/catalog/${JSON.parse(news).dir}/${
    codeCity.value
  }/1.jpg`;
};

const openPopupNews = (news) => {
  visiblePNews.value = true;
  titlePNews.value = news.title;
  datePNews.value = news.date_to_post.split("-").reverse().join(".");
  descPNews.value = news.description;
  imagePNews.value = `${DOMAIN}/${news.image}`;
  catalogPNews.value = news.catalog
    ? getListImagesCatalog(JSON.parse(news.catalog))
    : null;
};

const getListImagesCatalog = (news) => {
  const list = [];
  for (let i = news.a; i > 1; i--) {
    list.push(
      `${DOMAIN}/app/assets/catalog/${news.dir}/${codeCity.value}/${i}.jpg`
    );
  }

  return list;
};

const getCodeByCity = (city) => {
  let code = "d";

  if (city == "Хабаровск") {
    code = "a";
  }
  if (city == "Николаевск на Амуре") {
    code = "b";
  }
  if (
    city == "Зея" ||
    city == "Новый Ургал" ||
    city == "Тында" ||
    city == "Чегдомын"
  ) {
    code = "c";
  }

  return code;
};
</script>
<template>
  <PopupNews
    :image="imagePNews"
    :catalog="catalogPNews"
    :visible="visiblePNews"
    :title="titlePNews"
    :desc="descPNews"
    @close="visiblePNews = false"
  />
  <div class="news">
    <div class="container">
      <div
        class="news__container animated animate__fadeIn"
        v-for="news in newsli.slice().reverse()"
        :key="news.id"
      >
        <img v-if="news.catalog" :src="getImageCatalog(news.catalog)" />
        <img v-else :src="`${DOMAIN}/${news.image}`" />
        <div class="news__container_details">
          <p class="news__container_details_date">
            {{ news.date_to_post.split("-").reverse().join(".") }}
          </p>
          <h4>{{ news.title }}</h4>
          <button class="button-primary" @click="openPopupNews(news)">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
