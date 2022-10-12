<template>
  <div id="reset">
    <div class="container">
      <h3>Не удается войти?</h3>
      <i class="icon-lock-open-alt" style="font-size: 48px"></i>
      <p class="hero-heading">Введите ваш номер мобильного телефона</p>
      <div class="popup">
        <span class="popup-text" id="reset-phone-mask-popup"
          >Введите номер телефона</span
        >
      </div>
      <div class="maskedInput">
        <input id="reset-phone-mask" type="tel" />
      </div>
      <button
        class="button button-primary"
        style="width: 100%"
        id="reset_button"
        disabled
      >
        Получить код для входа
      </button>
      <!-- Блок подтверждения входа -->
      <div
        id="reset_confirmation"
        style="display: none"
        class="animated animate__fadeIn"
      >
        <div id="reset_confirmation_info" style="font-weight: bold"></div>
        <input
          class="u-full-width"
          maxlength="4"
          type="tel"
          placeholder="Код"
          id="reset_confirmation_code"
        />
        <p
          id="reset_confirmation_time"
          class="neutral"
          style="display: none"
        ></p>
        <p class="link">
          <span>Мне не позвонили,</span>
          <a href="#" onclick="showRequestSms()">что мне делать?</a>
        </p>
        <button
          class="button button-primary"
          style="width: 100%"
          onclick="checkResetConfirmationCode()"
          id="reset_confirmation_button"
          disabled
        >
          Войти
        </button>
      </div>
      <div class="textWings">или</div>
      <p class="link">
        <a href="#" @click="$router.push('/preregistration')"
          >Создать новый аккаунт</a
        >
      </p>
    </div>
  </div>
</template>
