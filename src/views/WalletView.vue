<script setup>
import { ref } from "vue";
import VueQrious from "vue-qrious";
import { useWalletStore } from "../stores/wallet.store";
import { yana, promiseTimeout } from "../helpers/funcs";
import Loader from "../components/LoaderWallet.vue";
import ListPurchases from "../components/ListPurchases.vue";

const walletStore = useWalletStore();

const cardNumber = ref(false);
const balance = ref(0);
const listPurch = ref([]);

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

const updateWallet = () => {
  const res = walletStore.data;

  cardNumber.value = res.cardNumber;
  balance.value = res.balance;
  listPurch.value = preparePurchases(res.purchases, res.transactions);
  animateBalance();
};

const preparePurchases = (purchases = [], transactions = []) => {
  const tempTransactions = transactions.reduce(function (acc, el) {
    const isBonus = el.type === "Bonus";
    const icon = isBonus ? "gift" : "clock";
    const name = isBonus ? "Подарок" : "Сгорание";

    acc.push({
      id: el.id,
      name,
      icon,
      operation_date: el.date,
      store_title: el.description,
      store_description: el.type,
      cashback_amount: Math.trunc(el.amount / 100),
      date: new Date(el.date.replace(new RegExp("-", "g"), "/")),
    });

    return acc;
  }, []);

  let tempPurchases = purchases.reduce(function (acc, el) {
    el.date = new Date(el.operation_date.replace(new RegExp("-", "g"), "/"));
    el.icon = "basket";
    el.name = "Покупка";
    el.cashback_amount = Math.trunc(el.cashback_amount);
    el.payment_amount = Math.trunc(el.payment_amount);
    acc.push(el);
    return acc;
  }, []);

  tempPurchases.push(...tempTransactions);

  return tempPurchases.sort((a, b) => b.date - a.date);
};

if (!walletStore.data) {
  await walletStore.getWallet();
}

updateWallet();
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
        <Loader :visible="!cardNumber" />
        <div class="wallet__content_data" id="wallet-data" v-show="cardNumber">
          <div class="wallet__content_data_type" id="cardType">
            Бонусная карта
          </div>
          <div
            class="wallet__content_data_qr animated animate__fadeIn"
            v-show="cardNumber"
          >
            <vue-qrious :value="cardNumber" :size="1024" foreground="#4062b7" />
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
    <ListPurchases :purchases="listPurch" />
  </div>
</template>
