<template>
  <div class="banner-container">
    <Geo />
    <Nav />
  </div>
</template>

<script>
import Geo from "./geo.vue";
import Nav from "./nav.vue";
export default {
  data() {
    return {};
  },
  components: {
    Geo,
    Nav,
  },
};
</script>

<style scoped>
.banner-container {
  width: 1190px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
}

</style>