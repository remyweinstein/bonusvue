<script setup>
import { ref } from "vue";
import useStoresStore from "../stores/stores.store";
import usePersonalStore from "../stores/personal.store";
import PopupStore from "../components/PopupStore.vue";

const storesStore = useStoresStore();
const personal = usePersonalStore();
const stores = ref(null);
const cities = ref(null);
const selectedCity = ref(null);
const storesList = ref(null);
const curCity = ref(null);

const visiblePStore = ref(false);
const titlePStore = ref(null);
const shedulePStore = ref(null);
const phonePStore = ref(null);
const coordPStore = ref(null);
const idPStore = ref(null);

const updateStore = async () => {
  const pers = await personal.getPersonal();
  curCity.value = pers.city || "Хабаровск";
  const data = await storesStore.getStores();
  stores.value = data.stores;
  cities.value = data.cities;
  selectedCity.value = data.cities.filter((val) => {
    return val.title == curCity.value;
  })[0].id;
  listStore(selectedCity.value);
};

updateStore();

const listStore = (cityId) => {
  storesList.value = stores.value.filter((val) => {
    return val.city_id == cityId;
  });
};

const openMap = (id) => {
  const data = stores.value.filter((val) => {
    return val.rsa_id == id;
  })[0];
  visiblePStore.value = true;
  titlePStore.value = data.title;
  shedulePStore.value = data.shedule;
  phonePStore.value = data.phone;
  coordPStore.value = data.coordinates;
  idPStore.value = id;
};
</script>

<template>
  <PopupStore
    :visible="visiblePStore"
    :city="curCity"
    :title="titlePStore"
    :shedule="shedulePStore"
    :phone="phonePStore"
    :coordinates="coordPStore"
    :rsa_id="idPStore"
    @close="visiblePStore = false"
  />
  <div class="stores">
    <div class="container">
      <div class="main-logo">
        <img src="/src/assets/images/backs/city.png" />
        <p>Выберите город</p>
        <select
          name="store_cities"
          class="u-full-width"
          v-model="selectedCity"
          @change="listStore(selectedCity)"
        >
          <option disabled="" value="">Выберите город</option>
          <option v-for="city in cities" :key="city.id" :value="city.id">
            {{ city.title }}
          </option>
        </select>
      </div>
      <div class="storesList">
        <div
          class="storesList__block animated animate__fadeInLeft"
          style="animation-duration: 0.2s"
          v-for="store in storesList"
          :key="store.rsa_id"
          @click="openMap(store.rsa_id)"
        >
          <div class="storesList__block_title">
            {{ store.title }}
          </div>
          <div class="storesList__block_shedule">{{ store.shedule }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
