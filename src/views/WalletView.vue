<template>
  <div id="wallet" class="wallet">
    <div class="wallet__content">
      <div class="container">
        <div
          class="wallet__content_placeholder"
          id="wallet-placeholder"
          style="display: none"
        >
          <div style="padding: 2rem">
            <i class="icon-pied-piper" style="font-size: 4rem"></i>
          </div>
          <h6>
            Почти готово! Осуществляется начисление бонусов, в течение минуты
            всё будет завершено.
          </h6>
        </div>
        <div class="wallet__content_loader" id="wallet-loader">
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div
          class="wallet__content_data"
          id="wallet-data"
          style="display: none"
        >
          <div class="wallet__content_data_type" id="cardType"></div>
          <div
            class="wallet__content_data_qr animated animate__fadeIn"
            id="qrcode"
            style="display: none"
          ></div>
          <div style="display: none">Ваш персональный код:</div>
          <div style="display: none">
            <span class="cardNumber neutral" id="cardNumber">Загрузка...</span>
          </div>
          <button
            id="downloadCard"
            style="display: none"
            class="animated animate__fadeIn"
          >
            Скачать QR код
          </button>
          <button class="wallet__content_data_balance button">
            <span id="cardInfo">Баланс</span>&nbsp;&nbsp;&nbsp;
            <span id="bonuses" class="load"></span>
            <span id="currencyType" class="currencyType">бонусов</span>
          </button>
          <div
            class="nearBurn animated animate__slow animate__flash"
            onClick="openNearBurning()"
          >
            Ближайшее сгорание: <span></span> бонусов<br />Хочу отложить
            сгорание
          </div>
          <div class="currentBalance">
            Доступно <span id="currentBalance"></span>
            <span class="currencyType">бонусов</span>
          </div>
          <div class="wallet__balanceDetail">
            <a href="#" data-click="openBalanceView">Подробнее...</a>
            <div class="balance-view"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="wallet__bottom">
      <div
        id="cardDataDiscount"
        class="wallet__bottom_dataDicount"
        style="display: none"
      >
        <div>С бонусами выгоднее!</div>
        <div>Переходи на бонусы,</div>
        <div>получай скидки до 50% и кэшбек до 15%!</div>
        <a href="#" @click="$router.push('/personal_update')"
          >Хочу бонусную карту!</a
        >
      </div>
      <div id="cardDataBonus" style="display: none">
        <span
          >Пока мы не запустили бонусную программу,<br />
          Ваша скидка <span id="discountValue"></span>. <br />
          О начале действия бонусной программы мы сообщим дополнительно и Вы
          сможете поспользоваться Вашими бонусами.</span
        >
      </div>
      <div id="cardDataBonusPreffered" style="display: none">
        <span>Бонусная карта, переход на дисконтную(заглушка).</span>
      </div>
      <p
        id="changeDiscountSystem"
        style="display: none; font-size: 18px; color: #616161; margin-top: 40px"
      >
        <span
          >Завтра Ваша карта станет
          <span id="changeDiscountSystemValue"></span>.</span
        >
      </p>
      <button
        id="transactions-details-button"
        class="transactions_details_button button-primary"
      >
        История
      </button>
      <div class="wallet__bottom_transactions hidden" id="transactions"></div>
    </div>
  </div>
</template>
