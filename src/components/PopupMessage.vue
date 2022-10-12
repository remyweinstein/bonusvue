<template>
  <div
    class="popupOverlay"
    v-show="openPopup"
    :class="{
      animated: openPopup,
      animate__fadeIn: openPopup,
      animate__furious: openPopup,
    }"
  >
    <div class="popupCont">
      <h4 v-show="titlePopup">{{ titlePopup }}</h4>
      <hr />
      <h6 v-show="descPopup">{{ descPopup }}</h6>
      <p v-show="messagePopup">{{ messagePopup }}</p>
      <button id="popupButton" class="button-primary"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openPopup: false,
      titlePopup: false,
      descPopup: false,
      messagePopup: false,
    };
  },
  mounted() {
    //this.getList()
  },
  methods: {
    open(title, desc, message = false, buttonText = false, callback = false) {
      this.openPopup = true;
      this.titlePopup = title;
      this.descPopup = desc;
      this.messagePopup = message;

      //const pButton = C("#popupButton");
      let cancelText;

      if (Array.isArray(buttonText)) {
        cancelText = buttonText[1];
        buttonText = buttonText[0];
      }

      if (!buttonText) {
        buttonText = "Ок";
      }

      //hideLoader();

      if (cancelText) {
        //let className = "button";

        if (cancelText.indexOf("link:") === 0) {
          cancelText = cancelText.replace("link:", "");
          //className = "link";
        }

        //let elem = `<button class="${className}" id="cancelText">${cancelText}</button>`;

        //C("#popupCont").append(C().strToNode(elem));
      }
      /*
      pButton.bind("click", () => {
        if (callback) {
          callback();
          callback = null;
        }
      });

      pButton.text(buttonText);
      */
    },
    //getList() {
    //  axios.get('/users')
    //    .then(response => this.users = response.data)
    //},
    getUserFio(user) {
      return `${user.last_name} ${user.first_name} ${user.third_name}`;
    },
  },
};
</script>
