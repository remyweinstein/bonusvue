<script setup>
import yana from "../helpers/funcs";
defineProps({
  visible: Boolean,
  onlyDate: String,
  totalDisc: String,
  refund: String,
  amount: String,
  cashback: String,
  linkStore: String,
  tempPositions: [],
});

const preparePos = (positions) => {
  const acc = [];
  
  positions.forEach((position) => {
    const {cashback_amount, count, amount, product_title, discount_amount, payment_amount} = position;
    let counter = "_";
    let discount  = "";
      
    if (count) {
      let tmpCounter = count.split(".");
      counter = tmpCounter[1] > 0 ? count : tmpCounter[0];
    }
    
    if(discount_amount && discount_amount > 0){
      discount  = `${yana(discount_amount, "-")} Р`;
    }

    if(payment_amount && payment_amount != 0){
      discount  = `${yana(payment_amount)} Б`;
    }

    amount = yana(amount);
    cashback_amount = yana(cashback_amount, "+");
    product_title = `${(product_title || "Загрузка..")}`;

    acc.push({cashback_amount, counter, amount, product_title, discount});
  });

  return acc;
};
</script>

<template>
  <div class="positionOverlay" v-show="visible">
    <div class="positionOverlay__cont animated animate__fadeInDown">
      <h4><center>Детализация</center></h4>
      <div class="payment-row-date">
        <span>{{ onlyDate }}</span>
        <span><i class="icon-cancel" @click="$emit('close')"></i></span>
      </div>
      <div class="payment-row">
        <span>Всего скидка: </span>
        <span class="bad">{{ totalDisc }} <span>Р</span></span>
        {{ refund }}
      </div>
      <div class="payment-row">
        <span class="payment-amount" style="margin-left: 20px;">из них бонусами: </span>
      <span class="bad">{{ (amount ? `${amount} <span>Б</span>` : '') }}</span>
      </div>
      <div class="payment-row">
        <span class="payment-amount">Начислено бонусов: </span>
        <span class="good">{{ (cashback ? `${cashback} <span>Б</span>` : '') }}</span>
      </div>
      <div class="payment-row-store">
        <span class="payment-amount">Магазин: </span>
        <span>
          {{ linkStore }}
        </span>
      </div>
      <div class="payment-details important">
        <span>Оплачено</span>
        <span>Скидка</span>
        <span>Начислено</span>
      </div>
      <span v-for="position in preparePos(tempPositions)">
        <div class="payment-details payment-details-full">
          <span>
            {{ position.product_title }}
          </span>
          <span>
            x {{ position.counter }} шт
          </span>
        </div>
        <div class="payment-details import">
          <span class="b">{{ position.amount }} руб</span>
          <span class="bad b">{{ position.discount }}</span>
          <span class="good b">{{ position.cashback_amount }} Б</span>
        </div>
      </span>
      <center><button @click="$emit('close')">Закрыть</button></center>
    </div>
  </div>
</template>
