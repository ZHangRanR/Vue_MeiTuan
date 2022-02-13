<template>
  <div class="change-city-container">
    <!-- 按省份选择 搜索 -->
    <div class="select-area">
      <SeleceArea />
    </div>

    <!-- 热门城市 -->
    <div class="hot-city row">
      <HotCity />
    </div>

    <!-- 近期选择城市 -->
    <div class="recent-city row" v-if="recentCities.length">
      <RecentCity />
    </div>

    <!-- 按拼音首字母选 -->
    <div class="code-city">
      <CodeOfCity />
    </div>
  </div>
</template>

<script>
import SeleceArea from "./select-area.vue";
import HotCity from "./hotCity.vue";
import RecentCity from "./recentCity.vue";
import CodeOfCity from "./codeOfCity.vue";
export default {
  data() {
    return {};
  },
  computed: {
    recentCities() {
      return this.$store.state.recentCities;
    },
  },
  components: {
    SeleceArea,
    HotCity,
    RecentCity,
    CodeOfCity,
  },
};
</script>

<style scoped>
.change-city-container {
  width: 1190px;
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;
}

.select-area {
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
}

.row {
  border-bottom: 1px solid #e5e5e5;
  padding: 30px 0;
}

.code-city {
  padding: 30px 0;
}


</style>