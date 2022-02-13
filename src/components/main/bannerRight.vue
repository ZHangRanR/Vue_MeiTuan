<template>
  <div class="banner-right-contanier">
    <!-- 头部导航链接 -->
    <div class="banner-header-links">
      <a href="javascript:void(0)" class="link waimai-link" title="美团外卖"
        >美团外卖</a
      ><a href="javascript:void(0)" class="link maoyan-link" title="猫眼电影"
        >猫眼电影</a
      ><a href="javascript:void(0)" class="link hotel-link" title="美团酒店"
        >美团酒店</a
      ><a
        href="javascript:void(0)"
        class="link homestay-link"
        title="民宿／公寓"
        >民宿／公寓</a
      ><a href="javascript:void(0)" class="link merchant-link" title="商家入驻"
        >商家入驻</a
      ><a href="javascript:void(0)" class="link gongyi-link" title="美团公益"
        >美团公益</a
      >
    </div>
    <!-- 展示信息 第一行 -->
    <div class="slider-wrapper banner-row">
      <!-- 轮播图 -->
      <div class="sliderBox">
        <div
          class="slider-img-all"
          :style="{ left: offsetDis + '%', width: '500%' }"
        >
          <div class="slider-img">
            <a href="javascript:void(0)">
              <img src="~@/Images/slider_01.jpg" alt="" />
            </a>
          </div>
          <div class="slider-img">
            <a href="javascript:void(0)">
              <img src="~@/Images/slider_02.jpg" alt="" />
            </a>
          </div>
          <div class="slider-img">
            <a href="javascript:void(0)">
              <img src="~@/Images/slider_03.jpg" alt="" />
            </a>
          </div>
          <div class="slider-img">
            <a href="javascript:void(0)">
              <img src="~@/Images/slider_04.jpg" alt="" />
            </a>
          </div>
          <div class="slider-img">
            <a href="javascript:void(0)">
              <img src="~@/Images/slider_05.png" alt="" />
            </a>
          </div>
        </div>

        <!-- 左右切换按钮 -->
        <div class="slider-btn">
          <div class="btn btn-prev" @click="prevImg"></div>
          <div class="btn btn-next" @click="nextImg"></div>
        </div>
        <div class="slider-pagination">
          <div
            class="pagination"
            :class="{ active: imgPosition == 0 }"
            @mouseenter="mouseEnterImg(0)"
          ></div>
          <div
            class="pagination"
            :class="{ active: imgPosition == 1 }"
            @mouseenter="mouseEnterImg(1)"
          ></div>
          <div
            class="pagination"
            :class="{ active: imgPosition == 2 }"
            @mouseenter="mouseEnterImg(2)"
          ></div>
          <div
            class="pagination"
            :class="{ active: imgPosition == 3 }"
            @mouseenter="mouseEnterImg(3)"
          ></div>
          <div
            class="pagination"
            :class="{ active: imgPosition == 4 }"
            @mouseenter="mouseEnterImg(4)"
          ></div>
        </div>
      </div>

      <!-- 休闲娱乐 -->
      <div class="xiuxian">
        <a href="javascript:void(0)" class="item link_img_01"> </a>
      </div>

      <!-- 用户登录 -->
      <div class="userInfo" v-if="!isLogin">
        <div class="user-img">
          <img src="@/Images/avatar.jpg" alt="" />
        </div>
        <div class="user-name">Hi！你好</div>
        <router-link to="/register" class="btn-register">注册</router-link>
        <router-link to="/login" class="btn-login">立即登录</router-link>
      </div>

      <!-- 用户信息 -->
      <div class="userInfo" v-if="isLogin"></div>
    </div>

    <!-- 第二行 -->
    <div class="banner-row">
      <div class="">
        <a href="javascript:void(0)" class="item link_img_02"> </a>
      </div>
      <div class="">
        <a href="javascript:void(0)" class="item link_img_03"> </a>
      </div>
      <div class="">
        <a href="javascript:void(0)" class="item link_img_04"> </a>
      </div>
      <div class="item download-app">
        <div class="qrcode-box">
          <img src="~@/Images/download-qr.png" alt="下载APP" />
        </div>
        <p class="app-name">美团APP手机版</p>
        <p class="sl">
          <span class="red">1元起</span><span class="gary">吃喝玩乐</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ibody: document.getElementsByClassName("sliderBox").item(0),
      imgWidth: null,
      offsetDis: 0,
      timer: null,
      isLogin: this.$store.state.isLogin,
      imgList: document.getElementsByClassName("slider-img"),
      prevCount: 0,
      nowCount: 0,
    };
  },
  methods: {
    nextImg() {
      this.imgPosition === 4 ? (this.offsetDis = 0) : (this.offsetDis -= 100);
      this.autoShowImg();
    },
    prevImg() {
      this.imgPosition === 0
        ? (this.offsetDis = -100 * 4)
        : (this.offsetDis += 100);
      this.autoShowImg();
    },
    autoShowImg() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.nextImg();
      }, 5000);
    },
    mouseEnterImg(n) {
      this.offsetDis = -100 * n;
    },
    toggleClass() {
      this.imgList[this.prevCount].classList.remove("active");
      this.imgList[this.nowCount].classList.add("active");
    },
  },
  computed: {
    imgPosition() {
      return Math.abs(this.offsetDis / 100);
    },
  },
  watch: {
    imgPosition() {
      this.prevCount = this.nowCount;
      this.nowCount = this.imgPosition;
      this.toggleClass();
    },
  },
  mounted() {
    this.imgList[0].classList.add("active");
    this.autoShowImg();
  },
};
</script>

<style scoped>
.banner-right-contanier {
  margin-left: 10px;
  margin-top: 10px;
  position: relative;
}
.banner-header-links {
  position: absolute;
  top: -45px;
  left: 20px;
}

.banner-header-links a.link {
  color: #222;
  font-weight: 700;
  font-size: 16px;
  margin: 0 20px;
  cursor: pointer;
}

.banner-header-links a.waimai-link:hover {
  color: #fbc700;
}
.banner-header-links a.maoyan-link:hover {
  color: #ed1e24;
}
.banner-header-links a.hotel-link:hover {
  color: #f04d4e;
}
.banner-header-links a.homestay-link:hover {
  color: #fdc411;
}
.banner-header-links a.merchant-link:hover {
  color: #fe8c00;
}
.banner-header-links a.gongyi-link:hover {
  color: #f04d4e;
}

/* 行样式 */
.banner-row {
  display: flex;
}
/* 轮播图区域 */
.sliderBox {
  width: 550px;
  height: 240px;
  overflow: hidden;
  position: relative;
}
.slider-img-all {
  display: flex;
  /* width: 2750px; */
  position: relative;
  flex-grow: 1;
}
.slider-img {
  width: 550px;
  height: 240px;
  opacity: 0.3;
  z-index: 10;
  transition: all 0.5s ease-in;
}
.slider-img.active {
  opacity: 1;
  z-index: 50;
}
.slider-img img {
  width: 100%;
  height: 100%;
}

/* 轮播图左右按钮 */
.slider-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 43%;
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
.sliderBox:hover .btn {
  opacity: 0.8;
  transition: opacity 0.5s;
}

/* 轮播图底部导航条 */
.slider-pagination {
  position: absolute;
  bottom: 10px;
  left: calc(50% - 50px);
  display: flex;
  z-index: 99;
}
.pagination {
  width: 10px;
  height: 2px;
  margin-right: 10px;
  background: rgb(255, 255, 255);
  opacity: 0.2;
  transition: all ease-out 0.5s;
}
.pagination.active {
  opacity: 0.9;
}

/* 图片链接样式 */
.item {
  display: block;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fff;
}
.link_img_01 {
  width: 150px;
  height: 240px;
  margin-left: 10px;
  background-image: url("~@/Images/xiuxian.jpg");
}
.link_img_02,
.link_img_03 {
  width: 270px;
  height: 165px;
  margin-top: 10px;
}
.link_img_02 {
  background-image: url("~@/Images/hotel.png");
}
.link_img_03 {
  margin-left: 10px;
  background-image: url("~@/Images/edu.jpg");
}
.link_img_04 {
  width: 150px;
  height: 165px;
  margin-top: 10px;
  margin-left: 10px;
  background-image: url("~@/Images/customer.jpg");
}

/* APP 下载二维码 */
.download-app {
  width: 228px;
  height: 165px;
  margin-top: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border: 1px solid #ddd;
  margin-left: 10px;
}
.download-app .qrcode-box {
  margin-top: 10px;
}
.qrcode-box img {
  width: 95px;
  height: 95px;
}
.app-name {
  font-size: 16px;
  color: #222222;
  font-weight: 500;
}

.download-app .sl {
  font-size: 12px;
  font-weight: 500;
  margin-top: 2px;
}
.download-app .sl .red {
  color: #ec5330;
  margin-right: 5px;
}
.download-app .gary {
  color: #3f3f3f;
}

/* 用户登录信息 */
.userInfo {
  width: 230px;
  height: 240px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  padding-top: 30px;
  margin-left: 10px;
}

.userInfo .user-img {
  border-radius: 30px;
  margin: 0px auto 4px auto;
  display: flex;
  justify-content: center;
}

.userInfo .user-img img {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  border: 4px solid #e5e5e5;
}

.userInfo .user-name {
  font-size: 16px;
  color: #222;
  text-align: center;
  font-weight: 500;
  width: 6em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 8px auto 10px;
}

.btn-login,
.btn-register {
  width: 118px;
  text-align: center;
  margin: 0px auto 15px auto;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 40px;
  font-size: 14px;
  color: #333;
  transition: background-color 0.5s;
  display: block;
  line-height: 38px;
}
.btn-login:hover,
.btn-register:hover {
  background: rgba(240, 240, 240, 0.5);
}
</style>