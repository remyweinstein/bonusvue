<template>
  <div id="reg_success">
    <div class="reg_success-top">
      <div class="container">
        <div class="reg_success-top-block">
          <img src="/src/assets/images/backs/success-reg.png" />
          <p>
            Ваша ВИРТУАЛЬНАЯ карта готова к использованию! Для использования
            перейдите в
            <a href="#" @click="$router.push('/wallet')">КОШЕЛЕК</a>
            и предьявите QR-код продавцу.
          </p>
          <p>ПЛАСТИКОВАЯ карта больше не нужна!</p>
          <p>
            Если вам не удобно пользоваться виртуальной картой, вы можете
            получить пластиковую карту в
            <a href="#" @click="$router.push('/stores')">любом магазине</a>.
          </p>
        </div>
      </div>
    </div>
    <div class="reg_success-bottom">
      <div class="container">
        <button
          class="button"
          style="width: 100%"
          @click="$router.push('/wallet')"
        >
          Перейти в кошелек
        </button>
      </div>
    </div>
  </div>
</template>
