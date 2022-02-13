<template>
  <div class="main-container">
    <!-- 分类 -->
    <div class="main-banner">
      <!-- 全部分类区域 -->
      <div class="banner-left">
        <!-- 全部分类列表 -->
        <Category />
      </div>
      <!-- right区域 -->
      <div class="banner-right">
        <BannerRight />
      </div>
    </div>

    <!-- 猫眼电影 -->
    <div class="maoyan-container">
      <Films />
    </div>

    <!-- 推荐民宿 -->
    <div class="minsu-container">
      <MinSu />
    </div>

    <!-- 猜你喜欢 -->
    <div class="minsu-container">
      <Recommend />
    </div>

    <div class="mt-link">
       <MTLinks />
    </div>
  </div>
</template>

<script>
import Category from "./category.vue";
import BannerRight from "./bannerRight.vue";
import Films from "./film.vue";
import MinSu from "./minsu.vue";
import Recommend from "./recommend.vue";
import MTLinks from "./mtlinks.vue"

export default {
  components: {
    Category,
    BannerRight,
    Films,
    MinSu,
    Recommend,
    MTLinks
  },
};
</script>

<style scoped>
/* 美团页面首页 主区域样式 */
div.main-container {
  width: 1190px;
  margin: 0 auto;
}

/* banner 部分样式 */
div.main-banner {
  display: flex;
}

/* 左边部分样式 */
.banner-left {
  position: relative;
  width: 230px;
  height: 475px;
  text-align: left;
  box-sizing: border-box;
  margin-top: -50px;
  color: #646464;
  background: #fff;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
}

/* 猫眼电影样式 */
.maoyan-container {
  margin-top: 40px;
  position: relative;
  width: 100%;
}

/* 推荐民宿样式 */
.minsu-container {
  margin-top: 40px;
  position: relative;
  width: 100%;
}
</style>