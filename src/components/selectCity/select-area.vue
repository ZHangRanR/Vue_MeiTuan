<template>
  <div class="select-area-container">
    <div class="choose-by-province">
      <h3 class="title">按省份选择:</h3>
      <div class="choose-wrapper">
        <!-- 省份选择 -->
        <div class="province-choose" @click.self="showProv">
          {{ province }}<span class="icon"></span>

          <!-- 省份列表 -->
          <div class="mt-provinces" :class="{ active: isShowProv }">
            <p>省份</p>
            <div class="provinces-wrapper">
              <span
                class="prov-item"
                :class="{ bgColor: item.provinceName === province }"
                v-for="item of citylist"
                :key="item.provinceCode"
                @click="selectProv(item)"
              >
                {{ item.provinceName }}
              </span>
            </div>
          </div>
        </div>

        <!-- 城市列表 -->
        <div
          class="city-choose"
          @click.self="showCity"
          :class="{ noSelect: !isProvince }"
        >
          城市<span class="icon"></span>

          <!-- 城市列表 -->
          <div class="mt-city" :class="{ active: isShowCity }">
            <p>城市</p>
            <div class="city-wrapper">
              <div class="city-col" v-for="n of colCount" :key="n">
                <router-link
                  to="./"
                  class="city-item"
                  v-for="item of citiesList.slice(0 + 12 * (n - 1), 12 * n)"
                  :key="item.id"
                  @click="changeCity(item.name)"
                >
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 直接搜索 -->
    <div class="search">
      <h3 class="title">直接搜索：</h3>
      <input
        type="text"
        class="sarch-box"
        v-model="msg"
        placeholder="请输入城市中文或拼音"
        @focus="showSearch" 
        @input="showSearch" 
        @blur="hiddeList"
      />
      <div
        class="search-city-wrapper"
        v-show="msg"
        :class="{ active: isShowSearch }"
      >
        <div class="match-city" v-if="searchCityList.length">
          <router-link
            to="./"
            class="search-city-item"
            v-for="item of searchCityList"
            :key="item.id"
            @click="changeCity(item.name)"
          >
            {{ item.name }}
          </router-link>
        </div>
        <div class="no-match-city" v-else>未找到匹配的城市</div>
      </div>
    </div>
  </div>
</template>

<script>
import { cityList } from "@/data/city.js";

export default {
  // 数据
  data() {
    return {
      province: "省份",
      isProvince: false,
      isShowProv: false,
      isShowCity: false,
      isShowSearch: false,
      citylist: cityList,
      nowProvince: null,
      msg: null,
      isMatch: true,
    };
  },

  // 方法
  methods: {
    // 改变 store 内的城市信息
    changeCity(cities) {
      return this.$store.commit("changeCity", cities);
    },
    // 显示省份列表
    showProv() {
      this.isShowProv = !this.isShowProv;
      this.isShowCity = false;
      this.isShowSearch = false;
    },

    // 点击省份时触发事件
    selectProv(ele) {
      this.isProvince = true;
      this.isShowProv = false;
      this.province = ele.provinceName;
      this.nowProvince = ele;
    },

    // 显示城市列表
    showCity() {
      if (this.isProvince) {
        this.isShowCity = !this.isShowCity;
        this.isShowProv = false;
        this.isShowSearch = false;
      }
    },

    // 显示城市列表
    showSearch() {
      this.isShowCity = false;
      this.isShowProv = false;
      this.isShowSearch = true;
    },
    
    hiddeList(){
      setTimeout(()=>{
        this.isShowSearch = false;
      },100)
    },
  },

  // 计算属性
  computed: {
    // 城市显示列表的城市集合
    citiesList() {
      return this.nowProvince.cityInfoList;
    },

    // 城市选择列表显示的列数
    colCount() {
      if (!this.nowProvince) return 0;
      else return Math.ceil(this.nowProvince.cityInfoList.length / 12);
    },

    // 直接搜索 根据输入信息获取城市列表
    searchCityList() {
      const arr = [];
      cityList.map((item) => {
        item.cityInfoList.filter((item) => {
          if (
            (item.pinyin.indexOf(this.msg) !== -1 ||
              item.name.indexOf(this.msg) !== -1 ||
              item.acronym.indexOf(this.msg) !== -1) &&
            this.msg !== ""
          )
            arr.push(item);
        });
      });

      return arr.sort((a, b) => {
        let n = a.rank.codePointAt() - b.rank.codePointAt();
        if (n === 0) return a.id - b.id;
        return n;
      });
    },
  },
};
</script>

<style scoped>
.select-area-container {
  display: flex;
  align-items: center;
}

.choose-by-province,
.search {
  display: flex;
  align-items: center;
}
.search {
  margin-left: 60px;
}
/* 选择框标签 */
.title {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  vertical-align: top;
  display: inline-block;
}

/* 选择框样式 */
.choose-wrapper .province-choose,
.choose-wrapper .city-choose,
.sarch-box {
  display: inline-block;
  position: relative;
  width: 150px;
  height: 40px;
  color: #666;
  font-size: 14px;
  box-sizing: border-box;
  padding: 10px 0 10px 10px;
  margin-left: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  cursor: pointer;
}
.sarch-box {
  margin-left: 10px;
  width: 220px;
  cursor: text;
}

/* 三角图标 */
.icon:after {
  content: "";
  display: inline-block;
  box-sizing: border-box;
  border: 4px solid transparent;
  border-top-color: #666;
  position: absolute;
  right: 11px;
  top: calc(50%);
  transform: translateY(-25%);
}

/* 省份详细列表 */
.mt-provinces,
.mt-city {
  display: none;
  position: absolute;
  top: 45px;
  left: 0;
  height: 375px;
  padding: 20px 0 20px 15px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
}
.mt-provinces {
  width: 264px;
}

.mt-city {
  min-width: 150px;
}

/* 三角形箭头 */
.mt-provinces:after,
.mt-provinces:before,
.mt-city:after,
.mt-city:before,
.search-city-wrapper:before,
.search-city-wrapper:after {
  content: "";
  display: block;
  border: 6px solid transparent;
  box-sizing: border-box;
  position: absolute;
  left: 25px;
}

.mt-city:after,
.mt-provinces:after,
.search-city-wrapper:after {
  top: -12px;
  border-bottom-color: #fff;
}
.mt-city:before,
.mt-provinces:before,
.search-city-wrapper:before {
  top: -13px;
  border-bottom-color: #e5e5e5;
}

/* 列表名称 */
p {
  font-size: 16px;
  color: #ccc;
  margin-bottom: 17px;
}

/* 省份列表 */
.provinces-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 17px;
}

/* 省份名称样式 */
.prov-item,
.city-item,
.search-city-item {
  cursor: pointer;
  font-size: 12px;
  color: #666;
  display: block;
  min-width: 40px;
  box-sizing: border-box;
  height: 20px;
  padding: 1px 8px;
  margin: 0px 38px 6px 0;
  white-space: nowrap;
}
.prov-item:hover {
  border-radius: 10px;
  background: #f4f4f4;
}

/* 当选中该省份时 */
.bgColor {
  background: linear-gradient(to bottom right, #ffd000, #ffbd00);
  border-radius: 10px;
  color: #222222;
}

.city-wrapper {
  display: table-row;
}
.city-wrapper .city-col {
  display: table-cell;
}

/* 直接搜索 */
.search {
  position: relative;
}
.search-city-wrapper {
  display: none;
  position: absolute;
  cursor: default;
  top: 47px;
  left: 90px;
  border-radius: 4px;
}

.match-city {
  overflow-y: scroll;
  min-width: 150px;
  max-height: 375px;
  padding: 0 20px 0 15px;
  margin-top: -1px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);
}
.no-match-city {
  min-width: 150px;
  font-size: 12px;
  color: #666;
  display: block;
  box-sizing: border-box;
  min-width: 40px;
  padding: 1px 8px;
  padding: 10px 20px 10px 15px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
}

.search-city-item {
  margin-top: 6px;
}

/* 鼠标标识: 禁止选择 */
.noSelect {
  cursor: not-allowed !important;
}

/* 选中状态 */
.active {
  display: block !important;
}
</style>