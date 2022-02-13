<template>
  <div class="code-city-wrapper">
    <!-- 字母列表 -->
    <div class="code-row">
      <h3 class="title">按拼音首字母选择：</h3>
      <a
        v-for="item of codeList"
        :key="item"
        class="code"
        :href="'#code-' + item"
        >{{ item }}</a
      >
    </div>

    <!-- 城市列表 -->
    <div class="code-city">
      <div
        class="city-area"
        :id="'code-' + item"
        v-for="item of codeList"
        :key="item"
      >
        <div class="code-name">{{ item }}</div>
        <div class="code-item">
          <router-link
            to="/"
            v-for="prop of codeCity(item)"
            :key="prop.id"
            class="city"
            :class="{ hotcity: isHot(prop.name) }"
            @click="changeCity(prop.name)"
            >{{ prop.name }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cityList } from "@/data/city.js";

export default {
  data() {
    return {
      codeList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z",
      ],
      hotCity: this.$store.state.hotCity,
    };
  },
  methods: {
    changeCity(cities) {
      return this.$store.commit("changeCity", cities);
    },

    // 获取对应的城市列表
    codeCity(code) {
      const arr = [];
      cityList.map((item) => {
        item.cityInfoList.filter((item) => {
          if (item.firstChar === code) arr.push(item);
        });
      });

      if(arr.length === 0) return [{id:"000",name:"未匹配到对应的城市"}];

      return arr.sort((a,b) => {
        let n = a.rank.codePointAt() - b.rank.codePointAt();
        if( n === 0) return a.id - b.id ;
        return n;
      });
    },

    // 判断是否是热门城市
    isHot(item) {
      return this.hotCity.find((e) => {
        return e == item;
      });
    },
  },
};
</script>

<style scoped>
/* 字母列表 */
.code-row {
  min-width: 1000px;
  font-size: 14px;
  vertical-align: top;
  display: inline-block;
  margin-top: 2px;
}

.title {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  vertical-align: top;
  display: inline-block;
}

.code {
  font-size: 15px;
  margin: 0 17px;
  color: #666;
  display: inline-block;
  margin: 0 10px;
  width: 25px;
  height: 25px;
  padding-top: 2px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  line-height: 21px;
  border-radius: 50%;
}
.code:hover{
  background-color:#f8f8f8 ;
  color: #222;
  font-weight: 500;
}
/* 城市列表 */
.city-area {
  padding: 13px 30px 13px 10px;
  border-radius: 10px;
  -webkit-transition: background-color 500ms;
  -ms-transition: background-color 500ms;
  transition: background-color 500ms;
}
.city-area:hover {
  background: #f8f8f8;
}

/* 字母格式 */
.code-city {
  margin-top: 30px;
}

.code-name {
  box-sizing: border-box;
  vertical-align: top;
  padding-top: 10px;
  display: inline-block;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #222222;
  background: #ffd000;
}

.code-item {
  /* display: inline-block; */
  max-width: 1065px;
  display: inline-flex;
  flex-wrap: wrap;
}

.city {
  margin: 10px 20px;
  color: #666;
  display: inline-block;
  font-size: 14px;
}

.hotcity {
  order: -1000;
  color: #ff6600;
}

.city:hover{
  color: #222;
}
</style>