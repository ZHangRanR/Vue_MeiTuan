<template>
  <div class="production">
    <a
      href="javascript:void(0)"
      class="recommend-item"
      v-for="item of productList"
      :key="item.itemId"
    >
      <div class="card-container">
        <div class="recommend-card-wrapper">
          <!-- 图片 -->
          <div class="img-box">
            <img :src="item.imgUrl" class="image" />
          </div>

          <!-- 店铺信息 -->
          <div class="info-box">
            <!-- 介绍 -->
            <div class="title aligned" :title="item.title">
              {{ item.title }}
            </div>

            <!-- 评价 -->
            <div class="score-line aligned">
              <!-- 评分 -->
              <div class="score">
                  <p class="star" :style="{backgroundPositionY:(Math.round(item.score)*22 - 110) + 'px'}"></p>
              </div>
              <!-- 评价数 -->
              <div class="comment-number">{{ item.commentNum }}个评价</div>
            </div>

            <!-- 地址 -->
            <div class="desc-line aligned">
              <div class="desc">{{ item.areaName }}</div>
            </div>

            <!-- 价格 -->
            <div class="bottom-line aligned">
              <div class="price-box">
                <span
                  ><span class="yuan">￥</span
                  ><span class="price-number numfont">{{ item.lowPrice }}</span
                  ><span class="price-desc">起</span></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { recommends } from "@/data/recommends.js";
export default {
  data() {
    return {
      productList: recommends,
    };
  },
  mounted() {
    console.log(this.productList);
  },
};
</script>

<style scoped>
/* 容器样式 */
.production {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  max-height: 758px;
  padding: 10px 10px 20px;
  width: 100%;
  box-sizing: border-box;
  overflow-y: hidden;
  text-align: left;
}

.recommend-item {
  width: 20%;
  margin-bottom: 2px;
  box-sizing: border-box;
  vertical-align: middle;
}

.card-container {
  padding: 10px;
}

.recommend-card-wrapper {
  width: 100%;
  box-sizing: border-box;
}
.card-container:hover {
  background: #f4f4f4;
  transition: background-color 500ms;
  border-radius: 4px;
}

/* 图片 */
.recommend-card-wrapper .img-box {
  height: 0;
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: 4px;
  overflow: hidden;
}

.recommend-card-wrapper .img-box img {
  width: 100%;
  height: auto;
  font-size: 0;
}

/* 信息 */
.recommend-card-wrapper .info-box {
  position: relative;
  margin-top: 10px;
}

/* 店铺名称 */
.recommend-card-wrapper .info-box .title {
  font-size: 14px;
  color: #222222;
  line-height: 20px;
  width: 100%;
  margin: 0;
  font-weight: 500;
}
.recommend-card-wrapper .info-box .title.aligned {
  font-size: 16px;
  line-height: 22px;
  width: 100%;
  height: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

/* 评价 */
.recommend-card-wrapper .info-box .score-line.aligned {
  height: 24px;
}

 .recommend-card-wrapper .info-box .score-line .score .star {
  display: inline-block;
  margin-right: 5px;
  zoom: 1;
  background: url(~@/Images/star.png) no-repeat;
  width: 55px;
  height: 11px;
  overflow: hidden;
  color: #000;
  background-position-x: 0;
  background-position-y: -22px;
}
.recommend-card-wrapper .info-box .score-line .comment-number {
  font-size: 12px;
  color: #999;
  height: 24px;
  line-height: 24px;
  margin-left: 10px;
}
.recommend-card-wrapper .info-box .score-line div {
  display: inline-block;
}

/* 地址 */
.recommend-card-wrapper .info-box .desc-line.aligned {
  height: 18px;
}
.recommend-card-wrapper .info-box .desc-line .desc {
  font-size: 12px;
  color: #999999;
  width: 100%;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 4px;
}

/* 价格 */
.recommend-card-wrapper .info-box .bottom-line {
  position: relative;
}
.recommend-card-wrapper .info-box .bottom-line.aligned {
  height: 28px;
}
.recommend-card-wrapper .info-box .bottom-line .price-box {
  color: #ff6600;
}
.recommend-card-wrapper .info-box .bottom-line .price-box .price-number {
  font-size: 22px;
}
.recommend-card-wrapper .info-box .bottom-line .price-box .price-desc {
  font-size: 12px;
  margin-left: 4px;
  font-weight: 700;
}

</style>