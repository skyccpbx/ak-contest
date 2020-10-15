<template>
  <v-app>
    <TopNav v-if="$route.meta.isNav" />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    TopNav,
    Footer
  },
  data: () => ({})
};
</script>
<style lang="scss">
img {
  max-width: 100%;
}
.contag {
  background: #141414 url("./assets/images/body-bg.jpg") no-repeat center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
@media (min-width: 1904px) {
  .container {
    max-width: 1380px;
  }
}
</style>
