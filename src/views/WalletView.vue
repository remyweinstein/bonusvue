<script setup>
import { ref } from "vue";
import VueQrious from "vue-qrious";
import useWalletStore from "../stores/wallet.store";

const walletStore = useWalletStore();
const cardNumber = ref(null);
const balance = ref(null);
const purchases =ref([]);

const updateWallet = async () => {
  const data = await walletStore.getWallet();
  cardNumber.value = data.cardNumber;
  balance.value = data.balance;
  animateBalance();
};

updateWallet();

const yana = (val, plus, notnull) => {
  const format = new Intl.NumberFormat("ru-RU").format(Math.trunc(val));
  if (notnull) {
    return "";
  }
  if (plus && val > 0) {
    return plus + format;
  }
  return format;
};

const animateBalance = () => {
  const bal = balance.value;
  for (let i = 1; i < 101; i = i + 3) {
    promiseTimeout(() => {
      balance.value = bal * (i / 100);
    }, 10 * i);
  }
  promiseTimeout(() => {
    balance.value = bal;
  }, 1000);
};

const promiseTimeout = async (fn, ms) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return fn();
};
</script>
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
        <div class="wallet__content_loader" v-show="!cardNumber">
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="wallet__content_data" id="wallet-data" v-show="cardNumber">
          <div class="wallet__content_data_type" id="cardType">
            Бонусная карта
          </div>
          <div
            class="wallet__content_data_qr animated animate__fadeIn"
            v-show="cardNumber"
          >
            <vue-qrious :value="cardNumber" size="1024" foreground="#4062b7" />
          </div>
          <div style="display: none">Ваш персональный код:</div>
          <div style="display: none">
            <span class="cardNumber neutral" id="cardNumber">Загрузка...</span>
          </div>
          <button class="animated animate__fadeIn">Скачать QR код</button>
          <button class="wallet__content_data_balance button">
            <span>Баланс</span>&nbsp;&nbsp;
            <span :class="cardNumber ? '' : 'load'">
              {{ yana(balance) }}&nbsp;
            </span>
            <span class="currencyType">бонусов</span>
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
      <button
        id="transactions-details-button"
        class="transactions_details_button button-primary"
      >
        История
      </button>
      <div class="wallet__bottom_transactions hidden">
        <div class="animated animate__fadeIn" v-for="purch in purchases" data-purchase-id="1309420">
          <div>
            <span>06.11.2022</span>
            <span>&nbsp;</span>
            <span class="delete trans" data-disable-purchase="1309420"
              ><i class="icon-cancel"></i
            ></span>
          </div>
          <div class="purchase__row">
            <span class="type"
              ><span class="ring"><i class="clock"></i></span>
              <span class="title-clock">Сгорание</span></span
            >
            <span class="bad"></span>
            <span class="bad">-105 <span>Б</span></span>
          </div>
        </div>


        <div class="animated animate__fadeIn" data-purchase-id="1309420">
          <div>
            <span>06.11.2022</span>
            <span>&nbsp;</span>
            <span class="delete trans" data-disable-purchase="1309420"
              ><i class="icon-cancel"></i
            ></span>
          </div>
          <div class="purchase__row">
            <span class="type"
              ><span class="ring"><i class="clock"></i></span>
              <span class="title-clock">Сгорание</span></span
            >
            <span class="bad"></span>
            <span class="bad">-105 <span>Б</span></span>
          </div>
        </div>

        <div class="animated animate__fadeIn" data-purchase-id="1857478">
          <div>
            <span>29.10.2022</span>
            <span>&nbsp;</span>
            <span class="delete purch" data-disable-purchase="1857478"
              ><i class="icon-cancel"></i
            ></span>
          </div>
          <div class="purchase__row">
            <span class="type"
              ><span class="ring"><i class="basket"></i></span>
              <span class="title-basket">Покупка</span></span
            >
            <span class="bad">0 <span>Б</span></span>
            <span class="good">+36 <span>Б</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
