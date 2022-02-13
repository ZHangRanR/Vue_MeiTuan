<template>
  <div class="mt-link-container">
    <div class="title">美团导航</div>

    <!-- 热门城市 -->
    <div class="hotCity-link">
      <div class="item-title">热门城市</div>
      <div class="hotCity-list row">
        <a
          href="#"
          class="item"
          v-for="item of hotCity"
          :key="item"
          @click="changeCity(item)"
        >
          {{ item }}</a
        >
      </div>
    </div>

    <!-- 热门分类 -->
    <div class="hotClass">
      <div class="item-title">热门分类</div>
      <div class="hotClass-list row">
        <router-link
          to="./"
          class="item"
          v-for="item of hotClassList"
          :key="item"
        >
          {{ item }}
          <span class="hot" v-if="item === '酒店'">HOT</span>
        </router-link>
      </div>
    </div>

    <!-- 周边热门 -->
    <div class="periphery">
      <div class="item-title">周边热门</div>
      <div class="periphery-list row">
        <router-link
          class="item"
          to="./"
          v-for="item of PeripheryList"
          :key="item"
        >
          {{ item }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotCityList: [
        "南京",
        "合肥",
        "长春",
        "厦门",
        "东莞",
        "成都",
        "太原",
        "佛山",
        "武汉",
        "杭州",
        "常州",
        "宁波",
        "长沙",
        "西安",
        "贵阳",
        "北京",
        "沈阳",
        "温州",
        "郑州",
        "福州",
        "无锡",
        "石家庄",
        "济南",
        "苏州",
        "大连",
        "南宁",
        "上海",
        "广州",
        "天津",
        "昆明",
      ],
      hotClassList: [
        "酒店",
        "美食",
        "休闲娱乐",
        "运动健身",
        "生活服务",
        "上门服务",
        "购物",
        "时尚购",
        "本地购物",
        "结婚",
        "摄影写真",
        "宴会",
        "丽人",
        "母婴亲子",
        "学习培训",
        "家装",
        "汽车服务",
        "医疗",
        "宠物",
      ],
      PeripheryList: [
        "崇明区酒店",
        "昆山美食",
        "昆山休闲娱乐",
        "昆山运动健身",
        "昆山生活服务",
        "昆山上门服务",
        "崇明区购物",
        "太仓时尚购",
        "崇明区本地购物",
        "崇明区结婚",
        "太仓摄影写真",
        "崇明区宴会",
        "太仓丽人",
        "太仓母婴亲子",
        "昆山学习培训",
        "崇明区家装",
        "太仓汽车服务",
        "昆山医疗",
        "崇明区宠物",
      ],
    };
  },
  methods: {
    changeCity(cities) {
      return this.$store.commit("changeCity", cities);
    },
  },
  computed: {
    hotCity() {
      let arr = this.hotCityList;
      arr = arr
        .sort(() => {
          return Math.random() - Math.random();
        })
        .slice(0, 20);
      return arr;
    },
  },
};
</script>

<style scoped>
.mt-link-container {
  background-color: #fff;
  margin-top: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
}

/* 标题: 美团导航 */
.title {
  font-size: 16px;
  padding-left: 20px;
  padding-top: 6px;
  line-height: 44px;
}

/* 热门分类 */
.hotCity-link,
.hotClass,
.periphery {
  position: relative;
  padding-top: 12px;
  padding-left: 20px;
}

/* 分类标题 */
.item-title {
  position: absolute;
  width: 80px;
  font-size: 14px;
}

/* 分类列表 */
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  width: 1090px;
  margin-left: 80px;
  border-bottom: 1px solid #e5e5e5;
}
.periphery-list.row {
  border-bottom: none;
}

/* 分类子项 */
.item {
  height: 17px;
  font-size: 12px;
  text-align: left;
  margin-bottom: 13px;
  width: 80px;
  margin-right: 20px;
  cursor: pointer;
  color: #666666;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

/* HOT 标签 */
.hot {
  font-size: 12px;
  color: #fff;
  background: #ff4848;
  font-weight: 400;
  border-radius: 10px;
  padding: 0px 6px;
  margin: 0px 5px;
  position: relative;
  top: -1px;
}

/* a 标签指向时 */
a:hover {
  color: #fe8c00;
}
</style>