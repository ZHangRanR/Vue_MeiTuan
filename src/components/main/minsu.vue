<template>
  <!-- 推荐民宿 -->
  <div>
    <div class="navBar-container">
      <NavBar
        :list="tabList"
        style="background: linear-gradient(to right,rgb(243, 182, 74) 2%,rgb(242, 197, 69) 97%)rgb(243, 182, 74);"
      />
    </div>

    <!-- tab页 -->
    <div class="tab-container">
      <MinsuInfo :minsuList="minsuList" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar.vue";
import MinsuInfo from "@/components/main/minsuInfo.vue";
import { minsu } from "@/data/minsu.js";
export default {
  data() {
    return {
      tabList: [
        {
          title: "推荐民宿",
          children: [
            "南京",
            "杭州",
            "苏州",
            "合肥",
            "宁波",
            "无锡",
            "扬州",
            "嘉兴",
            "常州",
            "黄山",
          ],
          link: "javascript:void(0)",
        },
      ],
    };
  },
  computed: {
    minsuList() {
      return minsu.sort(() => {
        return Math.random() - Math.random();
      });
    },
  },
  components: {
    NavBar,
    MinsuInfo,
  },
};
</script>

<style scoped>
</style>