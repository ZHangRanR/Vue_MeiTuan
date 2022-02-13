<template>
  <div class="login-wrapper">
    <!-- 头部 -->
    <div class="login-header">
      <router-link to="/">
        <img src="@/Images/logo2.png" alt="美团" />
      </router-link>
    </div>

    <!-- 主体 -->
    <div class="login-main">
      <!-- 图片 -->
      <div class="banner">
        <img src="@/Images/www.jpg" alt="" />
      </div>

      <!-- 登录选项 -->
      <div class="login-section">
        <form action="javascript:void(0)" method="POST">
          <!-- 账号 -->
          <span>账号登录</span>
          <div class="phone-input-wrapper">
            <span class="country-area">
              <span class="plus"></span>
              <span class="code">86</span>
              <i class="icon-arrow-right"></i>
            </span>
            <input
              type="text"
              id="login-tel"
              class="input-text phone-input"
              name="tel"
              placeholder="手机号"
              autocomplete="on"
              maxlength="15"
            />
          </div>

          <!-- 密码 -->
          <div class="password-wrapper">
            <span class="country-area">
              <i class="icon icon-password"></i>
            </span>
            <input
              type="password"
              id="login-password"
              class="input-text password-input"
              autocomplete="on"
              name="password"
              placeholder="密码"
            />
          </div>

          <!-- 忘记密码 -->
          <div class="forget">
            <a href="javascript:void(0)">忘记密码?</a>
          </div>

          <!-- 登录按钮 -->
          <div class="loginBtn" :click="cheackEvent">
            <input type="submit" class="btn" name="commit" value="登录" />
          </div>

          <!-- 立即注册 -->
          <div class="singup">
            <span>还没有账号？</span>
            <router-link to="/register">免费注册</router-link>
          </div>
        </form>

        <!-- 用户协议 -->
        <div class="user-agreement-wrap">
          <!-- 未勾选协议提示信息 -->
          <div class="user-tip" v-if="false">请先阅读并勾选用户协议</div>

          <div class="user-agreement-wrap-text">
            <label id="user-agreement-wrap-text-circle">
              <input type="checkbox" class="checkbox" value="" />
              <i></i>
            </label>
            <div class="user-agreement-content user-agreement-common">
              我已阅读并同意<a
                href="javaScript:void(0)"
                class="j-terms"
                id="meituanTos"
                >《美团用户协议》</a
              >
              <a href="javaScript:void(0)" class="j-terms" id="meituanTos"
                >《隐私政策》</a
              >
              ，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
            </div>
          </div>
        </div>

        <!-- 合作网站账号登录 -->
        <div class="other">
          <div class="Separation-line">
            <span class="text">用合作网站账号登录</span>
          </div>
          <div class="other-item">
            <span class="link-qq link"></span>
            <span class="link-weibo link"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="login-footer">
      <div class="footer-nav">
        <ul>
          <li class="first">
            <a href="javascript:void(0)">关于美团</a>
          </li>
          <li>
            <a href="javascript:void(0)">加入我们</a>
          </li>
          <li>
            <a href="javascript:void(0)">商家入驻</a>
          </li>
          <li>
            <a href="javascript:void(0)">帮助中心</a>
          </li>
          <li class="last">
            <a href="javascript:void(0)">美团手机版</a>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <p>
          ©<span>2021</span>
          <a href="javascript:void(0)">美团网团购</a>
          meituan.com
          <a href="http://www.miibeian.gov.cn/" target="_blank"
            >京ICP证070791号</a
          >
          京公网安备11010502025545号
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        // userid: null,
        // password: null,
        // isCanLogin: true,
      };
    },

    // 点击登录按钮进行验证
    cheackEvent() {
      // if (this.userid || this.password) this.isCanLogin = false;
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  overflow: hidden;
  background-color: #fff;
  font: 400 14px/1.5 "Hiragino Sans GB", "WenQuanYi Micro Hei", tahoma,
    sans-serif;
  color: #666;
  height: 100%;
}

/* 头部 */
.login-header {
  position: relative;
  width: 980px;
  height: auto;
  margin: 40px auto 30px;
  font-size: 0;
}

.login-header img {
  width: 130px;
  height: 47px;
  cursor: pointer;
}

/* 主体 */
.login-main {
  width: 980px;
  margin: 0px auto 70px;
  display: flex;
}
.banner {
  display: inline-block;
  height: 370px;
  margin: 0 115px 0 0;
  width: 480px;
}
.banner img {
  width: 480px;
  height: 370px;
}

/* 登录选项 */
.login-section {
  display: inline-block;
  padding-top: 50px;
  width: 270px;
}

/* 表单 */
form {
  width: 270px;
  font-weight: 400;
  color: #666;
}

/* 输入框包装 */
.phone-input-wrapper,
.password-wrapper {
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  border: 1px solid #aaa;
  background-color: #fff;
  margin: 8px 0 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* 86 */
.code {
  line-height: 30px;
  font-weight: 450;
}

/* 输入框文本样式 */
.input-text {
  width: 273px;
  height: 28px;
  padding: 5px;
  border: 1px solid #aaa;
  vertical-align: top;
  font-size: 14px;
}
/* 输入手机号样式 */
.phone-input {
  width: 180px;
  margin-left: 15px;
  border: none;
  max-width: 200px !important;
}

/* 输入框图标 */
.country-area {
  position: relative;
  color: #646464;
  top: 1px;
}

/* +86 加号 */
.plus {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 10px;
  height: 10px;
}
.plus:after,
.plus:before {
  content: "";
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: inset 0 0 0 1px;
}
.plus::after {
  height: 8px;
  width: 1px;
}
.plus::before {
  height: 1px;
  width: 8px;
}

/* +86 箭头 */
.icon-arrow-right {
  left: 29px;
  border-color: #646464;
  width: 5px;
  height: 5px;
  /* border-radius: 4%; */
  vertical-align: bottom;
}

/* 密码锁图标s */
.icon-password {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-position: -1250px -527px;
  background-image: url("~@/Images/img.png");
  margin: 0px 3px 0px 8px;
}

.password-input {
  margin-left: 0px;
  border: 0;
}

/* 忘记密码 */
.forget {
  font-size: 12px;
  color: #fe8c00;
  display: flex;
  justify-content: flex-end;
  margin-top: -8px;
  margin-right: 6px;
}

/* 登录按钮 */
.loginBtn {
  padding-left: 0;
  position: relative;
  padding: 16px 0px 0px 0px;
  zoom: 1;
  cursor: pointer;
}
.btn {
  width: 100%;
  color: #222;
  background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
  border-width: 0;
  box-shadow: 0 2px 1px rgb(191 105 0 / 15%);
  background-size: 100%;
  padding: 8px 20px 5px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-align: center;
  text-decoration: none;
}

/* 免费注册 */
.singup {
  margin-top: 8px;
}

/* 用户协议 */
.user-agreement-wrap {
  word-wrap: break-word;
  margin-top: 14px;
}

/* 选择按钮 */
.checkbox {
  display: none;
}
.user-agreement-wrap label .checkbox[type="checkbox"] + i {
  display: inline-block;
  border: 1px solid #ccc;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  margin: 2px 5px;
}

/* 勾选后按钮样式 */
.user-agreement-wrap label .checkbox[type="checkbox"]:checked + i::after {
  position: absolute;
  content: "";
  width: 3px;
  height: 5px;
  top: 30%;
  left: 50%;
  transform: rotate(45deg) translateX(-50%);
  border: 1px solid #222;
  border-top: none;
  border-left: none;
}

/* 字体样式 */
.user-agreement-wrap-text {
  display: flex;
  font-size: 14px;
}
.user-agreement-wrap label {
  display: inline-block;
  min-width: 10%;
}

.user-agreement-common {
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
}

/* 合作网站账号登录 */
.other {
  width: 100%;
  margin-top: 20px;
}
.Separation-line {
  position: relative;
  margin-bottom: 30px;
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 0;
  overflow: visible;
}
.text {
  position: absolute;
  top: -10px;
  left: 50%;
  margin-left: -75px;
  width: 150px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  background: #fff;
}
.other-item {
  width: 100%;
  padding-left: 88px;
}
.link {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url(~@/Images/img.png);
  cursor: pointer;
}
.link-qq {
  margin-right: 20px;
  background-position: -1250px -491px;
}
.link-weibo {
  background-position: -1250px -599px;
}

/* footer */
.login-footer {
  position: relative;
  width: 980px;
  height: auto;
  margin: 40px auto 30px;
  font-size: 10px;
}
.footer-nav {
  margin-bottom: 20px;
}
.footer-nav ul {
  color: #eee;
  padding: 12px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  color: #eee;
  display: flex;
}
.footer-nav ul li {
  margin: 5px 0;
  padding: 0 16px;
  line-height: 14px;
  border-right: 1px solid #eee;
}
.footer-nav ul li.first,
.footer-nav ul li.last {
  padding-left: 0;
}

.copyright {
  font-size: 12px;
  color: #999;
}

a {
  color: #fe8c00;
}
.login-footer a {
  color: #999;
}
</style>