<template>
  <div class="film-container">
    <!-- 猫眼电影 -->
    <div class="navBar-container">
      <NavBar
        :list="tabList"
        style="background: linear-gradient(to right,rgb(250, 60, 104) 2%,rgb(254, 70, 77) 97%) rgb(250, 60, 104);"
        @mouseover="changeTab"
      />
    </div>

    <!-- 电影信息 -->
    <div class="filmInfo">
      <div class="hot" v-show="show">
        <FilmInfo :filmList="hotFilmList" />
      </div>
      <div class="coming" v-show="!show">
        <FilmInfo :filmList="comingFilmList" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar.vue";
import FilmInfo from "@/components/main/filmInfo.vue";
import { hotFilm } from "@/data/getHotFilm.js";
import { comingFilm } from "@/data/getComingFilms.js";

export default {
  data() {
    return {
      hot: true,
      show: true,
      hotFilmList: hotFilm,
      comingFilmList: comingFilm,
      tabList: [
        {
          title: "猫眼电影",
          children: ["正在热映", "即将上映"],
          link: "javascript:void(0)",
        },
      ],
    };
  },
  methods: {
    changeTab(e){
      let text = e.target.innerText;
      if(text === "正在热映") this.show = true;
      else if(text === "即将上映") this.show = false;
    }
  },
  components: {
    NavBar,
    FilmInfo,
  },
};
</script>

<style scoped>
</style>