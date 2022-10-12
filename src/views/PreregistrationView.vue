<template>
  <div id="preregistration" class="preRegistration">
    <h2 class="main-logo"></h2>
    <div class="container">
      <img src="/src/assets/images/backs/city.png" />
      <p>Выберите город</p>
      <select id="city" name="card_discount" class="reg_city">
        <option value="" disabled selected>Загрузка...</option>
      </select>
      <p class="link">
        <button
          class="button button-primary"
          style="width: 100%"
          @click="$router.push('/registration')"
        >
          Готово
        </button>
      </p>
    </div>
  </div>
</template>
