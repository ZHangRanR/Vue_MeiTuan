<template>
  <div class="recent-city-wrapper">
    <h3 class="title">最近访问：</h3>
    <router-link
      to="/"
      v-for="item of recentCities"
      :key="item"
      class="city"
      @click="changeCity(item)"
      >{{ item }}</router-link
    >
  </div>
</template>

<script>
export default {
  methods: {
    changeCity(cities) {
      return this.$store.commit("changeCity", cities);
    },
  },
  computed: {
    recentCities() {
      return this.$store.state.recentCities;
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
</style>