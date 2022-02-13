<template>
  <div class="default-container">
    <div class="headerBox">
      <HearderBox />
    </div>
    <div class="mainBox">
      <router-view></router-view>
    </div>
    <div class="footerBox">
      <FooterBox />
    </div>
  </div>
</template>

<script>
import HearderBox from "@/components/header/index";
import FooterBox from "@/components/footer/index.vue";
export default {
  components: {
    HearderBox,
    FooterBox,
  },
};
</script>

<style scoped>
div.headerBox {
  width: 100%;
  box-shadow: 0px 5px 10px 1px rgba(161, 161, 161, 0.3);
}

div.mainBox {
  width: 100%;
}

.footerBox {
  margin-top: 40px;
}
</style>