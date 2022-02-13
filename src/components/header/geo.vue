<template>
  <div class="geo-container">
    <svg width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
      <path
        d="M 8 16 s 6 -5.686 6 -10 A 6 6 0 0 0 2 6 c 0 4.314 6 10 6 10 z m 0 -7 a
      3 3 0 1 1 0 -6 3 3 0 0 1 0 6 z"
      />
    </svg>
    <!-- 当前选择城市 -->
    <span class="current-city">
      {{ city }}
    </span>

    <!-- 切换城市 -->
    <!-- <a class="changCity">切换城市</a> -->
    <router-link class="changCity" :to="{ name: '/cityList' }" @click="changPage">
      切换城市
    </router-link>

    <!-- 附近城市 -->
    <div class="near-city">
      [<a class="city-item" href="javascript:void(0)">彭化</a>
      <a class="city-item" href="javascript:void(0)">宜兰</a>
      <a class="city-item" href="javascript:void(0)">太仓</a>]
    </div>

    <div class="user">
      <!-- <a href="#" class="login">立即登录</a> -->
      <router-link to="/login" class="login">立即登录</router-link>
      <router-link to="/register" class="register">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    changPage(){
      this.$store.state.flag = false;
    }
  },
  computed: {
    city() {
      return this.$store.state.city;
    },
  },
  created() {
    console.log(this.$store);
  },
};
</script>

<style scoped>
.geo-container a:hover {
  color: #fe8c00;
}

.current-city {
  color: #666;
}

div.near-city {
  display: inline-block;
}
.changCity {
  padding: 0 2px;
  margin: 0 4px;
  background-color: #f4f4f4;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  color: #666;
}
div.near-city .city-item {
  margin: 0 4px;
}

div.user {
  display: inline-block;
  margin-left: 15px;
}
div.user a {
  margin-left: 10px;
}
div.user .login {
  color: #fe8c00;
}
</style>