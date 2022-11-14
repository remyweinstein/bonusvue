<script setup>
import { ref } from "vue";
import PopupPurchase from "../components/PopupPurchase.vue";

defineProps({
  purchases: Array,
  transactions: Array,
});

const popupVisible = ref(false);
const popupDate = ref(null);
const popupTotalDisc = ref(null);
const popupRefund = ref(null);
const popupAmount = ref(null);
const popupCashback = ref(null);
const popupLinkStore = ref(null);
const popupPositions = ref([]);

const openPopup = (check) => {
  const {discount_amount, payment_amount, cashback_amount, operation_date, operation_type, store_title, positions} = check;

  popupVisible.value = true;
  popupDate.value = operation_date.substr(0, 10).split("-").reverse().join(".");
  popupTotalDisc.value = (discount_amount || payment_amount) ? "-" + yana(Math.abs(discount_amount) + Math.abs(payment_amount)) : "";
  popupRefund.value = (!operation_type) ? '<span class="bad" style="font-size: 12px;text-align: right;">чек возврата</span>' : '';
  popupAmount.value = payment_amount ? yana(payment_amount) : "";
  popupCashback.value = (cashback_amount > 0) ? "+" + yana(cashback_amount) : yana(cashback_amount);
  popupLinkStore.value = `<span>${store_title}</span>`;
  popupPositions.value = positions;
};

const preparePurchases = (purchases = [], transactions = []) => {
    const tempTransactions = transactions.reduce(function(acc, el, i, arr) {
        acc.push({ id: el.id,
                   operation_date: el.date, 
                   store_title: el.description,
                   store_description: el.type,
                   cashback_amount: (el.amount/100),
                   date: new Date(el.date.replace(new RegExp("-", 'g'), "/")) });
        return acc;
    }, []);
    
    let tempPurchases = purchases.reduce(function(acc, el, i, arr) {
        el.date = new Date(el.operation_date.replace(new RegExp("-", 'g'), "/"));
        acc.push(el);
        return acc;
    }, []);
    
    tempPurchases.push(...tempTransactions);
    
    return tempPurchases.sort((a, b) => a.date - b.date);
};
</script>

<template>
  <PopupPurchase
    :visible="popupVisible"
    :onlyDate="popupDate"
    :totalDisc="popupTotalDisc"
    :refund="popupRefund"
    :amount="popupAmount"
    :cashback="popupCashback"
    :linkStore="popupLinkStore"
    :tempPositions="popupPositions"
  />
  <div class="wallet__bottom">
    <button
      id="transactions-details-button"
      class="transactions_details_button button-primary"
    >
      История
    </button>
    <div class="wallet__bottom_transactions hidden">
      <div class="animated animate__fadeIn" v-for="purch in preparePurchases(purchases, transactions)" :data-purchase-id="purch.id">
        <div>
          <span>{{ purch.operation_date }}</span>
          <span>&nbsp;</span>
          <span class="delete trans" :data-disable-purchase="purch.id">
            <i class="icon-cancel"></i>
          </span>
        </div>
        <div class="purchase__row" @click="(purch.transactions) ? openPopup(purch.transactions) : null">
          <span class="type">
            <span class="ring"><i class="clock"></i></span>
            <span class="title-clock">Сгорание</span></span>
          <span class="bad"></span>
          <span class="bad">-105 <span>Б</span></span>
        </div>
      </div>
    </div>
  </div>
</template>
