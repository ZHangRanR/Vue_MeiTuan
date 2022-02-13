<template>
  <div class="nav-container">
    <ul class="nav-list">
      <!-- 我的美团 -->
      <li class="nav-item nav-drop-down">
        <router-link to="/">我的美团</router-link>
        <dl class="drop-down-list nav-myMT">
          <dd>
            <router-link to="/">我的订单</router-link>
          </dd>
          <dd>
            <router-link to="/">我的收藏</router-link>
          </dd>
          <dd>
            <router-link to="/">抵用卷</router-link>
          </dd>
          <dd>
            <router-link to="/">账户设置</router-link>
          </dd>
        </dl>
      </li>

      <!-- 手机APP -->
      <li class="nav-item">
        <router-link to="/">手机APP</router-link>
      </li>

      <!-- 商家中心 -->
      <li class="nav-item nav-drop-down">
        <router-link to="/">商家中心</router-link>
        <dl class="drop-down-list nav-merCenter">
          <dd>
            <router-link to="/">美团餐饮商户中心</router-link>
          </dd>
          <dd>
            <router-link to="/">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link to="/">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link to="/">手机免费开店</router-link>
          </dd>
          <dd>
            <router-link to="/">到店综合业务招募</router-link>
          </dd>
          <dd>
            <router-link to="/">餐饮合作商招募</router-link>
          </dd>
          <dd>
            <router-link to="/">商家申请开票</router-link>
          </dd>
          <dd>
            <router-link to="/">免费合作美团排队</router-link>
          </dd>
        </dl>
      </li>

      <!-- 美团规则 -->
      <li class="nav-item nav-drop-down">
        <router-link to="/">美团规则</router-link>
        <dl class="drop-down-list nav-rule">
          <dd>
            <router-link to="/">规则中心</router-link>
          </dd>
          <dd>
            <router-link to="/">规则目录</router-link>
          </dd>
          <dd>
            <router-link to="/">规则评议院</router-link>
          </dd>
        </dl>
      </li>

      <!-- 网站导航 -->
      <li class="nav-item nav-drop-down">
        <router-link to="/">网站导航</router-link>
        <div class="drop-down-list nav-web">
          <!-- 酒店旅游 -->
          <dl class="web-jiulv web-item">
            <dt>酒店旅游</dt>
            <dd><router-link to="/" target="_blank">国际机票</router-link></dd>
            <dd><router-link to="/" target="_blank">火车票</router-link></dd>
            <dd><router-link to="/" target="_blank">民宿</router-link></dd>
            <dd>
              <router-link to="/" target="_blank">经济型酒店</router-link>
            </dd>
            <dd><router-link to="/" target="_blank">主题酒店</router-link></dd>
            <dd><router-link to="/" target="_blank">商务酒店</router-link></dd>
            <dd><router-link to="/" target="_blank">公寓</router-link></dd>
            <dd><router-link to="/" target="_blank">豪华酒店</router-link></dd>
            <dd><router-link to="/" target="_blank">客栈</router-link></dd>
            <dd><router-link to="/" target="_blank">青年旅社</router-link></dd>
            <dd><router-link to="/" target="_blank">度假酒店</router-link></dd>
            <dd><router-link to="/" target="_blank">别墅</router-link></dd>
            <dd><router-link to="/" target="_blank">农家院</router-link></dd>
          </dl>
          <!-- 吃美食 -->
          <dl class="web-meishi web-item">
            <dt>吃美食</dt>
            <dd>
              <router-link to="/" target="_blank">烤鱼</router-link>
            </dd>
            <dd>
              <router-link to="/" target="_blank">特色小吃</router-link>
            </dd>
            <dd>
              <router-link to="/" target="_blank">烧烤</router-link>
            </dd>
            <dd>
              <router-link to="/" target="_blank">自助餐</router-link>
            </dd>
            <dd>
              <router-link to="/" target="_blank">火锅</router-link>
            </dd>
            <dd>
              <router-link to="/" target="_blank">代金卷</router-link>
            </dd>
          </dl>

          <!-- 看电影 -->
          <dl class="web-movie web-item">
            <dt>看电影</dt>
            <dd>
              <router-link to="/" target="_blank">热映电影</router-link>
            </dd>
            <dd>
              <router-link to="/" target="_blank">热门影院</router-link>
            </dd>
            <dd>
              <router-link to="/" target="_blank">热映电影口碑榜</router-link>
            </dd>
            <dd>
              <router-link to="/" target="_blank">最受期待电影</router-link>
            </dd>
            <dd>
              <router-link to="/" target="_blank">国内票房榜</router-link>
            </dd>
            <dd>
              <router-link to="/" target="_blank">北美票房榜</router-link>
            </dd>
            <dd>
              <router-link to="/" target="_blank">电影排行榜</router-link>
            </dd>
          </dl>

          <!-- 手机应用 -->
          <dl class="web-app web-item">
            <dt>手机应用</dt>
            <dd>
              <router-link to="/" target="_blank">
                <img
                  class="app-icon"
                  src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
              /></router-link>
            </dd>

            <dd>
              <router-link to="/" target="_blank">
                <img
                  class="app-icon"
                  src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                  title="外卖app"
                  alt="外卖app"
              /></router-link>
            </dd>

            <dd>
              <router-link to="/" target="_blank">
                <img
                  class="app-icon"
                  src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                  title="民宿app"
                  alt="民宿app"
              /></router-link>
            </dd>

            <dd>
              <router-link to="/" target="_blank">
                <img
                  class="app-icon"
                  src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                  title="点评app"
                  alt="点评app"
              /></router-link>
            </dd>

            <dd>
              <router-link to="/" target="_blank">
                <img
                  class="app-icon"
                  src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                  title="猫眼app"
                  alt="猫眼app"
              /></router-link>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* nav 子项样式 */
.nav-list .nav-item {
  display: inline-block;
  box-sizing: border-box;
  padding: 12px 14px;
  cursor: pointer;
  position: relative;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}

/* 列表样式 */
.drop-down-list {
  display: none;
  width: 100%;
  position: absolute;
  top: 95%;
  right: -1px;
  background-color: #fff;
  box-sizing: content-box;
  border: 1px solid #e5e5e5;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 3px 5px 0 rgb(0 0 0 0.1);
  z-index: 1000;
}

.drop-down-list:after {
  content: "";
  background: #fff;
  width: 76px;
  height: 3px;
  position: absolute;
  top: -2px;
  right: 0;
}

.drop-down-list dd {
  line-height: 35px;
  text-align: center;
}

/* 商家中心 */
.drop-down-list.nav-merCenter {
  width: 140%;
}

/* 网站导航 */
.drop-down-list.nav-web {
  width: 1200px;
  box-sizing: border-box;
  border-top-left-radius: 4px;
  padding: 30px 36px 36px 47px;
}


.nav-web .web-item {
  margin-right: 40px;
  text-align: left;
}

.nav-web .web-item dt {
  margin-bottom: 26px;
  font-size: 14px;
  color: #222222;
  font-weight: 500;
  text-align: center;
}

.nav-web .web-item dd {
  text-align: center;
  line-height: 16px;
  padding: 5px 0;
}

/* 酒店旅游 */
.web-jiulv {
  width: 234px;
}

.web-jiulv dd {
  display: inline-block;
  width: 33%;
}

/* 吃美食 */
.web-meishi {
  width: 156px;
}
.web-meishi dd {
  display: inline-block;
  width: 50%;
}

/* 看电影 */
.web-movie {
  width: 90px;
}

.web-movie dd {
  width: 100%;
}

/* 手机应用 */
.web-app {
  width: auto;
  position: absolute;
  right: 0;
  padding-right: 45px;
}
.web-app dd {
  display: inline-block;
  margin: 0 8px;
}
.app-icon {
  width: 60px;
  height: 60px;
  border: 0;
}

/* 当鼠标指向导航时,导航条样式*/
.nav-list .nav-drop-down:hover {
  background-color: #fff;
  border-color: #e5e5e5;
  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);
}

/* 当鼠标指向导航时,下拉列表显示*/
.nav-drop-down:hover .drop-down-list {
  display: block;
}
.nav-drop-down:hover .drop-down-list.nav-web {
  display: flex;
}


a:hover{
  color: #fe8c00;
}
</style>