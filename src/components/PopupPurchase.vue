<script setup>
import { yana } from "../helpers/funcs";

defineProps({
  visible: Boolean,
  onlyDate: String,
  totalDisc: String,
  operation_type: Number,
  amount: String,
  cashback: String,
  linkStore: String,
  tempPositions: Array,
});

const preparePos = (positions) => {
  const acc = [];

  positions.forEach((position) => {
    const {
      cashback_amount,
      count,
      amount,
      product_title,
      discount_amount,
      payment_amount,
    } = position;
    let counter = "_";
    let discount = "";

    if (count) {
      let tmpCounter = count.split(".");
      counter = tmpCounter[1] > 0 ? count : tmpCounter[0];
    }

    if (discount_amount && discount_amount > 0) {
      discount = `${yana(discount_amount, "-")} Р`;
    }

    if (payment_amount && payment_amount != 0) {
      discount = `${yana(payment_amount)} Б`;
    }

    const amount_c = yana(amount);
    const cashback_c = yana(cashback_amount, "+");
    const title_c = `${product_title || "Загрузка.."}`;

    acc.push({
      cashback_amount: cashback_c,
      counter,
      amount: amount_c,
      product_title: title_c,
      discount,
    });
  });

  return acc;
};

const isRefund = () => {};
</script>

<template>
  <div class="positionOverlay" v-show="visible">
    <div class="positionOverlay__cont animated animate__fadeInDown">
      <h4>Детализация</h4>
      <div class="payment-row-date">
        <span>{{ onlyDate }}</span>
        <span><i class="icon-cancel" @click="$emit('close')"></i></span>
      </div>
      <div class="payment-row">
        <span>Всего скидка: </span>
        <span class="bad">{{ totalDisc }} <span>Р</span></span>
        <span
          class="bad"
          v-show="isRefund"
          style="font-size: 12px; text-align: right"
          v-html="!operation_type ? 'чек возврата' : ''"
        ></span>
      </div>
      <div class="payment-row">
        <span class="payment-amount" style="margin-left: 20px"
          >из них бонусами:
        </span>
        <span
          class="bad"
          v-html="amount ? `${amount} <span>Б</span>` : ''"
        ></span>
      </div>
      <div class="payment-row">
        <span class="payment-amount">Начислено бонусов: </span>
        <span
          class="good"
          v-html="cashback ? `${cashback} <span>Б</span>` : ''"
        ></span>
      </div>
      <div class="payment-row-store">
        <span class="payment-amount">Магазин: </span>
        <span v-html="linkStore"></span>
      </div>
      <div class="payment-details important">
        <span>Оплачено</span>
        <span>Скидка</span>
        <span>Начислено</span>
      </div>
      <span v-for="position in preparePos(tempPositions)" :key="position.id">
        <div class="payment-details payment-details-full">
          <span>
            {{ position.product_title }}
          </span>
          <span> x {{ position.counter }} шт </span>
        </div>
        <div class="payment-details import">
          <span class="b">{{ position.amount }} руб</span>
          <span class="bad b">{{ position.discount }}</span>
          <span class="good b">{{ position.cashback_amount }} Б</span>
        </div>
      </span>
      <button @click="$emit('close')">Закрыть</button>
    </div>
  </div>
</template>
