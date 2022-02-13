<template>
  <div class="film-container">
    <!-- 猜你喜欢 -->
    <div class="navBar-container">
      <NavBar
        :list="tabList"
        style="background: linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%) rgb(88, 174, 221);"
      />
    </div>

    <!-- 商品信息 -->
    <div class="productInfo">
        <Production/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar.vue";
import Production from "@/components/main/recommendPro.vue";
export default {
  data() {
    return {
      tabList: [
        {
          title: "猜你喜欢",
          children: ["为你甄选最适合的"],
          link: "javascript:void(0)",
        },
      ]
    };
  },
  components: {
    NavBar,
    Production
  },
};
</script>

<style scoped>
</style>