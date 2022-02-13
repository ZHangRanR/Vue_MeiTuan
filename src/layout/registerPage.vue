<template>
  <div class="register-wraper">
    <div class="header-wrapper">
      <div class="header">
        <router-link to="/" class="homePage">美团</router-link>
        <div class="header-right">
          <span class="tip">已有美团账号?</span>
          <router-link to="/login" class="logn-btn">登录</router-link>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main-content">
        <form action="#">
          <!-- 手机号 -->
          <div class="form-mobile form-item">
            <label class="label-text">手机号</label>
            <input type="text" name="mobile" class="mobile text" />
          </div>
          <div class="form-item form-vbtn">
            <div class="vbtn">免费获取短信动态码</div>
          </div>

          <!-- 短信动态码 -->
          <div class="form-sms form-item">
            <label class="label-text">短信动态码</label>
            <input type="text" name="verifycode" class="sms text" />
          </div>

          <!-- 创建密码 -->
          <div class="form-pw form-item">
            <div class="pw-strength">
              <div class="pw-strength__letter">
                <span class="pw-level">弱</span>
                <span class="pw-level">中</span>
                <span class="pw-level pw-level-hight">强</span>
              </div>
            </div>
            <label class="label-text">创建密码</label>
            <input type="password" name="password" class="pw text" />
          </div>

          <!-- 确认密码 -->
          <div class="form-rpw form-item">
            <label class="label-text">确认密码</label>
            <input type="password" name="password" class="rpw text" />
          </div>

          <!-- 完成注册并登录 -->
          <div class="form-item">
            <input
              type="submit"
              name="commit"
              class="sign-login-btn"
              value="完成注册并登录"
            />
          </div>

          <!-- 用户协议 -->
          <div class="user-agreement-wrap">
            <div class="user-agreement-wrap-text">
              <label id="user-agreement-wrap-text-circle">
                <input type="checkbox" class="checkbox" value="" />
                <i></i>
              </label>
              <div class="user-agreement-content user-agreement-common">
                我已阅读并同意
                <a href="javaScript:void(0)" class="j-terms" id="meituanTos"
                  >《美团用户协议》</a
                >
                <a href="javaScript:void(0)" class="j-terms" id="meituanTos"
                  >《隐私政策》</a
                >
                ，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- footer -->
    <div class="footer">
      <div class="copyright">
        <p>
          ©meituan.com
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
export default {};
</script>

<style scoped>
.register-wraper {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

/* header */
.header-wrapper {
  border-bottom: 2px solid #d8d8d8;
  min-width: 980px;
  color: #666;
  background-color: #fff;
}
.header {
  margin: 0 auto;
  padding: 10px 0;
  width: 980px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.homePage {
  display: inline-block;
  width: 128px;
  height: 47px;
  background: url(~@/Images/logo2.png) no-repeat;
  background-size: contain;
  text-indent: -1000px;
  overflow: hidden;
}
.tip {
  vertical-align: sub;
}
.logn-btn {
  padding: 5px 10px;
  color: #222;
  font-size: 12px;
  background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
  box-shadow: 0 2px 1px rgb(191 105 0 / 15%);
  background-size: 100%;
  margin-left: 15px;
  border-radius: 2px;
  letter-spacing: 0.1em;
}

/* main */
.main {
  margin: 0 auto 30px;
  padding-top: 30px;
  width: 980px;
  min-height: 300px;
}
.form-item {
  padding: 8px 0 12px 110px;
  position: relative;
}
/* label标签 */
.label-text {
  position: absolute;
  left: 0;
  width: 100px;
  padding-top: 6px;
  font-size: 14px;
  text-align: right;
  color: #333;
}
/* input输入框 */
.text {
  width: 273px;
  height: 28px;
  margin: -1px auto;
  padding: 5px;
  border: 1px solid #aaa;
  line-height: 28px;
  vertical-align: top;
}

.form-item.form-vbtn {
  padding: 2px 0 4px 110px;
}
.vbtn {
  font-size: 14px;
  color: #fe8c00;
  font-weight: 500;
}
/* 创建密码 */
.form-pw {
  padding-top: 10px;
  padding-bottom: 30px;
}
.pw-strength {
  position: absolute;
  width: 285px;
  top: 50px;
  left: 110px;
  background: #eee;
}

/* 密码强度 */
.pw-level {
  display: block;
  float: left;
  text-align: center;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  width: 91px;
  border-right: 2px solid #fff;
  color: #fff;
}
.pw-level-hight {
  border-right: 0;
}

/* 注册并登录 */
.sign-login-btn {
  background: #ffd100;
  border-radius: 2px;
  width: 285px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1em;
  cursor: pointer;
}
.sign-login-btn:hover {
  color: #222;
  background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
  box-shadow: 0 2px 1px rgb(191 105 0 / 15%);
}

/* 用户协议 */
.user-agreement-wrap {
  display: flex;
  width: 30%;
  margin-top: 3px;
  padding-left: 110px;
  font-size: 14px;
  line-height: 21px;
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
.main a {
  color: #fe8c00;
}

/* footer */
.footer {
  display: flex;
  font-size: 13px;
  justify-content: center;
  border-top: 1px solid #eee;
}

.copyright {
  padding-top: 20px;
  color: #999;
  word-spacing: 2px;
  font-family: initial;
}
</style>