<template>
  <div id="personal_update" class="personalUpdate">
    <div class="container">
      <div
        class="personalUpdate__replaceCard"
        id="replace_card"
        style="display: none"
      >
        <p>Переход на пластиковую карту:</p>
        <div class="popup">
          <span class="popup-text" id="personal_new_card_popup"
            >Введите номер карты</span
          >
        </div>
        <input
          class="u-full-width"
          type="text"
          placeholder="Номер карты"
          id="personal_new_card"
        />
        <button id="personal_changeCard_button" class="button-primary">
          Подтвердить
        </button>
      </div>
      <div class="personalUpdate__setPlastic" style="display: none">
        <a href="#" @click="$router.push('/set_plastic')"
          >Привязать пластиковую карту</a
        >
        <p>&nbsp;</p>
        <p>Пластиковую карту можно получить в магазине.</p>
        <a href="#" @click="$router.push('/stores')">Найти магазин.</a>
        <p>&nbsp;</p>
        <a href="#" @click="$router.push('/setting_notify')"
          >Разрешения на уведомления</a
        >
      </div>
      <p class="personalUpdate__h"></p>
      <div class="popup">
        <span class="popup-text" id="personal-new-pass-popup"
          >Введите новый пароль</span
        >
      </div>
      <div class="personalUpdate__inputPass">
        <input
          class="u-full-width"
          type="password"
          placeholder="введите новый пароль"
          id="personal-new-pass"
        />
        <i class="icon-eye-off"></i>
      </div>
      <div class="popup">
        <span class="popup-text" id="personal-new-pass-confirmation-popup"
          >Введенные пароли не совпадают</span
        >
      </div>
      <div class="personalUpdate__inputPass">
        <input
          class="u-full-width"
          type="password"
          placeholder="повторите новый пароль"
          id="personal-new-pass-confirmation"
        />
        <i class="icon-eye-off"></i>
      </div>
    </div>
    <div class="container">
      <button
        id="personal_changePassword_button"
        class="button button-primary"
        style="width: 100%"
      >
        Сохранить
      </button>
    </div>
  </div>
</template>
