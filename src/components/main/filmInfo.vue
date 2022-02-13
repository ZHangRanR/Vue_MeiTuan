<template>
  <div class="filmInfo-container">
    <div class="film-showBox">
      <div class="film-all" :style="{left:offsetDis + 'px'}">
        <!-- 电影海报样式 -->
        <div class="film-item"  v-for="item of filmList" :key="item.id">
          <a href="javascript:void(0)">
            <img :src="item.img" :alt="item.videoName" class="film-image" />
            <img
              src="https://s0.meituan.net/bs/fe-web-meituan/052dd6d/img/imax.png"
              :alt="item.ver"
              v-if="item.ver.indexOf('IMAX') !== -1"
              class="film-mark"
            />
            <div class="film-msg" v-if="item.mk !== 0">
              <p class="film-score">
                <b
                  >观众评分 <span>{{ item.mk }}</span></b
                >
              </p>
              <p class="film-name">{{ item.nm }}</p>
              <span class="buy-ticket">购票</span>
            </div>
            <div class="film-msg"  v-else-if="item.wish">
               <p class="film-score">
                <b> <span>{{ item.wish }}</span>人想看</b>
              </p>
              <p class="film-name">{{ item.nm }}</p>
              <span class="buy-ticket">预购</span>
            </div>
          </a>
        </div>
      </div>
      <div class="slider-btn">
        <div class="btn btn-prev" @click="prevBox"></div>
        <div class="btn btn-next" @click="nextBox"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import { hotFilm } from "@/data/getHotFilm.js";
export default {
  props:["filmList"],
  data() {
    return {
      offsetDis:0,
    };
  },
  methods:{
    nextBox(){
      if (this.cilentW[0].clientWidth == 1190 ) this.offsetDis = -1170;
    
      if(this.cilentW[0].clientWidth == 950) {
        if (this.offsetDis > -936) this.offsetDis -= 936;
        else this.offsetDis = -1404;
      }
    },
    prevBox(){
      if (this.cilentW[0].clientWidth == 1190 ) this.offsetDis = 0;
    
      if(this.cilentW[0].clientWidth == 950) {
        if (this.offsetDis == -1404 ) this.offsetDis += 468;
        else if (this.offsetDis < 0 ) this.offsetDis += 936;
        else this.offsetDis = 0;
      }
    }
  },
  computed:{
    cilentW(){
      return document.getElementsByClassName('maoyan-container')
    }
  },
  mounted() {
    // console.log(axios)
    // axios({
    //   method: "GET",
    // url: "data/getGotFilm.json",
    // params: { ci: 10, limit: 10 },
    // })
    //   .then((res) => {
    // console.log(res);
    // })
    // .catch((err) => {
    // console.log(err);
    // });
  },
};
</script>

<style scoped>
.filmInfo-container {
  width: 100%;
  height: 100%;
}

.film-all {
  display: flex;
  /* justify-content: space-around; */
  margin: 0 12px;
  position: relative;
  height: 100%;
  transition: left 0.5s;
  transition-timing-function:linear;
}
.film-showBox {
  overflow: hidden;
}
/* 电影海报样式 */
.film-item {
  height: 297px;
  width: 214px;
  margin-right: 20px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  position: relative;
  border-radius: 2%;
}
.film-item a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
/* 电影封面 */
.film-image {
  border-radius: 4px;
  width: 100%;
  border: 0px;
  height: 297px;
  width: 214px;
}

/* 电影类型 */
.film-mark {
  position: absolute;
  top: 10px;
  z-index: 99;
  left: -6px;
  height: 20px;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
  width: auto;
  border: 0px;
}

/* 电影信息介绍 */
.film-msg {
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-image: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(29, 45, 55, 0.8) 99%
  );
}

/* 评分 */
.film-msg .film-score {
  font-size: 12px;
  color: #fff;
  text-align: left;
  margin-top: 48px;
  padding-left: 10px;
  font-weight: 500;
}

.film-score span {
  font-size: 16px;
  color: #fd9827;
  font-weight: 500;
}

/* 电影名称 */
.film-msg .film-name {
  text-align: left;
  color: #fff;
  padding-left: 10px;
  font-size: 16px;
  white-space: nowrap;
  width: 6em;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
}

/* 购票按钮 */
.buy-ticket {
  background: #ff4949;
  border-radius: 100px;
  color: #fff;
  padding: 2px 12px 3px 12px;
  font-size: 14px;
  position: relative;
  top: -24px;
  cursor: pointer;
  line-height: 20px;
  text-align: center;
  float: right;
  right: 10px;
}

/* 轮播图左右按钮 */
.slider-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
}
.btn {
  width: 40px;
  height: 40px;
  margin: 0 10px;
  background: #333;
  border-radius: 40px;
  opacity: 0;
  transition: opacity 0.5s;
  transform: scale(0.95);
  text-align: left;
  z-index: 99;
  cursor: pointer;
}
.btn::before {
  content: "";
  display: block;
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  border: 3px solid rgb(255, 255, 255);
  border-left-color: transparent;
  border-top-color: transparent;
  border-radius: 25%;
  position: absolute;
  left: calc(25%);
  top: 25%;
}
.btn-prev {
  transform: rotate(-225deg);
}
.btn-next {
  transform: rotate(-45deg);
}
.film-showBox:hover .btn {
  opacity: 0.8;
  transition: opacity 0.5s;
}
</style>
