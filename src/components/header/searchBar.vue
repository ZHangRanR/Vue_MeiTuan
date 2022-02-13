<template>
  <div class="search-container" :class="{paddingBot:bott}">
    <!-- 美团logo -->
    <div class="meituan-logo">
      <a href="/">
        <img src="@/Images/logo.png" alt="美团" />
      </a>
    </div>

    <!-- 搜索框部分 -->
    <div class="search-module">
      <div class="searchBox">
        <input type="text" placeholder="搜索商家或地点" />
        <button>
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <circle r="7" cx="7" cy="7"></circle>
            <circle r="5" cx="7" cy="7" fill="#ffc300"></circle>
            <line
              x1="12"
              y1="12"
              x2="18"
              y2="18"
              stroke="#000"
              stroke-width="2"
            ></line>
            ;
          </svg>
        </button>
      </div>
      <div class="showList"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed:{
    bott(){
      return this.$store.state.flag;
    }
  },
  // 搜索框请求地址
  // https://www.meituan.com/ptapi/suggest?keyword=123
};
</script>

<style scoped>
/* 搜索部分样式 */
.search-container {
  width: 1190px;
  background: #fff;
  margin: 0 auto;
  display: flex;
}
.paddingBot{
  padding-bottom: 35px ;
}
/* 美团logo样式 */
div.meituan-logo {
  padding: 28px 60px 40px 0px;
  font-size: 16px;
  min-width: 220px;
  height: 54px;
  box-sizing: content-box;
}

div.meituan-logo img {
  width: 126px;
  height: 46px;
  border: 0;
}

/* 搜索部分样式 */
div.search-module {
  padding-top: 28px;
  position: absolute;
  left: calc(50%);
  transform: translate(-50%);
  z-index: 999;
}

div.searchBox {
  width: 550px;
  height: 40px;
}
/* input 输入框样式 */
div.search-module input {
  display: inline-block !important;
  box-sizing: border-box;
  line-height: 100%;
  width: 85.45%;
  height: 100%;
  padding: 15px;
  font-size: 14px;
  background: transparent;
  border: 1px solid #e5e5e5;
  border-right: none;
  border-radius: 4px 0 0 4px;
  vertical-align: top;
}

/* 搜索按钮样式 */
div.search-module button {
  color: #222222;
  width: 14.55%;
  height: 100%;
  line-height: 100%;
  box-sizing: border-box;
  background: #ffc300;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  vertical-align: middle;
}

/* 搜索匹配信息列表 */
div.showList {
  display: none;
  width: 85.45%;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid #e5e5e5;
  border-top: none;
  min-height: 15px;
}

/*  */
div.search-module:focus-within .showList {
  display: block;
}

</style>