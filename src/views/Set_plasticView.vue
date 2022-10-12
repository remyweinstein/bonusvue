<template>
  <div class="setPlastic" id="set_plastic">
    <div class="container">
      <div class="setPlastic__head">
        <span>Привязать пластиковую карту</span>
        <p>Пластиковую карту можно получить в магазине.</p>
        <a href="#" @click="$router.push('/stores')" tabindex="-1"
          >Найти магазин.</a
        >
      </div>
      <div class="setPlastic__foot">
        <button id="scanerQR" class="setPlastic__foot_scanerQR" tabindex="-1">
          <canvas id="canvas"></canvas>
          <span class="setPlastic__foot_scanText"
            >Просканируйте QR-код,<br />
            Что бы привязать карту</span
          >
          <span class="scan_focus">
            <span class="scan_focus-block">
              <span class="scan_focus-item1"></span>
              <span class="scan_focus-item2"></span>
              <span class="scan_focus-item3"></span>
              <span class="scan_focus-item4"></span>
              <span class="scan_focus-item5"></span>
            </span>
          </span>
          <span class="scan_border1"></span>
          <span class="scan_border2"></span>
          <span class="scan_border3"></span>
          <span class="scan_border4"></span>
        </button>
        <input type="text" name="plasticNumber" id="plasticNumber" />
        <!--style="position:absolute;left:-10000px" tabindex="-1">-->
        <button id="set_card" class="button-primary" tabindex="-1">
          Добавить
        </button>
      </div>
    </div>
  </div>
</template>
