<script setup>
import { toRefs, onUpdated, onMounted } from "vue";
import { loadYmap } from "vue-yandex-maps";

const props = defineProps({
  visible: Boolean,
  city: String,
  title: String,
  shedule: String,
  phone: String,
  coordinates: String,
  rsa_id: String,
});

let myMap;

const { coordinates, rsa_id, title, visible } = toRefs(props);

onMounted(async () => {
  const settings = { lang: "ru_RU" };
  await loadYmap({ ...settings, debug: true });
});

onUpdated(() => {
  if (visible.value) {
    renderMap();
  } else {
    renderMap(true);
  }
});

const renderMap = (clear) => {
  if (clear && myMap) {
    myMap.destroy();
    return;
  }

  if (!coordinates.value) {
    return;
  }

  const x = parseFloat(coordinates.value.split(",")[0]);
  const y = parseFloat(coordinates.value.split(",")[1]);

  myMap = new ymaps.Map(
    "map",
    {
      center: [x, y],
      zoom: 16,
    },
    {
      suppressMapOpenBlock: true,
    }
  );

  let objectManager = new ymaps.ObjectManager({
    clusterize: true,
    gridSize: 32,
    clusterDisableClickZoom: true,
  });

  objectManager.objects.options.set("preset", "islands#greenDotIcon");
  objectManager.clusters.options.set("preset", "islands#greenClusterIcons");

  objectManager.add({
    type: "Feature",
    id: rsa_id.value,
    geometry: {
      type: "Point",
      coordinates: [x, y],
    },
    properties: {
      hintContent: title.value,
      balloonContentHeader: "",
    },
  });

  myMap.geoObjects.add(objectManager);
};
</script>

<template>
  <div class="storeMap" v-show="visible">
    <div class="storeMap__bg"></div>
    <div class="storeMap__block animated animate__fadeInDown">
      <div class="storeMap__block_city">
        {{ city }}<i class="icon-cancel" @click="$emit('close')"></i>
      </div>
      <div class="storeMap__block_info">
        <div>
          <span>Адрес:</span>
          <span>{{ title }}</span>
        </div>
        <div>
          <span>Время работы:</span>
          <span>{{ shedule }}</span>
        </div>
        <div>
          <span>Телефон:</span>
          <span>
            <a :href="`tel:+7${phone ? phone.slice(1) : null}`">{{ phone }}</a>
          </span>
        </div>
      </div>
      <div id="map"></div>
    </div>
  </div>
</template>
