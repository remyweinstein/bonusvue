<template>
  <div id="intro" class="sectionEmpty">
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
      <button
        class="button button-primary u-full-width"
        @click="$router.push('/authorization')"
      >
        Войти
      </button>
      <div class="textWings">или</div>
      <a class="link" @click="$router.push('/preregistration')"
        >Зарегистрироваться</a
      >
    </div>
  </div>
</template>
