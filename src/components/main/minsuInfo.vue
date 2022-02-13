<template>
  <div class="minsuInfo">
    <div class="minsu-item" v-for="item of minsuList" :key="item.productId">
      <a href="javascript:void(0)" target="_blank">
        <div class="item-card">
          <img :src="item.coverImage" class="item-img" /><img
            :src="item.hostAvatarUrl"
            alt=""
            class="customer-img"
          />
        </div>

        <div class="item-info">
          <p class="item-title">
            {{ item.title }}
          </p>
          <p class="sub-title">
            <span>整套{{ item.layoutRoom }}居室·</span
            ><span>可住{{ item.maxGuestNumber }}人 | </span
            ><span>{{ item.locationArea }}</span>
          </p>
          <p class="price-number numfont price">
            <span class="price-icon">￥</span>{{ item.price }}
          </p>
        </div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["minsuList"],
};
</script>

<style scoped>
.minsuInfo {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  padding-right: 0;
  padding-bottom: 0;
  border: 1px solid #e5e5e5;
  border-top: 0px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #fff;
}
.minsu-item {
  margin-right: 18px;
}
.minsu-item .item-card {
  position: relative;
}

/* 民宿图片 */
.minsu-item .item-card .item-img {
  width: 370px;
  height: 208px;
  border-radius: 4px;
  max-width: 100%;
  height: 208px;
  margin-bottom: 11px;
  cursor: pointer;
}

/* 用户头像 */
.customer-img {
  border: 2px solid #ffffff;
  height: 48px;
  width: 48px;
  position: absolute;
  bottom: -12px;
  right: 15px;
  z-index: 9;
  border-radius: 40px;
}

/* 文字介绍 */
.item-info {
  text-align: left;
  padding-bottom: 25px;
}
/* 民宿介绍 */
.item-title {
  font-size: 16px;
  color: #222222;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 7px 0;
  font-weight: 400;
  width: 297px;
}

/* 地理位置 */
.sub-title {
  font-size: 12px;
  color: #999999;
  text-align: left;
}

/* 价格 */
.price {
  font-weight: 500;
  font-size: 22px;
  color: #ff6600;
  letter-spacing: -0.8px;
  padding: 4px 0;
  font-family: "numbers" !important;
}

</style>