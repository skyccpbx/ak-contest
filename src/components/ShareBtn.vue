<template>
  <div class="speed-dial">
    <v-speed-dial dark fab transition="slide-y-reverse-transition">
      <template v-slot:activator>
        <v-btn small color="white" dark fab>
          <img src="../assets/images/share-ico.png" />
        </v-btn>
      </template>
      <div class="v-speed-dial__list">
        <v-btn
          class="facebook-ico elevation-5 v-card"
          href="http://www.facebook.com/share.php?u=https://ak.txwy.tw/artcombat/"
          onclick="window.open(this.href, 'window', 'width=550, height=450,personalbar=0,toolbar=0,scrollbars=1,resizable=1'); return false;"
          fab
          small
          color="white"
        >
          <img src="../assets/images/facebook-ico.png" />
        </v-btn>
        <v-btn
          class="line-ico elevation-5 v-card"
          href="http://line.naver.jp/R/msg/text/?明日方舟Cosplay 選拔及同人二創大賽正式展開！馬上參加，萬元獎金、精美周邊等豐富獎項等著你！https://ak.txwy.tw/artcombat/"
          small
          color="white"
          target="_blank"
          fab
        >
          <img src="../assets/images/line-ico.png" />
        </v-btn>
      </div>
    </v-speed-dial>
    <v-btn
      class="go-top"
      color="#bbbbbb"
      @click="$vuetify.goTo('header')"
      dark
      fab
    >
      <img src="../assets/images/go-ico.png" />
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ShareBtn",
  data: () => ({})
};
</script>
<style lang="scss">
.speed-dial {
  position: fixed;
  right: 8vw;
  top: 65vh;
  width: 48px;
  height: 110px;
  z-index: 100;
}
.v-speed-dial {
  padding: 4px;
  border-radius: 50%;
  background: #fff;
}
.v-speed-dial__list {
  background: #fff;
  padding: 0 0 0 0 !important;
  margin-bottom: -12px;
  z-index: -1;
  border-top-left-radius: 28px !important;
  border-top-right-radius: 28px !important;
}
.facebook-ico {
  margin-bottom: 32px !important;
}
.line-ico {
  margin-top: 10px;
  margin-bottom: 6px;
}
.go-top {
  border-radius: 50%;
  max-width: 48px;
  max-height: 48px;
  margin-top: 10px;
}
</style>
