<script setup>
defineProps({
  visFeed: Boolean,
});
</script>

<template>
  <div class="feedback animated animate__slideInDown" v-show="visFeed">
    <div class="container">
      <div class="row">
        <div class="six columns">
          <label for="feedback-name">Ваше имя</label>
          <input
            id="feedback-name"
            class="u-full-width"
            type="text"
            placeholder="Имя"
          />
          <label for="feedback-email">Email</label>
          <input
            id="feedback-email"
            class="u-full-width"
            type="text"
            placeholder="My@mail.com"
          />
        </div>
        <div class="six columns">
          <div class="popup">
            <span class="popup-text" id="feedback-phone-mask-popup"
              >Введите номер телефона</span
            >
          </div>
          <label for="feedback-phone-mask">Телефон</label>
          <div class="maskedInput">
            <input id="feedback-phone-mask" class="u-full-width" type="tel" />
          </div>
          <label for="feedback-reason">Причина обращения</label>
          <select id="feedback-reason" class="u-full-width">
            <option value="Комментарий">Комментарий</option>
            <option value="Вопрос">Вопрос</option>
            <option value="Ошибка">Ошибка</option>
            <option value="Предложение">Предложение</option>
          </select>
        </div>
      </div>
      <div class="popup">
        <span class="popup-text" id="feedback-message-popup"
          >Введите сообщение</span
        >
      </div>
      <label for="feedback-message">Сообщение</label>
      <textarea
        class="u-full-width"
        placeholder="Здравствуйте!"
        id="feedback-message"
      ></textarea>
      <input id="feedback-account" disabled style="display: none" />
      <div class="row">
        <div class="six columns">
          <input
            id="feedback-submit"
            class="u-full-width button-primary"
            type="submit"
            value="Отправить"
          />
        </div>
        <div class="six columns">
          <button class="u-full-width" @click="$emit('close')">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>
