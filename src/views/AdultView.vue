<template>
  <div id="adult" class="sectionEmpty">
    <img
      class="main-logo"
      src="/src/assets/images/logo/logo_256.png"
      alt="Столица"
      srcset="
        /src/assets/images/logo/logo_256.png   1x,
        /src/assets/images/logo/logo_256x2.png 2x,
        /src/assets/images/logo/logo_256x3.png 3x,
        /src/assets/images/logo/logo_256x4.png 4x
      "
    />
    <div class="container">
      <h5>Подтвердите, что Вам есть 18 лет</h5>
      <button
        class="button button-primary u-full-width"
        @click="$router.push('/intro')"
      >
        мне исполнилось 18 лет
      </button>
      <button class="button button-leave u-full-width">мне нет 18 лет</button>
    </div>
  </div>
</template>

<style></style>
