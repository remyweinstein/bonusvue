<template>
  <div id="registration" class="registration">
    <div class="container">
      <!-- Блок регистрации -->
      <div id="registration_cont" class="row registration__cont">
        <p class="hero-heading">
          Для завершения регистрации укажите свои контактные данные
        </p>
        <div>
          <input
            class="u-full-width"
            type="text"
            placeholder="Имя"
            id="reg_firstname"
          />
        </div>
        <!-- Номер телефона -->
        <div class="popup">
          <span class="popup-text" id="reg-phone-mask-popup"
            >Введите номер телефона</span
          >
        </div>
        <div class="required maskedInput">
          <input id="reg-phone-mask" type="tel" />
        </div>
        <div>
          <p>Дата рождения:</p>
          <div class="popup">
            <span class="popup-text" id="reg-birthdate-popup"
              >Вы должны быть старше 18 лет!</span
            >
          </div>
          <input
            id="reg-birthdate"
            class="u-full-width required"
            type="tel"
            placeholder="дд-мм-гггг"
          />
        </div>
        <div>
          <input
            class="u-full-width"
            type="email"
            placeholder="e-mail"
            id="reg_email"
          />
        </div>
        <div class="popup">
          <span class="popup-text" id="reg-pass-popup"
            >Введите пароль, не менее 6 символов</span
          >
        </div>
        <div id="reg_password_group" class="registration__inputPass required">
          <input
            class="u-full-width"
            type="password"
            placeholder="Пароль"
            id="reg-pass"
          />
          <i class="icon-eye-off"></i>
        </div>
        <div id="reg_password_group" class="registration__inputPass required">
          <input
            class="u-full-width"
            type="password"
            placeholder="Повторите пароль"
            id="reg-pass-confirm"
          />
          <i class="icon-eye-off"></i>
        </div>
        <!-- Система скидок -->
        <div
          id="loyalty-system"
          class="system system-reg"
          style="display: none"
        ></div>
        <!-- Согласие с условиями -->
        <p class="reg_confirm">
          Создавая аккаунт, я соглашаюсь с
          <a onclick="showRules()">правилами</a> и даю согласие на
          <a onclick="showTerms()">обработку персональных данных</a>.
        </p>
        <!-- Кнопка регистрации -->
        <button
          id="reg-button"
          class="button button-primary"
          style="width: 100%"
        >
          Создать аккаунт
        </button>
      </div>
      <!-- Блок подтверждения регистрации -->
      <div
        id="reg_confirmation"
        class="registration__confirm"
        style="display: none"
      >
        <div id="reg_confirmation_info"></div>
        <div id="reg_confirmation_remind"></div>
        <div class="popup">
          <span class="popup-text" id="reg-confirmation-code-popup"></span>
        </div>
        <input
          class="u-full-width"
          type="tel"
          maxlength="4"
          placeholder="Код"
          id="reg-confirmation-code"
        />
        <button
          class="button button-primary"
          style="width: 100%"
          onclick="confirmation()"
          id="confirmation_button"
          disabled
        >
          Подтвердить
        </button>
        <button
          class="button button-primary"
          style="width: 100%; display: none"
          onclick="confirmationReset()"
          id="confirmation_button_reset"
        >
          Получить СМС
        </button>
      </div>
      <!-- Авторизация -->
      <p class="reg_auth link">
        <span>Постойте, но ведь </span>
        <a @click="$router.push('/authorization')">я уже зарегистрирован</a>
      </p>
    </div>
  </div>
</template>
