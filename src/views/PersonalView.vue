<template>
  <div class="personal" id="personal">
    <div class="personal__head">
      <div class="personal__head_avatar">
        <div class="personal__head_avatar_image">
          <img src="/src/assets/images/backs/avatar.png" />
        </div>
      </div>
      <div class="personal__head_name" id="personal_name">
        Наш Любимый Покупатель
      </div>
      <div
        class="personal__head_birthday textWings"
        id="personal_birthdate"
      ></div>
      <div class="personal__head_phone" id="personal_phone">
        +7-___-___-__-__
      </div>
    </div>
    <div class="personal__footer_event">
      <h4 class="">Обратная связь</h4>
      <ul>
        <li @click="$router.push('/notifications')">
          <i class="icon-bell"></i>Уведомления
        </li>
        <li onclick="showFeedback();return false;">
          <i class="icon-mail"></i>Задать вопрос
        </li>
        <li onclick="openFaq();return false;">
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
        <li onclick="deleteAccount();return false">
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
