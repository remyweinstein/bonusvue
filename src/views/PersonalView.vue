<script setup>
import { ref } from "vue";
import usePersonalStore from "../stores/personal.store";

const personal = usePersonalStore();
const name = ref("Наш Любимый Покупатель");
const phone = ref("7__________");
const birthdate = ref("");

const birthFormat = (d) => {
  let date = new Date(d.replace(new RegExp("-", "g"), "/"));

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timezone: "UTC",
  };

  if (date != "Invalid Date") {
    date = date.toLocaleString("ru", options);
  } else {
    date = "";
  }
  return date;
};

const phoneFormat = (a) => {
  return `+${a[0]} (${a[1]}${a[2]}${a[3]}) ${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}-${a[9]}${a[10]}`;
};

const updatePersonal = async () => {
  const data = await personal.getPersonal();
  name.value = data.firstname;
  phone.value = data.phone;
  birthdate.value = data.birthdate;
};

updatePersonal();
</script>
<template>
  <div class="personal" id="personal">
    <div class="personal__head">
      <div class="personal__head_avatar">
        <div class="personal__head_avatar_image">
          <img src="/src/assets/images/backs/avatar.png" />
        </div>
      </div>
      <div class="personal__head_name">{{ name }}</div>
      <div class="personal__head_birthday textWings">
        {{ birthFormat(birthdate) }}
      </div>
      <div class="personal__head_phone" id="personal_phone">
        {{ phoneFormat(phone) }}
      </div>
    </div>
    <div class="personal__footer_event">
      <h4 class="">Обратная связь</h4>
      <ul>
        <li @click="$router.push('/notifications')">
          <i class="icon-bell"></i>Уведомления
        </li>
        <li onclick="showFeedback()"><i class="icon-mail"></i>Задать вопрос</li>
        <li onclick="openFaq()">
          <i class="icon-help-1"></i>Ответы на частые вопросы
        </li>
      </ul>
      <h4>Настройки</h4>
      <ul>
        <li @click="$router.push('/set_plastic')">
          <i class="icon-vcard"></i>Привязать пластиковую карту
        </li>
        <li @click="$router.push('/setting_notify')">
          <i class="icon-bell-off-empty"></i>Разрешения на уведомления
        </li>
        <li @click="$router.push('/personal_update')">
          <i class="icon-key-outline"></i>Сменить пароль
        </li>
        <li onclick="deleteAccount()">
          <i class="icon-cancel"></i>Удалить аккаунт
        </li>
      </ul>
    </div>
    <div class="personal__footer container">
      <div class="personal__footer_title">Ваша карта</div>
      <div class="personal__footer_level">
        <img src="/src/assets/images/backs/level-bg.png" />
        <span class="personal__footer_level_text" id="personalCardType"></span>
      </div>
      <div class="personal__footer_type" id="notMatchCardType">
        Завтра Ваша карта станет <span id="notMatchCardTypeValue"></span>
      </div>
    </div>
  </div>
</template>
