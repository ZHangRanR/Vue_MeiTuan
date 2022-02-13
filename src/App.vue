<template>
  <div class="wrapper">
      <router-view></router-view>
  </div>
</template>

<script>

/* 引入字体图标样式 */
import "@/CSS/iconfont.css";

export default {
  name: "App",
};
</script>
  
<style>
:root {
  -webkit-font-smoothing: antialiased;
  font-family: "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue",
    "MIcrosoft YaHei", sans-serif !important;
}
@font-face {
  font-family: "MFShangHei-Regular";
  src: url("~@/font/MFShangHei-Regular.woff");
}
@font-face {
  font-family: "numbers";
  src: url("~@/font/numbers.woff");
}

#app,.wrapper{
  height: 100%;
}
a {
  color: #666;
}

a:hover {
  color: #fe8c00;
}

</style>