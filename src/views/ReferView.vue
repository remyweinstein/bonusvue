<template>
  <div id="refer" class="refer">
    <div class="container">
      <div id="referQr" class="referQr"></div>
      <h3>Хочешь еще бонусов?</h3>
      <p>
        Пригласи друга и получи дополнительные <strong>1000</strong> бонусов!
      </p>
      <p>
        Отправь другу ссылку на регистрацию и получи
        <strong>1000</strong> бонусов на свой счет после его первой покупки в
        магазине «Столица»*
      </p>
      <p>Количество ссылок не ограничено, больше друзей – больше бонусов!</p>
      <p>
        <small
          >*Бонусы начисляются после первой совершенной покупки другом.</small
        >
      </p>
      <p class="link">
        <a href="#" onClick="showRefRules();">Полные правила акции</a>
      </p>
      <p>
        Отсканируйте QR код с другого устройства, либо поделитесь ссылкой с
        друзьями:
      </p>
      <p id="referLink" style="display: none" class="animated animate__fadeIn">
        <a id="referLinkWA" href=""
          ><img
            style="width: 64px"
            loading="lazy"
            src="/src/assets/images/social/whatsapp-128x128.png"
            alt="WHATSAPP"
        /></a>
        <a id="referLinkTG" href=""
          ><img
            style="width: 64px"
            loading="lazy"
            src="/src/assets/images/social/telegram-128x128.png"
            alt="TELEGRAM"
        /></a>
      </p>
      <p>История отправленных приглашений:</p>
      <table class="u-full-width" style="font-size: 1.1rem">
        <tbody id="referrals"></tbody>
      </table>
    </div>
  </div>
</template>
