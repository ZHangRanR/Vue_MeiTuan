<template>
  <div class="header-container">
    <div class="bannerBar">
      <BannerBar />
    </div>
    <div class="searchBar">
      <SearchBar />
    </div>
  </div>
</template>

<script>
import BannerBar from "./bannerBar";
import SearchBar from "./searchBar";

export default {
  components: {
    BannerBar,
    SearchBar,
  },
};
</script>

<style scoped>
/* 导航区域样式 */
div.bannerBar {
  width: 100%;
  height: 40px;
  font-size: 12px;
  background-color: #f8f8f8;
}

/* 搜索区域 样式 */
.searchBar{
  width: 100%;
  background: #fff;
}


</style>