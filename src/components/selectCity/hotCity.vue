<template>
  <div class="hot-city-wrapper">
    <h3 class="title">热门城市：</h3>
    <router-link
      to="/"
      v-for="item of citiesList"
      :key="item"
      class="city"
      @click="changeCity(item)"
      >{{ item }}</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      citiesList: this.$store.state.hotCity
    };
  },
  methods: {
    changeCity(cities) {
      return this.$store.commit("changeCity", cities);
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  vertical-align: top;
  display: inline-block;
}

.city {
  font-size: 14px;
  vertical-align: top;
  margin: 2px 20px 0;
  color: #666;
  display: inline-block;
}


.city:hover{
    color: #222 !important;
  }
</style>