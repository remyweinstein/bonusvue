<script setup>
import { ref } from "vue";
import { yana } from "../helpers/funcs";
import PopupPurchase from "../components/PopupPurchase.vue";

defineProps({
  purchases: Array,
});

const isOpen = ref(false);
const popupVisible = ref(false);
const popupDate = ref(null);
const popupTotalDisc = ref(null);
const popupRefund = ref(null);
const popupAmount = ref(null);
const popupCashback = ref(null);
const popupLinkStore = ref(null);
const popupPositions = ref([]);

const openPopup = (check) => {
  const {
    discount_amount,
    payment_amount,
    cashback_amount,
    operation_date,
    operation_type,
    store_title,
    positions,
  } = check;

  popupVisible.value = true;
  popupDate.value = operation_date.substr(0, 10).split("-").reverse().join(".");
  popupTotalDisc.value =
    discount_amount || payment_amount
      ? "-" + yana(Math.abs(discount_amount) + Math.abs(payment_amount))
      : "";
  popupRefund.value = operation_type;
  popupAmount.value = payment_amount ? yana(payment_amount) : "";
  popupCashback.value =
    cashback_amount > 0 ? "+" + yana(cashback_amount) : yana(cashback_amount);
  popupLinkStore.value = `<span>${store_title}</span>`;
  popupPositions.value = positions;
};

const openHistory = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <PopupPurchase
    :visible="popupVisible"
    :onlyDate="popupDate"
    :totalDisc="popupTotalDisc"
    :operation_type="popupRefund"
    :amount="popupAmount"
    :cashback="popupCashback"
    :linkStore="popupLinkStore"
    :tempPositions="popupPositions"
    @close="popupVisible = false"
  />
  <div class="wallet__bottom">
    <button
      id="transactions-details-button"
      class="transactions_details_button button-primary"
      @click="openHistory"
    >
      История
    </button>
    <div
      class="wallet__bottom_transactions"
      :class="!isOpen ? 'hidden' : null"
      v-if="purchases.length !== 0"
    >
      <div
        class="animated animate__fadeIn"
        v-for="purch in purchases"
        :key="purch.id"
        :data-purchase-id="purch.id"
      >
        <div>
          <span>{{ purch.operation_date }}</span>
          <span>&nbsp;</span>
          <span class="delete trans" :data-disable-purchase="purch.id">
            <i class="icon-cancel"></i>
          </span>
        </div>
        <div
          class="purchase__row"
          @click="purch.positions ? openPopup(purch) : null"
        >
          <span class="type">
            <span class="ring"><i :class="purch.icon"></i></span>
            <span :class="`title-${purch.icon}`">{{ purch.name }}</span>
          </span>
          <span
            class="bad"
            v-html="
              purch.payment_amount
                ? `${purch.payment_amount} <span>Б</span>`
                : ''
            "
          ></span>
          <span
            :class="purch.cashback_amount > 0 ? `good` : `bad`"
            v-html="
              purch.cashback_amount
                ? `${purch.cashback_amount} <span>Б</span>`
                : ''
            "
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
